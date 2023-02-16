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
import mixinFunction from '~/mixins/globalMixins'
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

  mixins: [mixinFunction],

  emits: ['update:modelValue', 'invalid'],

  watch: {
    modelValue: {
      handler(newValue) {
        const { $emit, isNumber } = this
        $emit('update:modelValue', newValue) // отправка события обновления данных
        this.validName =
          newValue &&
          (!newValue.name ||
            newValue.name === '' ||
            newValue.name.length < 3 ||
            !newValue.name.length ||
            isNumber(newValue.name))
            ? 'error'
            : 'success' // подсветка поля если количество символов менее 3х и введенное значение не число
        $emit('invalid', this.validName === 'success' ? false : true)
      },
      deep: true,
    },
  },

  mounted() {
    const { $emit, validName } = this
    $emit('invalid', validName === 'error')
  },

  data() {
    return {
      validName: 'error',
    }
  },
}
</script>