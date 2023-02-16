<template>
  <div class="col-span-12 lg:col-span-6 mx-4">
    <app-input
      v-model.trim="modelValue.name"
      class="input-bordered w-full"
      :valid="validName"
      label="Наименование"
    />
    <app-input
      v-model.trim="modelValue.padez"
      class="input-bordered w-full"
      :valid="validPadez"
      label="Родительский падеж"
    />
    <app-input
      v-model.trim="modelValue.mnozh"
      class="input-bordered w-full"
      :valid="validMnozh"
      label="Множественное число"
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
        padez: null, // Родительский падеж
        mnozh: null, // Множественное число
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
          (newValue && (!newValue.name || !newValue.name.length || newValue.name.length < 2)) || isNumber(newValue.name)
            ? 'error'
            : 'success' // подсветка поля если количество символов менее 3х и введенное значение не число
        this.validPadez =
          (newValue && (!newValue.padez || !newValue.padez.length || newValue.padez.length < 2)) ||
          isNumber(newValue.padez)
            ? 'error'
            : 'success' // подсветка поля если количество символов менее 3х и введенное значение не число
        this.validMnozh =
          (newValue && (!newValue.mnozh || !newValue.mnozh.length || newValue.mnozh.length < 2)) ||
          isNumber(newValue.mnozh)
            ? 'error'
            : 'success' // подсветка поля если количество символов менее 3х и введенное значение не число
        $emit(
          'invalid',
          this.validName === 'success' && this.validPadez === 'success' && this.validMnozh === 'success' ? false : true,
        )
      },
      deep: true,
    },
  },

  mounted() {
    const { $emit, validName, validPadez, validMnozh } = this
    $emit('invalid', validName === 'error' || validPadez === 'error' || validMnozh === 'error' ? true : false)
  },

  data() {
    return {
      validName: 'error',
      validPadez: 'error',
      validMnozh: 'error',
    }
  },
}
</script>