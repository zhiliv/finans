<template>
  <v-app>
    <v-app-bar color="primary" prominent class="w-100" height="40"><!-- Меню для мобильных устройств -->
      <v-app-bar-nav-icon variant="text" @click.stop="isOpen = !isOpen" class="d-lg-none d-xl-none"></v-app-bar-nav-icon>
      <v-toolbar-title></v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="isOpen" temporary>
      <v-list :items="menu"></v-list>
    </v-navigation-drawer>
    <v-navigation-drawer expand-on-hover rail><!-- Меню для ПК -->
      <v-list>
        <v-list-item
          prepend-avatar=""
          title=""
          subtitle=""
        ></v-list-item>
      </v-list>
      <v-list density="compact" nav :items="menu">

      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <NuxtPage />
      </v-container>
      <v-footer>Подвал</v-footer>
    </v-main>
  </v-app>
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