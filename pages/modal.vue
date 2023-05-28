<template>
  <div class="modal-mask select-none" v-show="isShow && bodyModal">
    <div class="modal-wrapper">
      <div
        class="modal-container border-2 border-zinc-500"
        :class="valueModel?.width ? valueModel?.width : 'w-[50%]'"
      >
        <div class="body-modal bg-zinc-600">
          <div class="h-auto bg-zinc-700 p-1 text-center border-b-2 border-zinc-500">
            <h4 class="text-amber-600 px-4">{{valueModel?.modalTitle}}</h4>
          </div>
          <keep-alive v-if="bodyModal" :input-data="valueModel">
            <component :is="bodyModal" v-bind="valueModel" />
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const isShow = ref(false) // Статус отображения модального окна
const bodyModal = ref() // Тело модального окна
const valueModel = ref() // Данные формы

emitter.on('show-modal', (event: any) => {
  valueModel.value = event
  bodyModal.value = markRaw(defineAsyncComponent(() => import(`./modals/${event.form}.vue`))) // получение тела формы
  isShow.value = true // Отображение модальной формы
  emitter.on(`destroy-modal-${event.formUuid}`, () => {
    bodyModal.value = null
  })
})
</script>

<style>
    .modal-mask {
      position: fixed;
      z-index: 100;
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
</style>