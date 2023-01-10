<template>
  <div class="sidebar shadow-container position-absolute noselect h-98 overflow-x-hidden">
    <ul class="p-0 m-0 w-100">
      <template v-for="item in menu" :key="item.name">
        <li
          v-if="item.type !== 'dropdown'"
          class="d-flex text-wrap sidebar-item w-100 flex-shrink-0"
          @click="item.click"
        >
          <NuxtLink v-if="item.href" :to="item.href" v-slot="{ href, navigate, isActive }" custom>
            <div
              :class="{'w-100': true, 'noselect': true, 'position-relative': true, 'flex-shrink-0': true, active: isActive}"
            >
              <Icon
                v-if="item.icon"
                :name="item.icon"
                size="50px"
                color="var(--light)"
                class="sidebar-icon"
              />
              <div v-if="!item.icon" class="block-icon position-relative">
                <span class="sidebar-short-text m-l-0">{{getShort(item.name)}}</span>
              </div>
              <!-- <span v-if="!item.icon" class="text-no-icon">{{item.name}}</span> -->
              <a class="d-none text-no-icon w-100 link" :href="href" @click="navigate">{{item.name}}</a>
            </div>
          </NuxtLink>
          <div v-if="item.click" class="w-100 noselect position-relative flex-shrink-0">
            <Icon
              v-if="item.icon"
              :name="item.icon"
              size="50px"
              color="var(--light)"
              class="sidebar-icon"
            />
            <div v-if="!item.icon" class="block-icon position-relative">
              <span class="sidebar-short-text m-l-2">{{getShort(item.name)}}</span>
            </div>
            <span class="text-no-icon p-l-2">{{item.name}}</span>
          </div>
        </li>
        <app-sidebar-dropdown
          v-if="item.type === 'dropdown'"
          :list="item.list"
          :icon="item.icon"
          :name="item.name"
        />
      </template>
    </ul>
  </div>
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
  @import '~/assets/css/flex.css';
  @import '~/assets/css/align.css';
  @import '~/assets/css/padding.css';
  @import '~/assets/css/margin.css';
  @import '~/assets/css/position.css';
  @import '~/assets/css/overflow.css';
  @import '~/assets/css/text.css';

  @media (max-width: 991.9px) {
    .sidebar {
      display: none;
    }
  }

  @media (min-width: 992px) {
    .sidebar {
      overflow-y: hidden;
    }

    .sidebar:hover {
      overflow-y: auto;
    }
  }

  .sidebar.show {
    display: flex;
    width: 100%;
  }

  .sidebar {
    z-index: 300;
    background: var(--dark);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 70px;
  }

  @media (min-width: 992px) {
    .sidebar:hover {
      width: 15%;
      transition-property: width;
      transition-duration: 0.4s;
    }
  }

  .sidebar:not(hover) {
    transition-property: width;
    transition-duration: 0.4s;
  }

  .sidebar a {
    font-size: 18px;
    color: var(--light);
    text-decoration: none;
  }

  .sidebar:hover a,
  .sidebar.show a {
    display: inline;
  }

  .sidebar-item:hover div {
    background: var(--primary) !important;
  }

  .sidebar-item:hover a,
  .sidebar-item:hover svg > * {
    color: var(--light) !important;
  }

  @media (min-width: 992px) {
    .sidebar {
      top: 1%;
    }
  }

  @media (max-width: 991.9px) {
    .sidebar {
      top: 50px;
    }
  }

  .sidebar-short-text {
    position: absolute;
    font-size: 18px;
    color: var(--light);
    margin-left: 4px;
    height: 40px;
    font-weight: 800;
  }

  .text-no-icon {
    display: none;
    position: absolute;
    top: 11px;
    font-size: 18px;
    color: var(--light);
    margin-left: 0px;
  }

  .sidebar:hover .text-no-icon,
  .sidebar.show .text-no-icon {
    display: inline-block;
  }

  .sidebar-icon {
    min-width: 50px;
    margin-left: 10px;
  }

  .block-icon {
    display: inline-block;
    border: 4px solid var(--light);
    height: 36px;
    width: 36px;
    position: relative;
    border-radius: 15%;
    top: 2px;
    margin: 3px 17px;
    margin-right: 5px;
  }

  .sidebar-link {
    top: 11px;
  }

  .sidebar li .active {
    background: var(--active);
  }

  .sidebar li .active .link {
    color: var(--dark);
  }

  .sidebar li .active svg > * {
    color: var(--dark);
  }

  .sidebar li .active .block-icon {
    border-color: var(--dark);
  }

  .sidebar li .active .block-icon span {
    color: var(--dark);
  }

  .m-l-0 {
    margin-left: 0px;
  }

  .p-l-2 {
    padding-left: 2px;
  }
</style>
