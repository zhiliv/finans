<template>
  <app-container fluid="true" class="vh-100 m-0 p-0 overflow-hidden w-100">
    <app-layout class="h-100 w-100 layout-main" flex="true">
      <app-navbar :menu="menu" />
      <app-row class="h-100 w-100 block-page">
        <router-view />
      </app-row>
    </app-layout>
    <app-modal />
    <app-confirm />
    <app-toast />
  </app-container>

</template>
<script>
import appModal from '~/pages/modal.vue'
import appConfirm from '~/pages/modals/confirm-modal.vue'
export default {
  components: {
    'app-modal': appModal,
    'app-confirm': appConfirm
  },
  data() {
    return {
      isOpen: false,
      menu: [
        { name: 'Статистика', href: '/statistic', icon: 'Statistics' },
        { name: 'Офферы', href: '/' },
        { name: 'Справочники', type: 'dropdown', list: [{ name: 'Типы документов', href: '/guides/page_type_docs' }] },
      ], // меню
    }
  },
}
</script>

<style>
  @import '~/assets/css/size.css';
  @import '~/assets/css/padding.css';
  @import '~/assets/css/margin.css';
  @import '~/assets/css/overflow.css';

  .block-page {
    margin-left: 80px;
  }

  @media (max-width: 991.9px) {
    .block-page {
      margin-left: 0px;
    }
  }

  @media (max-width: 767.9px) {
    .layout-main {
      width: 100vw;
    }

    .block-page .row:first-child {
      margin: 0px;
    }

    .block-page .row div:last-child {
      height: 120px;
    }
  }
</style>