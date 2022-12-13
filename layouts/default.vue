<template>
  <app-container fluid="true" class="vh-100">
    <app-row class="h-100">
      <app-col col="3" style="background: red;">

      </app-col>
    </app-row>
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

<style lang="scss">
@import '~/assets/css/size.css';
@import '~/assets/css/padding.css';
  .h-90 {
    height: 90%;
  }

  .test{
    background: $secondary
  }
</style>