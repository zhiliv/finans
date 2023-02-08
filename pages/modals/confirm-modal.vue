<template>
  <div class="modal-confirm-mask" v-show="isShow">
    <div class="modal-confirm-wrapper">
      <div class="modal-confirm-container border-2 border-zinc-500">
        <div class="body-confirm-modal bg-zinc-600">
          <div class="h-auto bg-zinc-700 p-1 text-center border-b-2 border-zinc-500">
            <h4 class="text-amber-600 px-4">{{message}}</h4>
          </div>
          <div class="p-3 flex flex-col lg:flex-row justify-between items-center h-full">
            <app-button
              class="btn btn-error w-full lg:btn-wide m-2"
              @click="onCancel"
            >{{cancelText}}</app-button>
            <app-button
              class="btn btn-success w-full lg:btn-wide m-2"
              @click="onConfirm"
            >{{confirmText}}</app-button>
          </div>
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
      const { $event } = this
      $event(`close-confirm`, true) // Событие при подтверждении1
      this.isShow = false // скрытие окна
    },

    /*
    * При нажатии на кнопку "Отмена"
    @ function onCancel
    */
    onCancel() {
      const { $event } = this
      $event(`close-confirm`, false) // Событие при подтверждении1
      this.isShow = false // скрытие окна
    },
  },

  mounted() {
    const { $listen } = this
    $listen('show-confirm', event => {
      // Прослушивание события открытия окна
      const { message, cancelText, confirmText } = event
      if (cancelText) this.cancelText = cancelText // установка значения текста кнопки отмены
      if (confirmText) this.confirmText = confirmText // установка значения текста кнопки подтверждения
      this.message = event && message ? message : 'Подтвердить?' // установка значения сообщения
      this.isShow = true // установка статуса показа окна
    })
  },
}
</script>
<style>
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
</style>