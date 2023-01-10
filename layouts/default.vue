<template>
  <app-container fluid="true" class="vh-100 m-0 p-0 overflow-hidden w-100">
    <app-layout class="h-100 w-100" flex="true">
      <app-navbar :menu="menu" />
      <app-row class="h-100 w-100 block-page">
        <router-view />
      </app-row>
    </app-layout>
  </app-container>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
      menu: [
        { name: 'Статистика', href: '/statistic', icon: 'Statistics' },
        { name: 'Офферы', href: '/'},
        { name: 'Справочники', type: 'dropdown', list: [
          { name: 'Типы документов', href: '/guides/type_docs'}
        ]}

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
    border: 1px solid silver;
    margin-left: 80px;
  }

  @media (max-width: 991.9px) {
    .block-page {
      margin-left: 0px;

    }
  }
</style>