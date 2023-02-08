<template>
  <div class="col-span-12 lg:col-span-6 mx-4">
    <app-input
      v-model.trim="modelValue.name"
      class="input-bordered w-full"
      :valid="validName"
      label="Наименование"
    />
  </div>
</template>

<script>
export default {
  props: {
    /* Данные формы */
    modelValue: {
      type: Object,
      default: {
        name: null, // значение поля "Наименование"
      },
    },
  },

  emits: ['update:modelValue', 'invalid'],

  watch: {
    modelValue: {
      handler(newValue) {
        const { $emit, validName } = this
        $emit('update:modelValue', newValue) // отправка события обновления данных
        this.validName =
          (newValue && newValue.name && newValue.name.length < 3 && newValue.name.length) ||
          Number.isInteger(+newValue.name)
            ? 'error'
            : 'success' // подсветка поля если количество символов менее 3х и введенное значение не число
        $emit('invalid', validName === 'error')
      },
      deep: true,
    },
  },

  mounted(){
    const {$emit, validName} = this
    $emit('invalid', validName === 'error')
  },

  data() {
    return {
      validName: 'error',
    }
  },
}
</script>