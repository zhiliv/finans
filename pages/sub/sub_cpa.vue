<template>
  <div class="lg:col-span-4 col-span-12 mx-4">
    <app-input
      v-model.trim="modelValue.name"
      class="input-bordered w-full"
      :valid="validName"
      label="Наименование"
    />
  </div>
  <div class="lg:col-span-4 col-span-12 mx-4">
    <app-input
      v-model.trim="modelValue.site"
      class="input-bordered w-full"
      :valid="validSite"
      label="Сайт"
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
        site: null, // поле "Сайт"
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
        this.validSite =
          (newValue && (!newValue.site || !newValue.site.length || newValue.site.length < 2)) || isNumber(newValue.site)
            ? 'error'
            : 'success' // подсветка поля если количество символов менее 3х и введенное значение не число
        $emit('invalid', this.validName === 'success' && this.validSite === 'success' ? false : true)
      },
      deep: true,
    },
  },

  mounted() {
    const { $emit, validName, validSite } = this
    $emit('invalid', validName === 'error' || validSite === 'error' ? true : false)
  },

  data() {
    return {
      validName: 'error',
      validSite: 'error',
    }
  },
}
</script>

<style>
</style>