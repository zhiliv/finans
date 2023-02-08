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

<style>
  .w-p-120 {
    width: 190px;
  }

  @media (max-width: 767.9px) and (orientation: portrait) {
    .group-button-control-new {
      padding-top: 3px;
      flex-direction: column;
      justify-content: start;
    }

    .group-button-control-new .btn {
      margin: 0.2em;
      width: 100%;
    }

    .left-control-button {
      width: 100%;
    }

    .right-control-button {
      flex-direction: column;
      width: 100%;
      padding-left: 6px;
    }

    .right-control-button .btn {
      width: 100%;
    }

    .control-sub-page-control-new {
      height: 140px !important;
    }
  }

  @media (min-width: 768px) {
    .group-button-control-new {
      justify-content: start;
    }

    .control-sub-page-control-new {
      height: 50px;
    }
  }

  .control-sub-page-control-new {
    padding-bottom: 0px;
    height: auto !important;
  }

  .group-button-control-new {
    padding-left: 9px;
    padding-right: 9px;
  }
</style>