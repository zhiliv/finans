<template>
  <div>
    <nav ref="nav" class="w-100 navbar position-absolute shadow-container">
      <app-button size="sm" @click="tootleSidebar" class="button-burger">
        <Icon name="Burger" class="burger" />
      </app-button>
      <div class="d-flex align-items-center justify-content-center w-100">
        <span class="navbar-title">{{title}}</span>
      </div>
    </nav>
    <app-sidebar ref="sidebar" :menu="menu" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      // заголовок(используется для мобильной версии)
      type: String,
      default: null,
    },
    menu: {
      // меню
      type: Array,
      default: () => [],
    },
  },
  methods: {
    /*
     * Метод который показывает \ скрывает боковое меню
     * @function tootleSidebar
     */
    tootleSidebar() {
      const { $event } = useNuxtApp() // свойство для отправки событий через шину данных
      $event('toggle-sidebar') // отправка события для открытия\закрытия боковой панели
      this.$refs.nav.classList.toggle('shadow-container') // добавление\удаление теней
    },
  },
}
</script>

<style>
  @import '~/assets/css/position.css';
  @import '~/assets/css/size.css';
  @import '~/assets/css/flex.css';

  @media (min-width: 992px) {
    .navbar {
      display: none !important;
    }
  }
  .navbar {
    display: flex;
    z-index: 2;
    background: var(--dark);
    height: 50px;
    margin: 0px;
  }

  .burger {
    width: 30px !important;
    height: 30px !important;
    margin-top: 2px;
  }

  .burger > line {
    stroke: var(--primary);
  }

  .button-burger {
    padding: 0.3em !important;
    margin-top: 0.4em;
    margin-left: 0.4em;
    border-color: var(--primary);
  }

  .navbar-title {
    color: var(--light);
  }
</style>