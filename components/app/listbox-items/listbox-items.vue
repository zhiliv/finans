<template>
  <div class="h-full relative w-full shadow-2xl shadow-zinc-300/30" :class="$attrs.class">
    <ul ref="list" class="list-group h-full absolute w-full overflow-y-scroll overflow-x-hidden">
      <li
        v-for="item in listItems"
        class="min-h-[35px] border-b border-zinc-300/10 hover:bg-amber-700"
        :class="{'active': item.isActive}"
        :key="item[value]"
        @click="onSelect(item)"
      >
        {{item[text]}}
        <button
          v-if="onDelete"
          class="btn-xs btn-square btn-outline absolute right-0 mr-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            @click="onDelete(item)"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </li>
    </ul>
    <app-spinner v-if="isLoad === false || isLoad === 'false'" />
  </div>
</template>

<script>
import mixinFunction from '~/mixins/globalMixins'

export default {
  /* Установка миксинов */
  mixins: [mixinFunction],
  /* Установка события */
  // emits: [['update:modelValue']],
  emits: ['update:modelValue'],

  computed: {
    /* Вычисление списка для отображения */
    listItems() {
      const { list } = this
      return list
    },
  },

  props: {
    /* Список */
    list: {
      type: Array,
      default: () => [],
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
    /* Статус загрузки */
    isLoad: {
      type: [String, Boolean],
      default: false,
      validator(value) {
        return value === true || value === false || value === 'true' || value === 'false'
      },
    },
    /* Удаление элемента */
    onDelete: {
      type: Function,
      default: () => ({}),
    },
  },

  methods: {
    /*
     * При выборе элемента
     * @function onSelect
     * @param {Object} event - Объект события
     */
    onSelect(item) {
      const { listItems, cloneObject, $emit } = this
      listItems.forEach(el => (el.isActive = false)) // удаление класса активности со всех элементов
      item.isActive = true // установка активности для выделенного пункта
      const obj = cloneObject(item) // клонирование выделенного объекта
      delete obj.isActive // удаление свойства
      $emit('update:modelValue', obj) // отправка события для обновления модели данных
    },
  },

  watch: {
    isLoad(newVal) {
      const { listItems, $nextTick } = this
      if (!newVal && listItems.length) {
        // проверка что список загружен и список имеет элементы
        $nextTick(() => {
          // ожидаем рендеринга страницы
          this.$refs.list.querySelector('li').click() // эмуляция нажатия на первый элемент
        })
      }
    },
  },
}
</script>

<style>
  .list-group li {
    padding-left: 0.5em;
    padding-top: 0.25em;
    font-size: 18px;
  }

  .list-group li:hover {
    background: var(--primary);
    color: var(--light);
  }

  .list-group li.active {
    background: #b45309;
  }

  .list-group li.active:hover {
    background: #d97706;
  }
</style>
