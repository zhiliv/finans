<script>
export default {
  /*
   * Входящие свойства
   * @typedef {Object} props
   * @property {String} classes - Входные классы
   * @property {String} styles - Входные стили
   * @property {String} type - Тип списка
   * Доступные варианты
   *  -pre
   *  -code
   *  -kdb
   *  -samp
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
        return value === 'pre' || value === 'code' || value === 'kbd' || value === 'samp'
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


pre,
code,
kbd,
samp {
  font-family: var(--bs-font-monospace);
  font-size: 1em;
}

pre {
  display: block;
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  font-size: 0.875em;
}
pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal;
}

code {
  font-size: 0.875em;
  color: var(--bs-code-color);
  word-wrap: break-word;
}
a > code {
  color: inherit;
}

kbd {
  padding: 0.1875rem 0.375rem;
  font-size: 0.875em;
  color: var(--bs-body-bg);
  background-color: var(--bs-body-color);
  border-radius: 0.25rem;
}
kbd kbd {
  padding: 0;
  font-size: 1em;
}
</style>
