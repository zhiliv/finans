<template>
  <div class="position-relative">
    <textarea
      v-bind="$attrs"
      :value="value"
      :class="[{'form-control': true, 'h-100': true},  classes]"
      type="text"
      @input="$emit('input', $event.target.value)"
    ></textarea>
    <span
      v-if="isCount === 'true'"
      class="position-absolute bottom-0 right-1-5 grey-lighten-1-text"
    >Количество символов {{value ? value.length : 0}}</span>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    /* значение */
    value: {
      type: String,
      default: '',
    },
    /* Размер */
    textareaSize: {
      type: String,
      default: null,
      validator(value) {
        return value === 'sm' || value === 'lg' || value === null
      },
    },
    /* Подсчет количества символов */
    isCount: {
      type: String,
      default: 'false',
      validator(value) {
        return value === 'true' || value === 'false'
      },
    },
  },
  data() {
    return { count: 0 }
  },
  computed: {
    /* Установка классов */
    classes() {
      const { textareaSize } = this
      return {
        [`textarea-${textareaSize}`]: !!textareaSize,
      }
    },
  },
  watch: {
    /*
     * отслеживание изменений содержимого компонента
     * @function value
     * @props {newValue} - Новое значение
     */
    value(newValue) {
      this.count = this.isCount === 'true' && newValue && newValue.length ? newValue.length : 0
    },
  },
}
</script>

<style>
  @import './../../../assets/css/position.css';
  @import './../../../assets/css/size.css';
  @import './../../../assets/css/text/grey.css';
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    resize: vertical;
  }

  textarea.form-control {
    min-height: calc(1.5em + 0.75rem + 2px);
  }
  textarea.textarea-sm {
    min-height: calc(1.5em + 0.5rem + 2px);
  }
  textarea.textarea-lg {
    min-height: calc(1.5em + 1rem + 2px);
  }

  .right-1-5 {
    right: 1.5em;
  }
</style>
