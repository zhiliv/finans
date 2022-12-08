<script>
export default {
  /*
   * Входящие свойства
   * @typedef {Object} props
   * @property {String} classes - Входные классы
   * @property {String} styles - Входные стили
   * @property {String} type - Тип списка
   * Доступные варианты
   *  -ol
   *  -ul
   *  -dl
   */
  props: {
    classes: {
      type: String,
      default: '',
    },
    styles: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      required: true,
      validator(value) {
        // валидация на ввод значения
        return value === 'ul' || value === 'ol' || value === 'dl'
      },
    },
  },
  /*
   * Рендер компонента
   * @function render
   * @param {Object} createElement Функция создания элемента
   */
  render(createElement) {
    return createElement(
      this.type, // тип списка
      {
        on: {
          click: (event) => this.$emit('click', event),
          dblclick: (event) => this.$emit('dblclick', event),
          change: (event) => this.$emit('change', event),
          keydown: (event) => this.$emit('keydown', event),
          focus: (event) => this.$emit('focus', event),
          keypress: (event) => this.$emit('keypress', event),
          keyup: (event) => this.$emit('keyup', event),
          load: (event) => this.$emit('load', event),
          mousedown: (event) => this.$emit('mousedown', event),
          mousemove: (event) => this.$emit('mousemove', event),
          mouseout: (event) => this.$emit('mouseout', event),
          mouseover: (event) => this.$emit('mouseover', event),
          mouseup: (event) => this.$emit('mouseup', event),
          reset: (event) => this.$emit('reset', event),
          select: (event) => this.$emit('select', event),
          submit: (event) => this.$emit('submit', event),
          unload: (event) => this.$emit('unload', event),
        },
        attrs: {
          class: this.classes,
          style: this.styles,
        },
      },
      this.$slots.default // дочерние элементы
    )
  },
}
</script>

<style>
ol,
ul {
  padding-left: 2rem;
  margin-top: 0;
  margin-bottom: 1rem;
}

ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}
</style>
