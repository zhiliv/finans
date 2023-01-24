<template>
  <div class="modal-confirm-mask" v-show="isShow">
    <div class="modal-confirm-wrapper">
      <div class="modal-confirm-container">
        <div class="body-confirm-modal">
          <app-row>
            <app-col col="12">
              <div class="p-2" style>
                <app-label class="m-0 fs-18px">{{message}}</app-label>
              </div>
            </app-col>
          </app-row>
          <app-col col="12" class="d-flex align-self-end w-100 pt-1">
            <app-layout
              class="flex-100 align-content-center align-items-center"
              style="border-top: 1px solid silver; padding : 1%; padding-bottom: 0px;"
            >
              <div class="d-flex w-100">
                <app-button class="danger text-light btn-control" @click="onCancel">{{cancelText}}</app-button>
              </div>
              <div class="d-flex align-items-end right-control-button">
                <app-button
                  class="success text-light btn-control"
                  @click="onConfirm"
                >{{confirmText}}</app-button>
              </div>
            </app-layout>
          </app-col>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false, // отключение наследования аттрибутов
  data() {
    return {
      confirmText: 'Да', // значение текста кнопки подтверждения
      cancelText: 'Нет', // значение текста кнопки отмены
      message: '', // текст сообщения
      isShow: false, // статус отображения формы
    }
  },

  methods: {
    /*
     * При нажатии на кнопку "Подтвердить"
     * @function onConfirm
     */
    onConfirm() {
      this.$event(`close-confirm`, true) // Событие при подтверждении1
      this.isShow = false
    },

    /*
    * При нажатии на кнопку "Отмена"
    @ function onCancel
    */
    onCancel() {
      this.$event(`close-confirm`, false) // Событие при подтверждении1
      this.isShow = false
    },
  },

  mounted() {
    this.$listen('show-confirm', event => {
      const {message, cancelText, confirmText } = event
      if (cancelText) this.cancelText = cancelText // установка значения текста кнопки отмены
      if (confirmText) this.confirmText = confirmText // установка значения текста кнопки подтверждения
      this.message = event && message ? message : 'Подтвердить?' // установка значения сообщения
      this.isShow = true // установка статуса показа окна
    })
  },
}
</script>
<style>
  @import '~/assets/css/padding.css';
  @import '~/assets/css/margin.css';
  .modal-confirm-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: table;
  }

  .modal-confirm-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-confirm-container {
    width: 25%;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    font-family: Helvetica, Arial, sans-serif;
    padding-bottom: 0px;
  }

  @media (max-width: 767.9px) {
    .modal-confirm-container {
      width: 100%;
    }
  }

  .body-confirm-modal {
    padding: 0 1% 1% 1%;
  }
</style>