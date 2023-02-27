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
import appSub from '~/pages/sub/sub_cpa.vue' // подключение саб формы
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
      isLoadList: false, // статус загрузки данных
      valueModel: {}, // данные страницы
      title: 'Партнерские программы', // Заголовок формы
      disabledSave: true, // доступность кнопки "Сохранить"
      disabledCancel: true, // доступность кнопки "Отменить"
    }
  },

  mounted() {
    const { getList } = this
    getList()
  },

  methods: {
    /*
     * Получение списка партнерских программ
     * @function getList
     */
    async getList() {
      const { processingListResponse } = this
      const { pending, data: list, error } = await useFetch('/api/cpa/all') // получение данных списка
      if (processingListResponse(error)) {
        this.list = list // установка списка
        this.isLoadList = !!pending // установка статуса загрузки
      }
    },

    /*
     * Создание новой партнерской программы
     * @function onNew
     */
    async onNew() {
      const { $showModal, list, capitalize, selectItem, processResponse } = this
      const body = await $showModal('modal_name', { modalTitle: 'Создание новой партнерской программы' })
      if (body) {
        body.name = capitalize(body.name)
        const paramsQuery = { method: 'POST', body } // параметры запроса
        const response = await useFetch('/api/cpa/add', paramsQuery) // получение данных списка
        console.log('🚀 -> onNew -> response:', response)
        if (processResponse(response)) {
          this.list.push(response.data.value.data)
          const index = list.findIndex(el => el.id === response.data.value.data.id)
          selectItem(index) // выбор элемента списка
        }
      }
    },
    /*
     * Удаление типа документа
     * @function onDeleteItem
     * @param {Object} item - элемент
     */
    async onDeleteItem(item) {
      const { list, $showConfirm, selectItem, processResponse } = this
      const options = {
        message: 'Удалить запись?',
      } // опции формы подтверждения
      const confirm = await $showConfirm(options) // открытие окна подтверждение
      if (confirm) {
        const index = list.findIndex(el => el.id === item.id) // получение индекса элемента
        const paramsQuery = { method: 'DELETE', body: list[index].id } // параметры запроса
        const response = await useFetch('/api/cpa/del', paramsQuery) // получение данных списка
        if (processResponse(response)) {
          list.splice(index, 1) // удаление элемента из списка
          if (list.length) selectItem()
          else this.valueModel.name = null
        }
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
      const { $showConfirm, cloneObject, capitalize, selectItem, processResponse } = this
      const optionsConfirm = {
        message: 'Сохранить изменения?',
      }
      const confirm = await $showConfirm(optionsConfirm) // открытие окна подтверждение
      if (confirm) {
        const index = this.list.findIndex(el => el.id == this.valueModel.id) // получение идентификатора выделенного элемента
        const body = cloneObject(this.valueModel)
        body.name = capitalize(body.name)
        const paramsQuery = { method: 'POST', body } // параметры запроса
        const response = await useFetch('/api/cpa/edit', paramsQuery) // получение данных списка
        if (processResponse(response)) {
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
    /* Наблюдение за статусом загрузкой списка */
    isLoadList(newValue) {
      const { selectItem } = this
      selectItem()
    },
  },
}
</script>