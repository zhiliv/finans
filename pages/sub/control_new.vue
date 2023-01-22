<!-- Сабформа для создания новго элемента
Содержит кнопки: "Отменить" и Создать
-->
<template>
  <app-col col="12" class="d-flex align-self-end w-100 flex-100 control-sub-page-control-new pt-2">
    <app-layout class="flex-100 align-content-center align-items-center group-button-control-new">
      <div class="d-flex w-100 left-control-button">
        <app-button class="danger text-light" @click="onCancel">Отмена</app-button>
      </div>
      <div class="d-flex align-items-end right-control-button">
        <app-button class="success text-light" @click="onCreate">Создать</app-button>
      </div>
    </app-layout>
  </app-col>
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
  @import '~/assets/css/margin.css';
  @import '~/assets/css/padding.css';
  @import '~/assets/css/size.css';

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