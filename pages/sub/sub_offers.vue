<template>
  <div class="xl:col-span-4 col-span-12 mx-4">
    <app-input
      v-model.trim="modelValue.name"
      class="input-bordered w-full"
      :class="{'input-success': modelValue.name && modelValue.name.length > 2, 'input-error': !modelValue.name || modelValue.name.length < 3,}"
      label="Наименование"
    />
  </div>
  <div class="xl:col-span-2 col-span-12 mx-4">
    <app-select
      label="Статус"
      :select-class="{'select-success': modelValue.status, 'select-error': modelValue.status === null, 'select-warning': modelValue.status === false}"
      v-model.trim="modelValue.status"
      :options="listStatus"
      required="true"
      value="value"
      is-load="true"
    />
  </div>
  <div class="xl:col-span-3 col-span-12 mx-4">
    <div class="w-full flex relative">
      <app-select
        class="w-[calc(100%-44px)]"
        :select-class="{'select-success': modelValue.id_category, 'select-error': !modelValue.id_category}"
        label="Категория"
        v-model.trim="modelValue.id_category"
        :options="listCategories"
        :is-load="isLoadCategory"
        :select-value="selectValueCategory"
      />
      <app-button
        @click="newCategory"
        class="btn-sm btn-warning absolute top-[1.5em] right-0 font-bold hover:bg-amber-700 text-xl h-1/2"
      >+</app-button>
    </div>
  </div>
  <div class="xl:col-span-3 col-span-12 mx-4">
    <div class="w-full flex relative">
      <app-select
        class="w-[calc(100%-44px)]"
        :select-class="{'select-success': modelValue.id_cpa, 'select-error': !modelValue.id_cpa}"
        label="Партнерская программа"
        v-model.trim="modelValue.id_cpa"
        :options="listCPA"
        :is-load="isLoadCPA"
        :select-value="selectValueCPA"
      />
      <app-button
        @click="newCPA"
        class="btn-sm btn-warning absolute top-[1.5em] right-0 font-bold hover:bg-amber-700 text-xl h-1/2"
      >+</app-button>
    </div>
  </div>
  <div class="col-span-12 mx-4">
    <label class="label py-0 px-2" v-if="modelValue.short_description">Короткое описание</label>
    <textarea
      v-model="modelValue.short_description"
      class="textarea textarea-bordered h-20 w-full my-2"
      :class="{'textarea-success': modelValue.short_description, 'textarea-error': !modelValue.short_description}"
      placeholder="Короткое описание"
    />
  </div>
  <div class="col-span-12 mx-4">
    <label class="label py-0 px-2" v-if="modelValue.description">Описание</label>
    <textarea
      v-model="modelValue.description"
      class="textarea textarea-bordered h-60 w-full my-2"
      :class="{'textarea-success': modelValue.description, 'textarea-error': !modelValue.description}"
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
          v-model.trim="modelValue.sum_start"
          class="input-bordered w-full"
          :class="{'input-success': modelValue.sum_start, 'input-warning': !modelValue.sum_start}"
          label="Мин."
        />
      </div>
      <div class="xl:col-span-6 col-span-12 mx-4">
        <app-input
          v-model.trim="modelValue.sum_end"
          class="input-bordered w-full"
          :class="{'input-success': modelValue.sum_end, 'input-warning': !modelValue.sum_end}"
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
          v-model.trim="modelValue.free_period"
          class="input-bordered w-full"
          :class="{'input-success': modelValue.free_period, 'input-warning': !modelValue.free_period}"
          label="Период"
        />
      </div>
      <div class="xl:col-span-8 col-span-12 mx-4">
        <app-select
          class="w-full"
          :select-class="{'select-success': modelValue.type_free_period, 'select-error': modelValue.free_period && !modelValue.type_free_period}"
          label="Тип"
          v-model.trim="modelValue.type_free_period"
          :options="listTypePeriod"
          :is-load="isLoadTypePeriod"
          :select-value="selectValueFreeTypePeriod"
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
          v-model.trim="modelValue.period_min"
          class="input-bordered w-full"
          :class="{'input-success': modelValue.period_min, 'input-warning': !modelValue.period_min}"
          label="Мин"
        />
      </div>
      <div class="xl:col-span-4 col-span-12 mx-4">
        <app-select
          class="w-full"
          :select-class="{'select-success': modelValue.type_period_min, 'select-error': modelValue.period_min && !modelValue.type_period_min}"
          label="Тип(мин.)"
          v-model.trim="modelValue.type_period_min"
          :options="listTypePeriod"
          :is-load="isLoadTypePeriod"
          :select-value="selectValueTypePeriodMin"
        />
      </div>
      <div class="xl:col-span-2 col-span-12 mx-4">
        <app-input
          v-model.trim="modelValue.period_max"
          class="input-bordered w-full"
          :class="{'input-success': modelValue.period_max, 'input-warning': !modelValue.period_max}"
          label="Макс"
        />
      </div>
      <div class="xl:col-span-4 col-span-12 mx-4">
        <app-select
          class="w-full"
          :select-class="{'select-success': modelValue.type_period_max, 'select-error': modelValue.period_max && !modelValue.type_period_max}"
          label="Тип(макс.)"
          v-model.trim="modelValue.type_period_max"
          :options="listTypePeriod"
          :is-load="isLoadTypePeriod"
          :select-value="selectValueTypePeriodMax"
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
          v-model.trim="modelValue.review_time"
          class="input-bordered w-full"
          :class="{'input-success': modelValue.review_time, 'input-warning': !modelValue.review_time}"
          label="Значение"
        />
      </div>
      <div class="xl:col-span-8 col-span-12 mx-4">
        <app-select
          class="w-full"
          :select-class="{'select-success': modelValue.type_review_time, 'select-error': modelValue.review_time && !modelValue.type_review_time}"
          label="Тип(макс.)"
          v-model.trim="modelValue.type_review_time"
          :options="listTypePeriod"
          :is-load="isLoadTypePeriod"
          :select-value="selectValueTypeReviewTime"
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
          v-model.trim="modelValue.age_start"
          class="input-bordered w-full"
          :class="{'input-success': modelValue.age_start, 'input-error': !modelValue.age_start}"
          label="Мин."
        />
      </div>
      <div class="xl:col-span-6 col-span-12 mx-4">
        <app-input
          v-model.trim="modelValue.age_end"
          class="input-bordered w-full"
          :class="{'input-success': modelValue.age_end, 'input-warning': !modelValue.age_end}"
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
          v-model.trim="modelValue.percent_min"
          class="input-bordered w-full"
          :class="{'input-success': modelValue.percent_min, 'input-warning': !modelValue.percent_min}"
          label="Мин"
        />
      </div>
      <div class="xl:col-span-4 col-span-12 mx-4">
        <app-select
          class="w-full"
          :select-class="{'select-success': modelValue.type_percent_min, 'select-error': modelValue.percent_min && !modelValue.type_percent_min}"
          label="Тип(мин.)"
          v-model.trim="modelValue.type_percent_min"
          :options="listTypePeriod"
          :is-load="isLoadTypePeriod"
          :select-value="selectValueTypePercentMin"
        />
      </div>
      <div class="xl:col-span-2 col-span-12 mx-4">
        <app-input
          v-model.trim="modelValue.percent_max"
          class="input-bordered w-full"
          :class="{'input-success': modelValue.percent_max, 'input-warning': !modelValue.percent_max}"
          label="Макс"
        />
      </div>
      <div class="xl:col-span-4 col-span-12 mx-4">
        <app-select
          class="w-full"
          :select-class="{'select-success': modelValue.type_percent_max, 'select-error': modelValue.percent_max && !modelValue.type_percent_max}"
          label="Тип(макс.)"
          v-model.trim="modelValue.type_percent_max"
          :options="listTypePeriod"
          :is-load="isLoadTypePeriod"
          :select-value="selectValueTypePercentMax"
        />
      </div>
    </div>
  </div>
</template>

<script>
import mixinFunction from '~/mixins/globalMixins'
export default {
  props: {
    /* Данные формы */
    modelValue: {
      type: Object,
      default: {
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
        age_start: null, // начальный возраст
        age_end: null, // возврат максимальный
        percent_min: null, // минимальная процентная ставка
        type_percent_min: null, // тип минимальной процентной ставки
        percent_max: null, // максимальная процентная ставка
        type_percent_max: null, // тип максимальной процентной ставки
        profit: null, // профит
      },
    },
  },

  mixins: [mixinFunction],

  emits: ['update:modelValue', 'invalid'],

  watch: {
    modelValue: {
      handler(newValue) {
        const { $emit } = this
        $emit('update:modelValue', newValue) // отправка события обновления данных
      },
      deep: true,
    },
  },

  async mounted() {
    const { $emit, validName, getCategories, getCPA, getTypePeriod } = this
    await Promise.all([getTypePeriod(), getCategories(), getCPA()])

    $emit('invalid', validName === 'error')
  },

  data() {
    return {
      validName: 'error',
      listCategories: [], // Список категорий
      isLoadCategory: false, // статус загрузки категорий
      selectValueCategory: null,
      listCPA: [], // список партнерских программ
      isLoadCPA: false, // статус загрузки партнерских программ
      selectValueCPA: null, // выбрать элемент списка партнерских программ
      listTypePeriod: [], // список типов периодов
      isLoadTypePeriod: false, // статус загрузки типов периодов
      selectValueFreeTypePeriod: null, // выбрать элемент тип периода беспроцентного периода
      selectValueTypePeriodMin: null, // выбрать элемент тип периода минимального периода
      selectValueTypePeriodMax: null, // выбрать элемент тип периода максимального периода
      selectValueTypeReviewTime: null, // выбрать элемент тип периода времени рассмотрения
      selectValueTypePercentMin: null, // выбрать элемент тип периода минимальная процентная ставка
      selectValueTypePercentMax: null, // выбрать элемент тип периода максимальная процентная ставка
      listStatus: [
        { value: false, name: 'Выключен' },
        { value: true, name: 'Включен' },
      ], // список статусов
    }
  },

  methods: {
    /*
     * Получение списка категорий
     * @function getCategories
     */
    async getCategories() {
      const { pending, data: listCategories } = await useFetch('/api/categories/all') // получение данных списка
      this.listCategories = listCategories // установка списка
      this.isLoadCategory = !!pending
    },
    /*
     * Получение списка партнерских программ
     * @function getCPA
     */
    async getCPA() {
      const { pending, data: listCPA } = await useFetch('/api/cpa/all') // получение данных списка
      this.listCPA = listCPA // установка списка
      this.isLoadCPA = !!pending
    },

    /*
     * Получение типов периодов
     * @function getTypePerdios
     */
    async getTypePeriod() {
      const { pending, data: listTypePeriod } = await useFetch('/api/types-period/all') // получение данных списка
      this.listTypePeriod = listTypePeriod // установка списка
      this.isLoadTypePeriod = !!pending
    },

    /*
     * Создание новой категории
     * @function newCategory
     */
    async newCategory() {
      const { $showModal, capitalize, $showToast } = this
      const body = await $showModal('modal_name', { modalTitle: 'Создание новой категории' })
      if (body) {
        body.name = capitalize(body.name)
        const paramsQuery = { method: 'POST', body } // параметры запроса
        const response = await useFetch('/api/categories/add', paramsQuery) // получение данных списка
        if (response) {
          this.listCategories.push(response.data.value)
          this.selectValueCategory = response.data.value.id
          const toastParams = {
            title: '',
            message: 'Запись успешно создана',
            timer: 5000,
            class: 'alert-success',
          } // параметры уведомления
          $showToast(toastParams) // отображение уведомления
        }
      }
    },

    /*
     * Создание новой партнерской программы
     * @function newCPA
     */
    async newCPA() {
      const { $showModal, capitalize, $showToast } = this
      const body = await $showModal('modal_name', { modalTitle: 'Создание новой партнерской программы' })
      if (body) {
        body.name = capitalize(body.name)
        const paramsQuery = { method: 'POST', body } // параметры запроса
        const response = await useFetch('/api/cpa/add', paramsQuery) // получение данных списка
        if (response) {
          this.listCPA.push(response.data.value)
          this.selectValueCPA = response.data.value.id
          const toastParams = {
            title: '',
            message: 'Запись успешно создана',
            timer: 5000,
            class: 'alert-success',
          } // параметры уведомления
          $showToast(toastParams) // отображение уведомления
        }
      }
    },
  },

  watch: {
    modelValue: {
      handler(mewValue) {
        console.log('🚀 -> handler -> mewValue', mewValue)
      },
      deep: true,
    },
  },
}
</script>