<template>
  <app-col col="12" atr="test" flex-fill="true">
    <app-d-flex>
      dfgdsrg
    </app-d-flex>
    <app-button size="sm" @click="test != !test">Тест</app-button>
  </app-col>
</template>
<script>
import menu from '~/system/default-menu.json' // получение списка меню
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
  .h-90 {
    height: 90%;
  }
</style>