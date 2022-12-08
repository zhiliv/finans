<template>
  <app-button btn-size="sm">Тест</app-button>
</template>
<script>
import menu from '~/system/default-menu.json' // получение списка меню
export default {
  mounted() {
    this.menu =  menu // установка значения меню
  },
  data() {
    return {
      isOpen: false,
      menu: [], // меню
      items: [
        { title: "Dashboard1", icon: "mdi-view-dashboard" },
        { title: "Account", icon: "mdi-account-box" },
        { title: "Settings", icon: "mdi-cog" },
      ],
    };
  },
};
</script>

<style>
  .h-90 {
    height: 90%;
  }
</style>