<template>
  <app-row class="d-flex w-100 main-page">
    <app-col col="12" class="d-flex flex-100 w-100 page-data">
      <app-row class="h-100 d-flex flex-100">
        <sub-type-docs></sub-type-docs>
      </app-row>
    </app-col>
    <sub-control :on-save="onSave" :on-new="onNew"></sub-control>
  </app-row>
</template>

<script>
import subControl from '~/pages/sub/control.vue'
import subTypeDocs from '~/pages/sub/sub_form_type_docs.vue'
export default {
  head: {
    title: 'Управление оферами',
  },
  components: {
    'sub-control': subControl, // подключение панели кнопок
    'sub-type-docs': subTypeDocs,
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
      padding: 0px;
    }

    .main-page {
      padding: 0px;
    }
  }

  @media (min-width: 768px) {
    .page-data {
      height: calc(100% - 60px);
    }
  }
</style>
