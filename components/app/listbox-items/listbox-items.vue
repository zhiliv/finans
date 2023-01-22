<template>
  <div class="position-relative">
    <ul class="list-group m-0 h-100">
      <li
        class="border-bottom border-1px border-grey-lighten-2 no-select short-text"
        v-for="item in list"
        :key="item[value]"
        @click="onSelect($event, item)"
      >{{item[text]}}</li>
    </ul>
    <app-spinner class="position-absolute top-50 start-50" v-if="showSpinner && !isLoad" />
  </div>
</template>

<script>
import mixinFunction from '~/mixins/globalMixins'

export default {
  /* Установка миксинов */
  mixins: [mixinFunction],
  /* Установка события */
  // emits: [['update:modelValue']],
  emits: ['update:modelValue', 'update:index'],

  props: {
    /* Список */
    list: {
      type: Array,
      default: () => [],
    },
    /* Признак заполнения списка */
    isLoad: {
      type: [String, Boolean],
      default: false,
    },
    /* Отображать ли спиннер при отображении компонента */
    showSpinner: {
      type: [String, Boolean],
      default: false,
      validator(value) {
        return String(value) === 'true' || String(value) === 'false' || value === true || value === false
      },
    },
    /* Значение строки */
    value: {
      type: String,
      default: 'id',
    },
    /* Текстовое значение */
    text: {
      type: String,
      default: 'name',
    },
    /* Значение поля */
    modelValue: {
      type: Object,
      default: {},
    },
    index: {
      type: Number,
      default: -1,
    },
  },

  methods: {
    /*
     * При выборе элемента
     * @function onSelect
     * @param {Object} event - Объект события
     */
    onSelect(event, item) {
      const { list } = this
      const listEl = this.$el.querySelectorAll('li') // получение списка элементов списка
      listEl.forEach(el => el.classList.remove('active')) // удаление у всех элементов списка класса "active"
      event.target.classList.add('active') // добавление класса выделенному элемента
      this.$emit('update:modelValue', this.cloneObject(item)) // отправка события для обновления модели данных
      if (list.length) this.getIndex(item) // получение индекса
    },
    /*
     * Получение индекса выделенного элемента
     * @function getIndex
     * @param {Object} item - Объект выделенной строки
     */
    getIndex(item) {
      const { list } = this // получение переменной со списком
      const index = list.findIndex(el => JSON.stringify(el) == JSON.stringify(item)) // поиск индекса элемента
      this.$emit('update:index', index) // отправка данных индекса выделенного элемента
    },
  },

  watch: {
    /*
     * Отслеживание изменения списка
     * @function list
     * @param {Object} newValue - Новое значение
     * @param {Object} oldValue - Старое значение
     */
    list(newValue, oldValue) {
      if (!oldValue.length && newValue.length) {
        this.$nextTick(() => {
          // ожидание заполнения DOM
          this.$el.querySelector('li').click() // эмуляция нажатия списка жары
        })
      }
    },
  },
}
</script>

<style>
  @import '~/assets/css/position.css';
  @import '~/assets/css/border.css';
  @import '~/assets/css/margin.css';
  @import '~/assets/css/position.css';
  .list-group {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    border-radius: var(--bs-list-group-border-radius);
    overflow-y: scroll
  }

  .list-group li {
    min-height: 35px;
    list-style-type: none;
    padding-left: 0.5em;
    padding-top: 0.25em;
    font-size: 18px;
  }

  .list-group li:hover {
    background: var(--primary);
    color: var(--light);
  }

  .list-group li.active {
    background: var(--active);
  }
</style>
