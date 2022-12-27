<template>
  <app-container fluid="true" class="vh-100" style="padding: 0px;">
    <app-layout class="h-100" flex="true">
      <app-navbar :menu="menu"/>

<!--
      <app-row class="" style="height: 80%; width:96%; margin-left: 3%;  border: 1px solid silver">

      </app-row> -->

    </app-layout>
  </app-container>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
      menu: [
      {name: 'Статистика1', href: 'https://yandex.ru', icon: 'Statistics'},
      {name: 'Статистика', click: () => {alert(1)}},
      {name: 'Статистика', click: 'https://yandex.ru'},
      {name: 'Статистика', href: 'https://yandex.ru'},
      {name: 'Статистика1', href: 'https://yandex.ru', icon: 'Statistics'},
      {name: 'Статистика', click: () => {alert(1)}},
      {name: 'Статистика', click: 'https://yandex.ru'},
      {name: 'Статистика', href: 'https://yandex.ru'},
      {name: 'Статистика1', href: 'https://yandex.ru', icon: 'Statistics'},
      {name: 'Статистика', click: () => {alert(1)}},
      {name: 'Статистика', click: 'https://yandex.ru'},
      {name: 'Статистика', href: 'https://yandex.ru'},
      {name: 'Статистика1', href: 'https://yandex.ru', icon: 'Statistics'},
      {name: 'Статистика', click: () => {alert(1)}},
      {name: 'Статистика', click: 'https://yandex.ru'},
      {name: 'Статистика', href: 'https://yandex.ru'},
      {name: 'Статистика1', href: 'https://yandex.ru', icon: 'Statistics'},
      {name: 'Статистика', click: () => {alert(1)}},
      {name: 'Статистика', click: 'https://yandex.ru'},
      {name: 'Статистика', href: 'https://yandex.ru'},
        {name: 'Офферы', type: 'dropdown', icon: 'Statistics', list: [
          {name: 'Новый'}
        ]}
      ], // меню
    }
  }
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