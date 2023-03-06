<template>
  <div class="w-full h-[calc(100vh-28px-70px)] items-start lg:py-0 py-1 bg-stone-800">
    <div class="items-start h-full">
      <div class="grid grid-cols-12 h-full">
        <div class="lg:col-span-3 col-span-12 h-full mx-4 lg:mx-0 min-h-[150px]">
          <app-listbox-items
            :list="list"
            class="border border-gray-400 bg-stone-700 min-h-[100%]"
            v-model="selectedItem"
            :is-load="isLoadList"
            ref="list"
            :on-delete="onDeleteItem"
          />
        </div>
        <div class="lg:col-span-9 col-span-12 w-full overflow-y-scroll">
          <div class="grid grid-cols-12">
            <div class="xl:col-span-3 col-span-12 mx-4">
              <app-input
                v-model.trim="valueModel.name"
                class="input-bordered w-full"
                :class="{'input-success': valueModel.name && valueModel.name.length > 2, 'input-error': !valueModel.name || valueModel.name.length < 3,}"
                label="Наименование"
              />
            </div>
            <div class="xl:col-span-2 col-span-12 mx-4">
              <app-select
                label="Статус"
                :select-class="{'select-success': valueModel.status, 'select-error': valueModel.status === null, 'select-warning': valueModel.status === false}"
                v-model="valueModel.status"
                :options="listStatus"
                required="true"
                value="value"
                is-load="true"
                :select-value="valueModel.status"
              />
            </div>
            <div class="xl:col-span-3 col-span-12 mx-4">
              <div class="w-full flex relative">
                <app-select
                  class="w-[calc(100%-44px)]"
                  :select-class="{'select-success': valueModel.id_cpa, 'select-error': !valueModel.id_cpa}"
                  label="Партнерская программа"
                  v-model.number="valueModel.id_cpa"
                  :options="listCPA"
                  :is-load="isLoadCPA"
                  :select-value="valueModel.id_cpa"
                />
                <app-button
                  @click="onNewCPA"
                  class="btn-sm btn-warning absolute top-[1.5em] right-0 font-bold hover:bg-amber-700 text-xl h-1/2"
                >+</app-button>
              </div>
            </div>
            <div class="xl:col-span-2 col-span-12 mx-4">
              <app-button
                class="my-3 xl:mt-6 btn-warning font-bold hover:bg-amber-700 w-full"
                @click="onSetCategory"
              >Категории</app-button>
            </div>
            <div class="xl:col-span-2 col-span-12 mx-4">
              <app-button
                class="my-3 xl:mt-6 btn-warning font-bold hover:bg-amber-700 w-full"
                @click="onSetMethodGetMoney"
              >Способы получения денег</app-button>
            </div>
            <div class="col-span-12 mx-4">
              <label class="label py-0 px-2" v-if="valueModel.short_description">Короткое описание</label>
              <textarea
                v-model.trim="valueModel.short_description"
                class="textarea textarea-bordered h-20 w-full my-2"
                :class="{'textarea-success': valueModel.short_description, 'textarea-error': !valueModel.short_description}"
                placeholder="Короткое описание"
              />
            </div>
            <div class="col-span-12 mx-4">
              <label class="label py-0 px-2" v-if="valueModel.description">Описание</label>
              <textarea
                v-model.trim="valueModel.description"
                class="textarea textarea-bordered h-60 w-full my-2"
                :class="{'textarea-success': valueModel.description, 'textarea-error': !valueModel.description}"
                placeholder="Описание"
              />
            </div>
            <div class="col-span-12 mx-4 my-4">
              <hr class="w-full" />
            </div>

            <div class="xl:col-span-3 col-span-12 border border-zinc-700 m-2 p-2">
              <div class="grid grid-cols-12">
                <div class="col-span-12 text-center border-b border-zinc-600">
                  <span class="p-0 m-0">Сумма</span>
                </div>
                <div class="xl:col-span-6 col-span-12 mx-4">
                  <app-input
                    v-model.number="valueModel.sum_start"
                    class="input-bordered w-full"
                    mask="##########"
                    :class="{'input-success': valueModel.sum_start, 'input-warning': !valueModel.sum_start}"
                    label="Мин."
                  />
                </div>
                <div class="xl:col-span-6 col-span-12 mx-4">
                  <app-input
                    v-model.number="valueModel.sum_end"
                    class="input-bordered w-full"
                    mask="##########"
                    :class="{'input-success': valueModel.sum_end, 'input-warning': !valueModel.sum_end}"
                    label="Макс."
                  />
                </div>
              </div>
            </div>

            <div class="xl:col-span-3 col-span-12 border border-zinc-700 m-2 p-2">
              <div class="grid grid-cols-12">
                <div class="col-span-12 text-center border-b border-zinc-600">
                  <span class="p-0 m-0">Беспроцентный период</span>
                </div>
                <div class="xl:col-span-4 col-span-12 mx-4">
                  <app-input
                    v-model.number="valueModel.free_period"
                    class="input-bordered w-full"
                    mask="###"
                    :class="{'input-success': valueModel.free_period, 'input-warning': !valueModel.free_period}"
                    label="Период"
                  />
                </div>
                <div class="xl:col-span-8 col-span-12 mx-4">
                  <app-select
                    class="w-full"
                    :select-class="{'select-success': valueModel.type_free_period, 'select-error': valueModel.free_period && !valueModel.type_free_period}"
                    label="Тип"
                    :disabled="valueModel.free_period === null"
                    v-model="valueModel.type_free_period"
                    :options="listTypePeriod"
                    :is-load="isLoadTypePeriod"
                    :select-value="valueModel.type_free_period"
                  />
                </div>
              </div>
            </div>
            <div class="xl:col-span-6 col-span-12 border border-zinc-700 m-2 p-2">
              <div class="grid grid-cols-12">
                <div class="col-span-12 text-center border-b border-zinc-600">
                  <span class="p-0 m-0">Период</span>
                </div>
                <div class="xl:col-span-2 col-span-12 mx-4">
                  <app-input
                    v-model.number="valueModel.period_min"
                    class="input-bordered w-full"
                    mask="###"
                    :class="{'input-success': valueModel.period_min, 'input-warning': !valueModel.period_min}"
                    label="Мин"
                  />
                </div>
                <div class="xl:col-span-4 col-span-12 mx-4">
                  <app-select
                    class="w-full"
                    :select-class="{'select-success': valueModel.type_period_min, 'select-error': valueModel.period_min && !valueModel.type_period_min}"
                    label="Тип(мин.)"
                    :disabled="valueModel.period_min === null"
                    v-model="valueModel.type_period_min"
                    :options="listTypePeriod"
                    :is-load="isLoadTypePeriod"
                    :select-value="valueModel.type_period_min"
                  />
                </div>
                <div class="xl:col-span-2 col-span-12 mx-4">
                  <app-input
                    v-model.number="valueModel.period_max"
                    class="input-bordered w-full"
                    mask="###"
                    :class="{'input-success': valueModel.period_max, 'input-warning': !valueModel.period_max}"
                    label="Макс"
                  />
                </div>
                <div class="xl:col-span-4 col-span-12 mx-4">
                  <app-select
                    class="w-full"
                    :select-class="{'select-success': valueModel.type_period_max, 'select-error': valueModel.period_max && !valueModel.type_period_max}"
                    label="Тип(макс.)"
                    :disabled="valueModel.period_max === null"
                    v-model="valueModel.type_period_max"
                    :options="listTypePeriod"
                    :is-load="isLoadTypePeriod"
                    :select-value="valueModel.type_period_max"
                  />
                </div>
              </div>
            </div>

            <div class="xl:col-span-3 col-span-12 border border-zinc-700 m-2 p-2">
              <div class="grid grid-cols-12">
                <div class="col-span-12 text-center border-b border-zinc-600">
                  <span class="p-0 m-0">Время рассмотрения</span>
                </div>
                <div class="xl:col-span-4 col-span-12 mx-4">
                  <app-input
                    v-model.number="valueModel.review_time"
                    class="input-bordered w-full"
                    mask="###"
                    :class="{'input-success': valueModel.review_time, 'input-warning': !valueModel.review_time}"
                    label="Значение"
                  />
                </div>
                <div class="xl:col-span-8 col-span-12 mx-4">
                  <app-select
                    class="w-full"
                    :select-class="{'select-success': valueModel.type_review_time, 'select-error': valueModel.review_time && !valueModel.type_review_time}"
                    label="Тип(макс.)"
                    :disabled="valueModel.review_time === null"
                    v-model="valueModel.type_review_time"
                    :options="listTypePeriod"
                    :is-load="isLoadTypePeriod"
                    :select-value="valueModel.type_review_time"
                  />
                </div>
              </div>
            </div>
            <div class="xl:col-span-3 col-span-12 border border-zinc-700 m-2 p-2">
              <div class="grid grid-cols-12">
                <div class="col-span-12 text-center border-b border-zinc-600">
                  <span class="p-0 m-0">Возраст</span>
                </div>
                <div class="xl:col-span-6 col-span-12 mx-4">
                  <app-input
                    v-model.number="valueModel.age_start"
                    class="input-bordered w-full"
                    mask="##"
                    :class="{'input-success': valueModel.age_start, 'input-warning': !valueModel.age_start}"
                    label="Мин."
                  />
                </div>
                <div class="xl:col-span-6 col-span-12 mx-4">
                  <app-input
                    v-model.number="valueModel.age_end"
                    class="input-bordered w-full"
                    mask="##"
                    :class="{'input-success': valueModel.age_end, 'input-warning': !valueModel.age_end}"
                    label="Макс."
                  />
                </div>
              </div>
            </div>

            <div class="xl:col-span-6 col-span-12 border border-zinc-700 m-2 p-2">
              <div class="grid grid-cols-12">
                <div class="col-span-12 text-center border-b border-zinc-600">
                  <span class="p-0 m-0">Процентная ставка</span>
                </div>
                <div class="xl:col-span-2 col-span-12 mx-4">
                  <app-input
                    v-model.number="valueModel.percent_min"
                    class="input-bordered w-full"
                    mask="###"
                    :class="{'input-success': valueModel.percent_min, 'input-warning': !valueModel.percent_min}"
                    label="Мин"
                  />
                </div>
                <div class="xl:col-span-4 col-span-12 mx-4">
                  <app-select
                    class="w-full"
                    :select-class="{'select-success': valueModel.type_percent_min, 'select-error': valueModel.percent_min && !valueModel.type_percent_min}"
                    label="Тип(мин.)"
                    v-model="valueModel.type_percent_min"
                    :disabled="valueModel.percent_min === null"
                    :options="listTypePeriod"
                    :is-load="isLoadTypePeriod"
                    :select-value="valueModel.type_percent_min"
                  />
                </div>
                <div class="xl:col-span-2 col-span-12 mx-4">
                  <app-input
                    v-model.number="valueModel.percent_max"
                    class="input-bordered w-full"
                    mask="###"
                    :class="{'input-success': valueModel.percent_max, 'input-warning': !valueModel.percent_max}"
                    label="Макс"
                  />
                </div>
                <div class="xl:col-span-4 col-span-12 mx-4">
                  <app-select
                    class="w-full"
                    :select-class="{'select-success': valueModel.type_percent_max, 'select-error': valueModel.percent_max && !valueModel.type_percent_max}"
                    label="Тип(макс.)"
                    :disabled="valueModel.percent_max === null"
                    v-model="valueModel.type_percent_max"
                    :options="listTypePeriod"
                    :is-load="isLoadTypePeriod"
                    :select-value="valueModel.type_percent_max"
                  />
                </div>
              </div>
            </div>
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
import appControlButton from '~/pages/sub/control_edit.vue' // подключение саб формы с кнопка ми управления
import mixinFunction from '~/mixins/globalMixins'
import multiselect from 'vue-multiselect' // компонент для мультивыбора из списка
export default {
  mixins: [mixinFunction],
  components: {
    'app-control-buttons': appControlButton,
    'app-multiselect': multiselect,
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
        type_period_min: null, // тип минимального периода
        period_max: null, // максимальный период
        type_period_max: null, // тип максимального периода
        review_time: null, // время рассмотрения
        type_review_time: null, // тип времени рассмотрения заявки
        age_start: null, // начальный возраст
        age_end: null, // возврат максимальный
        percent_min: null, // минимальная процентная ставка
        type_percent_min: null, // тип минимальной процентной ставки
        percent_max: null, // максимальная процентная ставка
        type_percent_max: null, // тип максимальной процентной ставки
        profit: null, // профит
        link_categories: [], // список категорий оффера
        link_method_get_money: null, // список способов получения денег
      }, // данные страницы
      title: 'Офферы',
      methodGetMoney: null, // способы получения денег
      disabledSave: true, // доступность кнопки "Сохранить"
      disabledCancel: true, // доступность кнопки "Отменить"
      listCategories: [], // Список категорий
      isLoadCategory: false, // статус загрузки категорий
      listCPA: [], // список партнерских программ
      isLoadCPA: false, // статус загрузки партнерских программ
      selectValueCPA: null, // выбрать элемент списка партнерских программ
      listTypePeriod: [], // список типов периодов
      isLoadTypePeriod: false, // статус загрузки типов периодов
      listMethodGetMoney: [], // список способов получения денег
      isLoadListMethodGetMoney: false, // статус загрузки списка способа получения денег
      listStatus: [
        { value: false, name: 'Выключен' },
        { value: true, name: 'Включен' },
      ], // список статусов
      selectedItem: null, // выделенный элемент в списке
      selectedStatus: null, // переменная для установки статуса в поле выбора
    }
  },

  async mounted() {
    const { getCategories, getCPA, getTypePeriod, getMethodGetMoney, getList } = this
    this.selectedStatus = false
    await getTypePeriod()
    await getCategories()
    await getCPA()
    await getMethodGetMoney()
    await getList()
    this.methodGetMoney = null // способы получения денег
  },

  methods: {
    /*
    * Сохранение данных
    * @function onSave
    */
    async onSave(){
      const { $showConfirm, cloneObject, capitalize, selectItem, processResponse } = this
      const optionsConfirm = {
        message: 'Сохранить изменения?',
      }
      const confirm = await $showConfirm(optionsConfirm) // открытие окна подтверждение
      if (confirm) {
        const index = this.list.findIndex(el => el.id == this.valueModel.id) // получение идентификатора выделенного элемента
        const body = cloneObject(this.valueModel)
        body.name = capitalize(body.name)
        body.description = capitalize(body.description)
        body.short_description = capitalize(body.short_description)
        const paramsQuery = { method: 'POST', body } // параметры запроса
        const response = await useFetch('/api/offers/edit', paramsQuery) // получение данных списка
        if (processResponse(response)) {
          this.list[index] = cloneObject(this.valueModel) // Изменение объекта выделенного элемента в списка
          selectItem(index)
        }
      }
    },

    /*
     * Указание категорий
     * @function onSetCategory
     */
    async onSetCategory() {
      const { $showMultiSelect, listCategories, valueModel, $showToast } = this
      const body = await $showMultiSelect({
        title: 'Выбор категорий',
        list: listCategories,
        selected: valueModel.link_categories,
      })
      if (body){
        const toast = {
          title: 'Категории успешно выбраны',
          class: 'alert-success',
        }
        this.valueModel.link_categories = body // установка свойства списка категорий офферов
        $showToast(toast) // отображение уведомления
      }
    },

    /*
    * Указание способов получения денег
    * @function onSetMethodGetMoney
    */
    async onSetMethodGetMoney(){
      const { $showMultiSelect, listMethodGetMoney, valueModel, $showToast } = this
      const body = await $showMultiSelect({
        title: 'Выбор способов получения денег',
        list: listMethodGetMoney,
        selected: valueModel.link_method_get_money,
      })
      if (body){
        const toast = {
          title: 'Способы получения денег успешно выбраны',
          class: 'alert-success',
        }
        this.valueModel.link_method_get_money = body
        $showToast(toast) // отображение уведомления
      }
    },

    /*
     * Получение списка категорий
     * @function getCategories
     */
    async getCategories() {
      const { processingListResponse } = this
      const { pending, data: list, error } = await useFetch('/api/categories/all') // получение данных списка
      if (processingListResponse(error)) {
        this.listCategories = list // установка списка
        this.isLoadCategory = !!pending
      }
    },
    /*
     * Получение списка партнерских программ
     * @function getCPA
     */
    async getCPA() {
      const { processingListResponse } = this
      const { pending, data: list, error } = await useFetch('/api/cpa/all') // получение данных списка
      if (processingListResponse(error)) {
        this.listCPA = list // установка списка
        this.isLoadCPA = !!pending
      }
    },

    /*
     * Получение списка партнерских программ
     * @function getMethodGetMoney
     */
    async getMethodGetMoney() {
      const { processingListResponse } = this
      const { pending, data: list, error } = await useFetch('/api/method-get-money/all') // получение данных списка
      if (processingListResponse(error)) {
        this.listMethodGetMoney = list // установка списка
        this.isLoadListMethodGetMoney = !!pending
      }
    },

    /*
     * Получение типов периодов
     * @function getTypePeriod
     */
    async getTypePeriod() {
      const { processingListResponse } = this
      const { pending, data: list, error } = await useFetch('/api/types-period/all') // получение данных списка
      if (processingListResponse(error)) {
        this.listTypePeriod = list // установка списка
        this.isLoadTypePeriod = !!pending
      }
    },

    /*
     * Создание новой категории
     * @function newCategory
     */
    async onNewCategory() {
      const { $showModal, list, capitalize, selectItem, processResponse } = this
      const body = await $showModal('modal_name', { modalTitle: 'Создание новой категории' })
      if (body) {
        body.name = capitalize(body.name)
        const paramsQuery = { method: 'POST', body } // параметры запроса
        const response = await useFetch('/api/categories/add', paramsQuery) // получение данных списка
        if (processResponse(response)) {
          this.list.push(response.data.value.data)
          const index = list.findIndex(el => el.id === response.data.value.data.id)
          selectItem(index) // выбор элемента списка
        }
      }
    },

    /*
     * Создание новой партнерской программы
     * @function onNewCPA
     */
    async onNewCPA() {
      const { $showModal, list, capitalize, selectItem, processResponse } = this
      const body = await $showModal('modal_name', { modalTitle: 'Создание новой партнерской программы' })
      if (body) {
        body.name = capitalize(body.name)
        const paramsQuery = { method: 'POST', body } // параметры запроса
        const response = await useFetch('/api/cpa/add', paramsQuery) // получение данных списка
        if (processResponse(response)) {
          this.list.push(response.data.value.data)
          const index = list.findIndex(el => el.id === response.data.value.data.id)
          selectItem(index) // выбор элемента списка
        }
      }
    },

    /*
     * Получение списка офферов
     * @function getList
     */
    async getList() {
      const { processingListResponse } = this
      const { pending, data: list, error } = await useFetch('/api/offers/all') // получение данных списка
      if (processingListResponse(error)) {
        this.list = list // установка списка
        this.isLoadList = !!pending // установка статуса загрузки
      }
    },

    /*
     * Создание нового оффера
     * @function onNew
     */
    async onNew() {
      const { $showModal, list, capitalize, selectItem, processResponse } = this
      const body = await $showModal('modal_name', { modalTitle: 'Создание нового оффера' })
      if (body) {
        body.name = capitalize(body.name)
        const paramsQuery = { method: 'POST', body } // параметры запроса
        const response = await useFetch('/api/offers/add', paramsQuery) // получение данных списка
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
        const response = await useFetch('/api/offers/del', paramsQuery) // получение данных списка
        if (processResponse(response)) {
          list.splice(index, 1) // удаление элемента из списка
          if (list.length) selectItem()
          else this.valueModel.name = null
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

    /*
     * Валидация формы
     * @function validateForm
     * @param {Object} data - Данные формы
     */
    validateForm(data) {
      const valid = {
        name: false, // валидация поля наименования
        cpa: false,
        description: false, // валидация полного описания
        shortDescription: false, // валидация короткого описания
        freePeriod: false, // валидация беспроцентного периода
        periodMin: false, // валидация минимального срока
        periodMax: false, // валидация максимального периода
        reviewTime: false, // валидация времени рассмотрения
        percentMin: false, // валидация минимальной процентной ставки
        percentMax: false, // валидация максимальной процентной ставки
        cpa: false, // партнерская программа
      }
      valid.name = data.name && data.name.length && data.name.length > 3 ? true : false // валидация поля "Наименование"
      valid.description = data.description && data.description.length ? true : false // Валидация поля "Полное описание"
      valid.shortDescription = data.short_description && data.short_description.length ? true : false // Валидация поля "Короткое описание"
      valid.cpa = data.id_cpa !== null ? true : false // Валидация поля "Партнерская программа"

      /* Валидация "Беспроцентный период" */
      if (data.free_period === null) valid.freePeriod = true
      else if (data.free_period && data.type_free_period !== null) valid.freePeriod = true
      else valid.freePeriod = false

      /* Валидация "Минимальный период" */
      if (data.period_min === null) valid.periodMin = true
      else if (data.period_min && data.type_period_min !== null) valid.periodMin = true
      else valid.periodMin = false

      /* Валидация "Максимальный период" */
      if (data.period_max === null) valid.periodMax = true
      else if (data.period_max && data.type_period_min !== null) valid.periodMax = true
      else valid.periodMax = false

      /* Валидация "Время рассмотрения" */
      if (data.review_time === null) valid.reviewTime = true
      else if (data.review_time && data.type_review_time !== null) valid.reviewTime = true
      else valid.reviewTime = false

      /* Валидация "Минимальная процентная ставка" */
      if (data.percent_min === null) valid.percentMin = true
      else if (data.percent_min && data.type_percent_min !== null) valid.percentMin = true
      else valid.percentMin = false

      /* Валидация "Максимальная процентная ставка" */
      if (data.percent_max === null) valid.percentMax = true
      else if (data.percent_max && data.type_percent_max !== null) valid.percentMax = true
      else valid.percentMax = false

      const required = valid.name && valid.cpa && valid.description && valid.shortDescription // валидация обязательных полей

      /* Проверка ввода поля "Наименование" */
      if (data && data.name) this.valueModel.name = data.name.replace(/\s\s+/g, ' ') // удаление двойных пробелов из поля "Наименование"

      if (data && data.short_description)
        this.valueModel.short_description = data.short_description.replace(/\s\s+/g, ' ') // удаление двойных пробелов из поля "Короткое описание"

      if (data && data.description) this.valueModel.description = data.description.replace(/\s\s+/g, ' ') // удаление двойных пробелов из поля "Полное описание"

      if (!required) return true
      else
        return required &&
          valid.freePeriod &&
          valid.periodMin &&
          valid.periodMax &&
          valid.reviewTime &&
          valid.percentMin &&
          valid.percentMax
          ? false
          : true
    },
  },

  watch: {
    /*
     * Отслеживание выбора оффера в списке
     */
    selectedItem: {
      handler(newValue) {
        const { cloneObject } = this
        this.valueModel = cloneObject(newValue) // клонирование выбранного объекта
      },
      deep: true,
    },
    /*
     * Наблюдение за статусом загрузкой списка
     * @function isLoadList
     */
    isLoadList() {
      const { selectItem } = this
      selectItem()
    },
    /*
     * Отслеживание изменений данных формы
     */
    valueModel: {
      handler(newValue) {
        const { validateForm, withObject, selectedItem } = this
        this.disabledSave = validateForm(newValue) || withObject(newValue, selectedItem)// установка активности кнопки "Сохранить"
        this.disabledCancel = withObject(newValue, selectedItem)
      },
      deep: true,
    },
    methodGetMoney: {
      handler(newVal) {
        console.log('🚀 -> handler -> newVal:', newVal)
      },
      deep: true,
    },
  },
}
</script>