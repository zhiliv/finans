<!-- Сабформа для создания новго элемента
Содержит кнопки: "Отменить" и Создать
-->
<template>
  <div class="p-3 flex flex-col lg:flex-row justify-between items-center h-full">
    <app-button class="btn w-full lg:btn-wide btn-error mx-2" @click="onCancel">Отмена</app-button>
    <app-button
    :class="{'btn-disabled': disabledCreate}"
      class="btn w-full lg:btn-wide btn-success m-2"
      @click="onCreate"
    >Создать</app-button>
  </div>
</template>

<script>
export default {
  props: {
    /* Метод для создания нового набора данных данных */
    onCreate: {
      type: Function,
      default: () => ({}),
    },
    /* ДАнные формы */
    dataForm: {
      type: Object,
      default: {},
    },
    /* Активность кнопки "Создать  */
    disabledCreate: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    /*
     * События нажатия кнопки "Отмена"
     */
    onCancel() {
      const { dataForm } = this
      this.$event(`destroy-modal-${dataForm.formUuid}`) // отправка события для для закрытия формы
    },
  },
}
</script>
