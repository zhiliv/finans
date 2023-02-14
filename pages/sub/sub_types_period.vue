<template>
  <div class="col-span-12 lg:col-span-6 mx-4">
    <app-input
      v-model.trim="modelValue.name"
      class="input-bordered w-full"
      :valid="validName"
      label="Наименование"
    />
    <app-input
      v-model.trim="modelValue.mnosh"
      class="input-bordered w-full"
      :valid="validMnosh"
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
        mnosh: null, // Множественное число
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
          (newValue && (!newValue.name || !newValue.name.length || newValue.name.length < 3)) || isNumber(newValue.name)
            ? 'error'
            : 'success' // подсветка поля если количество символов менее 3х и введенное значение не число
        this.validMnosh =
          newValue &&
          (newValue.mnosh === '' ||
            !newValue.mnosh ||
            !newValue.mnosh.length ||
            newValue.mnosh.length < 3 ||
            isNumber(newValue.mnosh))
            ? 'error'
            : 'success' // подсветка поля если количество символов менее 3х и введенное значение не число\
        $emit('invalid', this.validName === 'success' && this.validMnosh === 'success' ? false : true)
      },
      deep: true,
    },
  },

  mounted() {
    const { $emit, validName, validMnosh } = this
    $emit('invalid', validName === 'error' || validMnosh === 'error' ? true : false)
  },

  data() {
    return {
      validName: 'error',
      validMnosh: 'error',
    }
  },
}
</script>