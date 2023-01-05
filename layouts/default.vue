<template>
  <app-container fluid="true" class="vh-100" style="padding: 0px;">
    <app-layout class="h-100" flex="true">
      <app-navbar :menu="menu" />
      <app-row class style="height: 100%; width:100%; margin-left: 80px;  border: 1px solid silver">
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
        { name: 'Главная', href: '/', icon: 'Statistics' },
        { name: 'Нажать', href: '/statistic1' },
        { name: 'Статистика1', href: '/statistic', icon: 'Statistics' },
        {
          name: 'Клик',
          click: () => {
            alert(1)
          },
        },
        {
          name: 'Кликстер',
          icon: 'Statistics',
          click: () => {
            alert(1)
          },
        },
        {
          name: 'Офферы',
          type: 'dropdown',
          icon: 'Statistics',
          list: [
            { name: 'Новый', click: () => alert(2) },
            { name: 'Старый', href: '/' },
          ],
        },
        /*       {name: 'Статистика', click: () => {alert(1)}},
      {name: 'Статистика', click: () => {alert(1)}},
        {name: 'Офферы', type: 'dropdown', icon: 'Statistics', list: [
          {name: 'Новый'}
        ]} */
      ], // меню
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