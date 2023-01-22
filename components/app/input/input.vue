<template>
  <input
    :value="modelValue"
    :class="classes"
    type="text"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    /* Установка класса form-control */
    formControl: {
      type: [String, Boolean],
      default: true,
      validator(value) {
        return value === 'false' || value === 'true' || value === true
      },
    },
    /* Значение поля */
    modelValue: {
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
  emits: ['update:modelValue'],
  computed: {
    classes() {
      const { formControl } = this
      return {
        'form-control': !!formControl,
      }
    },
  },
  mounted() {
    const { $listen } = useNuxtApp() // свойство для прослушивания события шины данных
    /* Прослушивание события об ошибке валидации */
    $listen('is-invalid', value => {
      const el = this.$el // элемент
      value ? el.classList.add('is-invalid') : el.classList.remove('is-invalid') // добавление / удаление класса невалидного элемента
    })
  },
}
</script>

<style>
  @import '~/assets/css/valid.css';
  @import '~/assets/css/form-control.css';
  input {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
</style>
