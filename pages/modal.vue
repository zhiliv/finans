<template>
  <div class="modal-mask" v-show="isShow && bodyModal">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="m-0 p-0 modal-title">
          <h2 class="m-0">{{dataForm.modalTitle}}</h2>
        </div>
        <div class="body-modal">
          <keep-alive v-if="bodyModal" :input-data="dataForm">
            <component :is="bodyModal" v-bind="dataForm" />
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false, // статус отображения модального окна
      bodyModal: null, // тело модального окна
      formUuid: null, // уникальный идентификатор формы
      dataForm: {}, // объект данных формы
    }
  },

  mounted() {
    const {$listen} = this
    $listen('show-modal', event => {
      this.dataForm = event // присвоение объекту формы переданного значения
      this.bodyModal = markRaw(defineAsyncComponent(() => import(`./modals/${event.form}.vue`))) // получение тела формы
      this.isShow = true // отображение окна
      $listen(`destroy-modal-${event.formUuid}`, event => {
        this.bodyModal = null // скрытие модального окна
      })
    })
  },
}
</script>

<style>
  @import '~/assets/css/padding.css';
  @import '~/assets/css/margin.css';
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: table;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    padding: 6%;
  }

  .modal-container {
    width: 40%;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    font-family: Helvetica, Arial, sans-serif;
    padding-bottom: 0px;
  }

  @media (max-width: 767.9px) {
    .modal-container {
      width: 100%;
    }
  }

  .modal-title {
    border-bottom: 1px solid var(--dark);
  }

  .body-modal {
    padding: 0 1% 1% 1%;
  }

  .modal-title h2 {
    padding-left: 1%;
  }
</style>