<template>
  <app-col col="12" class="d-flex align-self-end w-100 flex-100 control-sub-page">
  <app-layout class="flex-100 align-content-center align-items-center group-button-control">
    <div class="d-flex w-100 left-control-button">
      <app-button class="primary text-light w-p-120 me-2" @click="onNew">Новый</app-button>
    </div>
    <div class="d-flex align-items-end right-control-button">
      <app-button class="danger text-light w-p-120 me-2" @click="onSave">Отмена</app-button>
      <app-button class="success text-light w-p-120 me-2" @click="onSave">Сохранить</app-button>
    </div>
  </app-layout>
</app-col>
</template>

<script>
export default {
  props: {
    /* Метод для сохранения данных */
    onSave: {
      type: Function,
      default: () => ({}),
    },
    /* Метод для создания нового набора данных данных */
    onNew: {
      type: Function,
      default: () => ({}),
    },
  },
}
</script>

<style>
  @import '~/assets/css/margin.css';
  @import '~/assets/css/size.css';

  .w-p-120 {
    width: 120px;
  }

  @media (max-width: 767.9px) and (orientation: portrait) {
    .group-button-control {
      padding-top: 3px;
      flex-direction: column;
      justify-content: start;
    }

    .group-button-control .btn {
      margin: 0.2em;
      width: 100%;
    }

    .left-control-button {
      width: 100%;
    }

    .right-control-button {
      flex-direction: column;
      width: 100%;
      padding-left: 10px;
    }

    .right-control-button .btn {
      width: 100%;
    }

    .control-sub-page {
      height: 140px !important;
    }
  }

  @media (min-width: 768px) {
    .group-button-control {
      justify-content: start;
    }

    .control-sub-page {

      height: 50px;
    }
  }

  .control-sub-page {
    border-top: 1px solid silver;
  }
</style>