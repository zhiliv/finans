<template>
  <div class="w-full h-[calc(100vh-28px-70px)] items-start lg:py-0 py-1 bg-stone-800">
    <div class="items-start h-full">
      <div class="grid grid-cols-12 h-full">
        <div class="lg:col-span-3 col-span-12 h-full mx-4 lg:mx-0 min-h-[150px]">
          <app-listbox-items
            :list="list"
            class="border border-gray-400 bg-stone-700 min-h-[100%]"
            v-model="valueModel"
            :is-load="isLoadList"
            ref="list"
            :on-delete="onDeleteItem"
          />
        </div>
        <div class="lg:col-span-9 col-span-12 w-full overflow-y-scroll">
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
import appSub from '~/pages/sub/sub_offers.vue' // подключение саб формы
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
      list: [], // список офферов
      isLoadList: false, // статус загрузки данных
      valueModel: {
        name: null, // значение поля "Наименование"
        id_category: null, // идентификатор категории
        status: null, // значение статуса
        id_cpa: null, // идентификатор партнерской программы
        description: null, // описание
        short_description: null, // короткое описание
        sum_start: null, // минимальная сумма
        sum_end: null, // максимальная сумма
        free_period: null, // беспроцентный период
        type_free_period: null, // тип беспроцентного периода
        period_min: null, // минимальный период
        type_period_max: null // тип максимального периода
      }, // данные страницы
      title: 'Офферы',
      disabledSave: true, // доступность кнопки "Сохранить"
      disabledCancel: true, // доступность кнопки "Отменить"
    }
  },

  async beforeMount() {
    const { pending, data: list } = await useFetch('/api/offers/all') // получение данных списка
    this.isLoadList = !!pending // установка статуса загрузки
    this.list = list // установка списка
  },

  methods: {
    /*
     * Создание нового оффера
     * @function onNew
     */
    async onNew() {
      const { $showModal, list, capitalize, selectItem, $showToast } = this
      const body = await $showModal('modal_name', { modalTitle: 'Создание нового оффера' })
      if (body) {
        body.name = capitalize(body.name)
        const paramsResponse = { method: 'POST', body }
        const response = await useFetch('/api/offers/add', paramsResponse) // получение данных списка
        if (response) {
          this.list.push(response.data.value)
          const index = list.findIndex(el => el.id === response.data.value.id)
          selectItem(index)
          const paramsToast = {
            title: '',
            message: 'Запись успешно создана',
            timer: 5000,
            class: 'alert-success',
          }
          $showToast(paramsToast)
        }
      }
    },
    /*
     * Удаление типа документа
     * @function onDeleteItem
     * @param {Object} item - элемент
     */
    async onDeleteItem(item) {
      const { list, $showConfirm, selectItem, $showToast } = this
      const options = {
        message: 'Удалить оффер?',
      } // опции формы подтверждения
      const confirm = await $showConfirm(options) // открытие окна подтверждение
      if (confirm) {
        const index = list.findIndex(el => el.id === item.id) // получение индекса элемента
        const paramsResponse = { method: 'DELETE', body: list[index].id }
        const response = await useFetch('/api/offers/del', paramsResponse) // получение данных списка
        let paramsToast
        if (response.data != 1)
          paramsToast = {
            title: '',
            message: 'Запись удалена успешно',
            timer: 5000,
            class: 'alert-warning',
          }
        else
          paramsToast = {
            title: 'Ошибка: ',
            message: 'response.errror',
            timer: 5000,
            class: 'alert-error',
          }
        $showToast(paramsToast)
        list.splice(index, 1) // удаление элемента из списка
        selectItem()
      }
    },
    /*
     * Получение значения валидности полей
     * @function getInvalid
     * @param {invalid} Boolean - Значение валидности
     */
    getInvalid(invalid) {
      this.disabledSave = this.disabledSave || invalid || !this.valueModel.id
    },
    /*
     * Сохранение данных
     * При нажатии на кнопку "Сохранить"
     * @function onSave
     */
    async onSave() {
      const { $showConfirm, cloneObject, capitalize, selectItem, $showToast } = this
      const optionsConfirm = {
        message: 'Есть не сохраненные данные, отменить изменения?',
      }
      const confirm = await $showConfirm(optionsConfirm) // открытие окна подтверждение
      if (confirm) {
        const index = this.list.findIndex(el => el.id == this.valueModel.id) // получение идентификатора выделенного элемента
        const body = cloneObject(this.valueModel)
        body.name = capitalize(body.name)
        const paramsResponse = { method: 'POST', body }
        const response = await useFetch('/api/offers/edit', paramsResponse) // получение данных списка
        if (response) {
          const paramsToast = {
            title: '',
            message: 'Данные записи успешно обновлены',
            timer: 5000,
            class: 'alert-success',
          }
          $showToast(paramsToast)
          this.list[index] = this.valueModel // Изменение объекта выделенного элемента в списка
          selectItem(index)
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

    /*
     * Выделение элемента списка
     * @function selectItem
     * @param {Number} index Индекс выделяемого элемента
     */
    selectItem(index) {
      const { $nextTick, list, $refs } = this
      if (list.length)
        $nextTick(() => {
          $refs.list.$el.querySelectorAll('li')[index ? index : 0].click() // эмуляция клика по элементу
        })
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