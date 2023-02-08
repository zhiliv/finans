<template>
  <div class="modal-mask" v-show="isShow && bodyModal">
    <div class="modal-wrapper">
      <div class="modal-container border-2 border-zinc-500">
        <div class="body-modal bg-zinc-600">
          <div class="h-auto bg-zinc-700 p-1 text-center border-b-2 border-zinc-500">
            <h4 class="text-amber-600 px-4">{{valueModel.modalTitle}}</h4>
          </div>
          <keep-alive v-if="bodyModal" :input-data="valueModel">
            <component :is="bodyModal" v-bind="valueModel" />
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
      valueModel: {}, // объект данных формы
    }
  },

  mounted() {
    const { $listen } = this
    $listen('show-modal', event => {
      this.valueModel = event // присвоение объекту формы переданного значения
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
    width: 50%;
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