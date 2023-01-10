<template>
  <app-row class="d-flex w-100">
    <app-col col="12" class="d-flex w-100" style="border: 1px solid gray; height: calc(100% - 70px);">
      <app-row class="h-100">
        <app-listbox-items></app-listbox-items>
      </app-row>
    </app-col>
    <app-col col="12" class="d-flex align-self-end w-100 flex-100" style="border: 1px solid green; height: 70px;">
      <sub-control></sub-control>
    </app-col>
  </app-row>
</template>

<script>
import subControl from '~/pages/sub/control.vue'
export default {
  head: {
    title: 'Управление оферами',
  },
  components: {
    'sub-control': subControl // подключение панели кнопок
  }
}
</script>

<style>
  @import '~/assets/css/flex.css';
  @import '~/assets/css/size.css';
</style>
