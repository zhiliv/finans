<template>
  <label class="label py-0 px-2">{{label}}</label>
  <input
    :value="modelValue"
    type="text"
    class="input"
    :class="[$attrs.class, {'input-success': valid === 'success', 'input-error': valid === 'error'}]"
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
    valid: {
      type: String,
      default: null,
      validator(value) {
        return value === 'error' || 'success'
      },
    },
    /* Подпись поля */
    label: {
      type: String,
      default: null,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    classes() {
      const { invalid } = this
      return {
        'input-error': invalid,
      }
    },
  },
}
</script>
