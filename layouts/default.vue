<template>
  <app-col col="12" atr="test" flex-fill="true">
    <app-button btn-size="sm" @click="test != !test">Тест</app-button>
  </app-col>
  <app-test>
    <app-lll arttt="fsdfgs" btn-size="sm">Тест</app-lll>
  </app-test>
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