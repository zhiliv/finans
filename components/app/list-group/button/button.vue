<template>
  <app-button
    v-bind="$attrs"
    :class="{'no-select': true,'align-items-start': true,'d-flex': true,'my-1': true}"
    :btn-size="size"
    @click="$emit('click', click($event))"
  >
    <slot></slot>
  </app-button>
</template>

<script>
import appButton from './../../button/button.vue'
import { strToArr } from './../../../../scripts/component/func'

export default {
  components: {
    'app-button': appButton,
  },
  props: {
    /* Классы при активности */
    classesActive: {
      type: String,
      default: '',
    },
    /* Размер */
    size: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      isActive: null, // признак активности
    }
  },
  watch: {
    /*
     * Установка активности для элемента
     * @function isActive
     * @param {Boolean}  newVal - Текущее значение
     * @param {Boolean} oldVal - Прошлое значение
     */
    isActive(newVal, oldVal) {
      if (newVal) {
        const list = this.$parent.$parent.$children // получение массива элементов списка
        const arrActiveClass = strToArr(this.classesActive) // получение массива из строки
        if (list && list.length) {
          list.forEach(item => {
            // обход всех элементов списка
            arrActiveClass.forEach(
              activeClass => item.$children[0].$el.classList.remove(activeClass), // удаление класса активности у элементов, у которых есть активность
            )
            item.$children[0].$el.classList.remove('active') // удаление класса активности у элементов
          })
        }
        arrActiveClass.forEach(
          activeClass => this.$el.classList.add(activeClass), // добавление класса выделенному элементу
        )
        this.$el.classList.add('active')
      }
    },
  },
  /*
   * Методы компонента
   */
  methods: {
    /*
     * При клике на пункт списка
     * @function click
     * @props {Object} event - Данные события
     */
    click(event) {
      const list = this.$parent.$parent.$children // получение всех элементов списка
      list.forEach(item => {
        item.$children[0].isActive = false
      }) // установка для всех элементов свойства isActive
      this.isActive = true // установка для текущего элемента
    },
  },
}
</script>

<style>
  @import './../../../../assets/css/margin.css';
  @import './../../../../assets/css/text/text.css';
</style>
