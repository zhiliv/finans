<template>
  <app-row class="d-flex w-100">
    <app-col col="12" class="d-flex w-100 page-data">
      <app-row class="h-100">
        <app-listbox-items></app-listbox-items>
      </app-row>
    </app-col>
    <sub-control :on-save="onSave" :on-new="onNew"></sub-control>
  </app-row>
</template>

<script>
import subControl from '~/pages/sub/control.vue'
export default {
  head: {
    title: 'Управление оферами',
  },
  components: {
    'sub-control': subControl, // подключение панели кнопок
  },
  methods: {
    /* Сохранение данных */
    onSave() {},
    /* Создание нового набора данных */
    onNew() {},
  },
}
</script>

<style>
  @import '~/assets/css/flex.css';
  @import '~/assets/css/size.css';

  @media (max-width: 767.9px) and (orientation: portrait) {
    .page-data {
      height: calc(100% - 160px);
    }
  }

  @media (min-width: 768px) {
    .page-data {
      height: calc(100% - 60px);
    }

  }
</style>
