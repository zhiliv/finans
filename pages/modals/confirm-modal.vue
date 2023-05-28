<template>
  <div class="modal-confirm-mask" v-show="isShow">
    <div class="modal-confirm-wrapper">
      <div class="modal-confirm-container border-2 border-zinc-500">
        <div class="body-confirm-modal bg-zinc-600">
          <div class="h-auto bg-zinc-700 p-1 text-center border-b-2 border-zinc-500">
            <span class="text-amber-600 px-4">{{ title }}</span>
          </div>
          <div class="flex justify-center p-2">{{ message }}</div>

          <div class="p-0 flex flex-col lg:flex-row justify-between items-center h-full">
            <app-button class="btn-error btn-sm w-40 m-2" @click="onCancel">{{ cancelText }}</app-button>
            <app-button class="btn-success btn-sm w-40 m-2" @click="onConfirm">{{ confirmText }}</app-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isShow = ref(false) // Статус отображения сообщения
const confirmText = ref('Да') // Текстовое значение кнопки подтверждения
const cancelText = ref('Нет') // Текстовое значение кнопки отмены
const title = ref('Подтвердить действие?') // Значение заголовка
const message = ref('') // Значение текста подтверждения

/*
 * Отслеживание события для отображения окна
 */
emitter.on('show-confirm', (event: any) => {
  if (event?.confirmText) confirmText.value = event.confirmText
  if (event?.cancelText) cancelText.value = event.cancelText
  if (event?.title) title.value = event.title
  if (event?.message) message.value = event.message
  isShow.value = true // установка статуса показа окна
})

/*
 * Событие при нажатии на кнопку подтверждения
 * @function onConfirm
 */
function onConfirm() {
  emitter.emit('close-confirm', true) // Отправка события c результатом ответа
  isShow.value = false // Установка статусы скрытия окна
}

/*
 * Событие при нажатии кнопки отмены
 * @function onCancel
 */
function onCancel() {
  emitter.emit('close-confirm', false) // Отправка события c результатом ответа
  isShow.value = false // Установка статусы скрытия окна
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
      width: 15%;
      margin: 0px auto;
      background-color: #fff;
      border-radius: 2px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      font-family: Helvetica, Arial, sans-serif;
      padding-bottom: 0px;
    }

    @media (max-width: 767.9px) {
      .modal-confirm-container {
        width: 90%;
      }
    }
</style>