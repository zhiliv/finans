<template>
  <app-row>
    <app-col col-sm="3" col-md="3" :col-lg="size" :col-xl="size" :col-xxl="size">
      <div class="p-2">
        <app-label class="m-0 fw-600 fs-18px">Наименование</app-label>
        <app-input v-model.trim="modelValue.name" :is-invalid="validName"></app-input>
      </div>
    </app-col>
  </app-row>
</template>

<script>
export default {
  props: {
    /* Признак модального окна */
    isModal: {
      type: [Boolean, String],
      default: false,
      validator(value) {
        return value === true || value === 'true' || value === false
      },
    },
    /* Данные формы */
    modelValue: {
      type: Object,
      default: {
        name: null, // значение поля "Наименование"
      },
    },
  },
  emits: ['update:modelValue'],
  computed: {
    /*
     * Вычисление размера поля
     * Если открывается в режиме модального окна, то растягиваем на всю ширину
     * @function size
     */
    size() {
      const { isModal } = this
      return isModal ? 12 : 3
    },
  },
  mounted() {},
  watch: {
    modelValue: {
      handler(newValue) {
        const {$emit} = this
        $emit('update:modelValue', newValue) // отправка события обновления данных
        this.validName = newValue && newValue.name && (newValue.name.length < 3 && newValue.name.length) || Number.isInteger(+newValue.name) ? true : false // подсветка поля если количество символов менее 3х и введенное значение не число
      },
      deep: true,
    },
  },
  data() {
    return {
      validName: true,
    }
  },
}
</script>

<style>
</style>