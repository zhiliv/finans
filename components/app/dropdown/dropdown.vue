<template>
  <li class="p-0 m-0 sidebar-dropdown w-100 d-flex flex-column">
    <div class="dropdown-item-list w-100 d-flex text-start" @click="toogleDropdown" style>
      <nuxt-icon name="basic/stop" filled class="icon-dropdown"></nuxt-icon>
      <span class="d-none sidebar-label w-100">qqqqq</span>
      <div class="position-relative">
        <nuxt-icon
          v-if="!showList"
          name="basic/chevron-down-arrow"
          filled
          class="icon-dropdown-open icon-dropdown-open-lg position-absolute"
        ></nuxt-icon>
        <nuxt-icon v-if="showList" name="basic/chevron-up-arrow" filled class="icon-dropdown-open"></nuxt-icon>
      </div>
    </div>
    <ul class="list-dropdown d-none w-100">
      <li v-for="item in list" :key="item.name" class="sidebar-item-dropdown">{{item.name}}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    list: {
      // список выпадающего меню
      type: Array,
      default: () => [],
    },
  },
  methods: {
    /*
     * Отображение/скрытие списка
     * @function toogleDropdown
     */
    toogleDropdown() {
      const { classList } = this.$el.querySelector('.list-dropdown') //  свойства classList у списка
      classList.toggle('show') // добавление  / удаление класса
      this.showList = !this.showList
    },
  },
  data() {
    return {
      showList: false, // свойство указывает отображается ли список или нет
    }
  },
}
</script>

<style>
  @import '~/assets/css/size.css';
  @import '~/assets/css/padding.css';
  @import '~/assets/css/margin.css';
  @import '~/assets/css/flex.css';
  @import '~/assets/css/position.css';
  @import '~/assets/css/text/text.css';

  @media (min-width: 992px) {
    .dropdown-item-list {
      justify-content: center;
    }

    .icon-dropdown-open-lg {
      display: none;
    }
  }

  @media (max-width: 991.9px) {
    .icon-dropdown-open {
      display: block;
    }
  }

  .list-dropdown {
    list-style-type: none;
  }

  .sidebar:hover .list-dropdown.show {
    display: flex;
    flex-direction: column;
  }

  .sidebar-dropdown {
    color: var(--light-gray);
  }

  .button-open-dropdown {
    background: green;
    height: 20px;
    width: 20px;
  }

  .sidebar:hover .icon-dropdown-open,
  .sidebar.show .icon-dropdown-open {
    display: block;
  }

  .sidebar-item-dropdown:hover {
    background: var(--primary);
    transition-property: background;
    transition-duration: 0.4s;
  }

  .sidebar-item-dropdown {
    height: 35px;
    padding-top: 3px;
    margin-left: 0px;
    color: var(--light);
    padding-left: 10px;
  }

  .icon-dropdown svg {
    width: 30px !important;
    height: 30px !important;
    margin-top: 2px;
    color: var(--dark);
  }

  .icon-dropdown svg > *,
  .icon-dropdown-open svg > * {
    stroke: var(--light);
  }

  .dropdown-item-list {
    border: none;
    white-space: normal;
    height: 40px;
  }

  .dropdown-item-list:hover {
    background: var(--primary);
    transition-property: background;
    transition-duration: 0.4s;
  }

  .icon-dropdown-open {
    display: none;
    padding-top: 15%;
    top: 10px;
    right: 10px;
  }

  .icon-dropdown-open svg {
    width: 20px !important;
    height: 20px !important;
    margin-top: 2px;
    margin-right: 10px;
  }
</style>