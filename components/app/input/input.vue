<!-- eslint-disable vue/no-mutating-props -->
<template>
  <input :value="value" :class="classes" type="text" @input="$emit('input', $event.target.value)" />
</template>

<script>
export default {
  props: {
    /* Установка класса form-control */
    formControl: {
      type: String,
      default: 'true',
      validator(value) {
        return value === 'false' || value === null || value === 'true'
      },
    },
    /* Значение поля */
    value: {
      type: [String, Number],
      default: '',
    },
    /* Ошибка валидации */
    /* isInvalid: {
      type: [String, Boolean],
      default: false,
      validator(value){
        return value === 'true' || value === 'false' || value === true || value === false
      }
    } */
  },
  computed: {
    classes() {
      const { formControl } = this
      return {
        'form-control': !!formControl,
      }
    },
  },
  mounted() {
    /* Прослушивание события об ошибке валидации */
    this.$on('is-invalid', value => {
      const el = this.$el // элемент
      value ? el.classList.add('is-invalid') : el.classList.remove('is-invalid') // добавление / удаление класса невалидного элемента
    })
  },
}
</script>

<style>
  @import './../../../assets/css/valid.css';
  input {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
</style>
