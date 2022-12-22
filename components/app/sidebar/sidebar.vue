<template>
  <nav
    class="sidebar shadow-container noselect h-98 position-absolute overflow-auto overflow-x-hidden"
  >
    <ul class="p-0 w-100">
      <template v-for="item in menu" :key="item.name">
        <li class="d-flex sidebar-item w-100 text-start text-wrap">
          <div v-if="item.type !== 'dropdown'" class="d-flex w-100 sidebar-item-button noselect">
            <template v-if="item.icon">
              <nuxt-icon :name="item.icon" class="sidebar-icon" />
              <span class="sidebar-label d-none">{{item.name}}</span>
            </template>
            <template v-else>
              <div class="block-icon position-relative">
                <span class="sidebar-icon no-icon">{{getShort(item.name)}}</span>
              </div>
              <span class="sidebar-label d-none text-no-icon">{{item.name}}</span>
            </template>
          </div>
        </li>
        <app-dropdown v-if="item.type === 'dropdown'" :list="item.list" />
      </template>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    menu: {
      // список меню
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    const { $listen } = useNuxtApp() // свойство для прослушивания события шины данных
    const { classList } = this.$el // управление классами
    $listen('toggle-sidebar', () => classList.toggle('show')) // прослушивание события для отображения \ скрытия бокового меню
    addEventListener('resize', () => classList.remove('show')) // прослушивание события изменения размера окна
  },
  methods: {
    /*
     * Получение сокращенного наименования для формирования значка
     * @function getShort
     * @param {String} name - Наименование пункта меню
     */
    getShort(name) {
      if (name) return name.substr(0, 2)
    },
  },
}
</script>

<style>
  @import '~/assets/css/size.css';
  @import '~/assets/css/padding.css';
  @import '~/assets/css/position.css';
  @import '~/assets/css/overflow.css';
  @import '~/assets/css/text/text.css';

  .sidebar {
    top: 1%;
    z-index: 1;
    background: var(--dark);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .sidebar.show {
    color: var(--light-gray) !important;
    display: block !important;
    height: calc(100% - 60px);
    margin-top: 40px;
  }

  .sidebar:hover {
    max-width: 100%;
    width: 15%;
    transition-property: width;
    transition-duration: 0.4s;
  }

  .sidebar:not(hover) {
    max-width: 100%;
    transition-property: width;
    transition-duration: 0.4s;
  }

  @media (max-width: 575.9px) {
    .sidebar-item-button {
      justify-content: start !important;
    }
  }

  @media (max-width: 991.9px) {
    .sidebar.show {
      width: 100% !important;
    }
    .sidebar-item-button {
      justify-content: start !important;
    }
  }

  @media (max-width: 1199.9px) {
    .sidebar {
      display: none;
    }
  }

  @media (min-width: 1200px) and (max-width: 1399.9px) {
    .sidebar {
      width: 4%;
    }
  }

  @media (min-width: 1400px) {
    .sidebar {
      width: 2%;
      max-width: 65px;
    }
  }

  .sidebar-label {
    padding-top: 5px;
    color: var(--light);
  }

  .sidebar:hover .sidebar-label,
  .sidebar.show .sidebar-label {
    display: block;
  }

  .sidebar-item {
    border: none;
  }

  .sidebar-item-button {
    justify-content: center;
    height: 40px;
  }

  .sidebar:hover .sidebar-item-button {
    justify-content: start;
  }

  .sidebar-item-button:hover,
  .sidebar-item-list:hover {
    background: var(--primary);
    transition-property: background;
    transition-duration: 0.4s;
  }

  .sidebar-icon svg {
    width: 30px !important;
    height: 30px !important;
    margin-top: 2px;
  }

  .sidebar-icon svg > * {
    stroke: var(--light-gray);
    color: var(--dark);
  }

  .block-icon {
    height: 22px;
    width: 22px;
    color: var(--light);
    border: 2px solid var(--light);
    margin-top: 8px;
    margin-left: 3px;
    border-radius: 3px;
  }

  .no-icon {
    margin-bottom: 22px !important;
    font-size: 14px;
    font-weight: 700;
    position: absolute;
    top: -2px;
    left: 1px;
  }

  .text-no-icon {
    padding-left: 3px;
    padding-top: 7px;
  }
</style>
