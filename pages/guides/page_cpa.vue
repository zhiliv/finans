<template>
  <div class="w-full h-[calc(100vh-28px-70px)] items-start lg:py-0 py-1 bg-stone-800">
    <div class="items-start h-full">
      <div class="grid grid-cols-12 h-full">
        <div class="lg:col-span-3 col-span-12 h-full mx-4 lg:mx-0">
          <app-listbox-items
            :list="list"
            class="border border-gray-400 bg-stone-700"
            v-model="valueModel"
            :is-load="isLoadList"
            ref="list"
            :on-delete="onDeleteItem"
          />
        </div>
        <div class="lg:col-span-9 col-span-12 w-full">
          <div class="grid grid-cols-12">
            <app-sub @invalid="getInvalid" v-model="valueModel" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <app-control-buttons
    :disabled-save="disabledSave"
    :on-save="onSave"
    :on-cancel="onCancel"
    :on-new="onNew"
    :disabled-cancel="disabledCancel"
  />
</template>

<script>
import appSub from '~/pages/sub/sub_name.vue' // подключение саб формы
import appControlButton from '~/pages/sub/control_edit.vue' // подключение саб формы с кнопка ми управления
import mixinFunction from '~/mixins/globalMixins'
export default {
  mixins: [mixinFunction],
  components: {
    'app-sub': appSub,
    'app-control-buttons': appControlButton,
  },

  data() {
    return {
      list: [], // список партнерских программ
      isLoadList: true, // статус загрузки данных
      valueModel: {}, // данные страницы
      title: 'ываыва',
      disabledSave: true, // доступность кнопки "Сохранить"
      disabledCancel: true, // доступность кнопки "Отменить"
    }
  },

  async beforeMount() {
    const { pending, data: list } = await useFetch('/api/cpa/all') // получение данных списка
    this.isLoadList = pending // установка статуса загрузки
    this.list = list // установка списка
  },

  methods: {
    /*
     * Создание новой партнерской программы
     * @function onNew
     */
    async onNew() {
      const { $showModal, $nextTick, list } = this
      const result = await $showModal('modal_name', { modalTitle: 'Создание новой партнерской программы' })
      if (result) {
        const response = await useFetch('/api/cpa/add', { method: 'POST', body: result }) // получение данных списка
        if (response) {
          this.list.push(response.data.value)
          const index = list.findIndex(el => el.id === response.data.value.id)
          $nextTick(() => {
            this.$refs.list.$el.querySelectorAll('li')[index].click() // эмуляция клика по элементу
          })
          this.$showToast({
            title: '',
            message: 'Запись успешно создана',
            timer: 5000,
            class: 'alert-success',
          })
        }
      }
    },
    /*
     * Удаление партнерской программы
     * @function onDeleteItem
     * @param {Object} item - элемент
     */
    async onDeleteItem(item) {
      const { list, $showConfirm } = this
      const options = {
        message: 'Удалить партнерскую программу?',
      } // опции формы подтверждения
      const confirm = await $showConfirm(options) // открытие окна подтверждение
      if (confirm) {
        const index = list.findIndex(el => el.id === item.id) // получение индекса элемента
        const response = await useFetch('/api/cpa/del', { method: 'DELETE', body: list[index].id }) // получение данных списка
        if (response.data != 1)
          this.$showToast({
            title: '',
            message: 'Запись удалена успешно',
            timer: 5000,
            class: 'alert-warning',
          })
        else
          this.$showToast({
            title: 'Ошибка: ',
            message: 'response.errror',
            timer: 5000,
            class: 'alert-error',
          })

        list.splice(index, 1) // удаление элемента из списка
        this.$refs.list.$el.querySelectorAll('li')[index - 1].click() // эмуляция клика по элементу
      }
    },
    /*
     * Получение значения валидности полей
     * @function getInvalid
     * @param {invalid} Boolean - Значение валидности
     */
    getInvalid(invalid) {
      this.disabledSave = this.disabledSave || invalid
    },
    /*
     * Сохранение данных
     * При нажатии на кнопку "Сохранить"
     * @function onSave
     */
    async onSave() {
      const { $showConfirm, list, valueModel } = this
      const optionsConfirm = {
        message: 'Есть не сохраненные данные, отменить изменения?',
      }
      const confirm = await $showConfirm(optionsConfirm) // открытие окна подтверждение
      if (confirm) {
        const index = this.list.findIndex(el => el.id == this.valueModel.id) // получение идентификатора выделенного элемента
        const response = await useFetch('/api/cpa/edit', { method: 'POST', body: valueModel }) // получение данных списка
        if (response) {
          this.$showToast({
            title: '',
            message: 'Данные записи успешно обновлены',
            timer: 5000,
            class: 'alert-success',
          })
          this.list[index] = this.valueModel // Изменение объекта выделенного элемента в списка
          this.$nextTick(() => {
            // после рендеринга
            this.$refs.list.$el.querySelectorAll('li')[index].click() // эмуляция клика по элементу
          })
        }
      }
    },

    /*
     * Отмена изменения данных
     * @function onCancel
     */
    async onCancel() {
      const { $showConfirm, list, valueModel } = this
      const optionsConfirm = {
        message: 'Есть не сохраненные данные, отменить изменения?',
      }
      const confirm = await $showConfirm(optionsConfirm) // открытие окна подтверждение
      if (confirm) {
        // если нажата кнока "Да"
        const index = list.findIndex(el => el.id === valueModel.id) // получение индекса элемента в списке
        const item = this.cloneObject(list[index]) // клонирование элемента в объектную модель
        delete item.isActive // удаление свойства
        this.valueModel = item // установка значения данных модели
      }
    },
  },

  watch: {
    /* Наблюдение за изменением выделенного элемента */
    valueModel: {
      handler(newValue) {
        const { checkEmptyObject, valueModel, list, withObject, cloneObject } = this
        if (!checkEmptyObject(valueModel)) {
          // проверка что объект не пустой
          const index = list.findIndex(el => el.id === valueModel.id) // получение индекса элемента
          const obj = cloneObject(list[index]) // клонирование объекта
          delete obj.isActive // удаление свойства isActive
          this.disabledSave = withObject(valueModel, obj) // установка доступности кнопки "Сохранить"
          this.disabledCancel = withObject(valueModel, obj) // установка доступности кнопки "Отменить"
        } else this.disabledSave = true
      },
      deep: true,
    },
  },
}
</script>

<style>
</style>


