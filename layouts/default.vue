<template>
  <app-container fluid="true" class="vh-100">
    <app-layout class="h-100" flex="true">
      <app-navbar></app-navbar>
      <app-row class="w-100">sdfsdfgdsfsgdfgsdfgfsd1231232342</app-row>
    </app-layout>
  </app-container>
</template>
<script>
import menu from '~~/modules/menu/default-menu.json' // получение списка меню
export default {
  mounted() {
    this.menu = menu // установка значения меню
  },
  data() {
    return {
      isOpen: false,
      menu: [], // меню
      items: [
        { title: 'Dashboard1', icon: 'mdi-view-dashboard' },
        { title: 'Account', icon: 'mdi-account-box' },
        { title: 'Settings', icon: 'mdi-cog' },
      ],
    }
  },
}
</script>

<style>
  @import '~/assets/css/size.css';
  @import '~/assets/css/padding.css';

  .h-90 {
    height: 90%;
  }

  .test {
    background: var(--secondary);
  }
</style>