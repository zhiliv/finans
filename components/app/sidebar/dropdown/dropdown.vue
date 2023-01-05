<template>
  <li class="p-0 m-0 sidebar-dropdown w-100 d-flex flex-column">
    <div
      class="dropdown-item-list w-100 d-flex text-start position-relative"
      @click="toogleDropdown"
    >
      <Icon v-if="icon" :name="icon" size="50px" class="dropdown-icon" color="var(--light)" />
      <div v-if="!icon" class="position-relative dropdown-block-no-icon">
        <span>{{getShort(name)}}</span>
      </div>
      <span class="dropdown-label w-100">{{name}}</span>
      <div class="position-relative w-100">
        <client-only>
          <Icon
            v-show="!showList"
            name="Chevrondown"
            size="30px"
            color="var(--light)"
            class="dropdown-open"
          />
          <Icon
            v-show="showList"
            name="Chevronup"
            size="30px"
            color="var(--light)"
            class="dropdown-open"
          />
        </client-only>
      </div>
    </div>
    <ul class="list-dropdown d-none w-100">
      <li v-for="item in list" :key="item.nme" class="sidebar-item-dropdown w-100">
        <NuxtLink v-if="item.href" :to="item.href" v-slot="{ href, navigate, isActive }" custom>
          <div
            :class="{active: isActive, 'h-100': true, 'w-100': true, 'm-0': true, 'p-t-10': true }"
          >
            <a :href="href" @click="navigate">- {{item.name}}</a>
          </div>
        </NuxtLink>
        <div v-if="!item.href" :class="{active: isActive, 'w-100': true, 'p-t-10': true}">
          <span class="f-s-18">+ {{item.name}}</span>
        </div>
      </li>
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
    icon: {
      // иконка
      type: String,
      default: null,
    },
    name: {
      // Наименование меню
      type: String,
      default: null,
    },
  },
  methods: {
    /*
     * Отображение/скрытие списка
     * @function toogleDropdown
     */
    toogleDropdown() {
      const { showList } = this
      const { classList } = this.$el.querySelector('.list-dropdown') //  свойства classList у списка
      classList.toggle('show') // добавление  / удаление класса
      this.showList = !showList
    },
    /*
     * Получение сокращенного наименования для формирования значка
     * @function getShort
     * @param {String} name - Наименование пункта меню
     */
    getShort(name) {
      if (name) return name.substr(0, 2)
    },
  },
  data() {
    return {
      showList: false, // свойство указывает отображается ли список или нет
      isActive: false, // активный пункт меню
    }
  },
  mounted() {
    const { list, name } = this
    if (!list.length) console.warn(`Список ${name} пуст`) // если список пустЮ выводится уведомление
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

  .sidebar .list-dropdown {
    list-style-type: none;
  }

  .sidebar:hover .list-dropdown.show {
    display: flex;
    flex-direction: column;
    padding: 0px;
  }

  .sidebar .sidebar-dropdown {
    color: var(--light-gray);
    min-height: 50px;
  }

  .sidebar .sidebar-item-dropdown:hover {
    background: var(--primary);
    transition-property: background;
    transition-duration: 0.4s;
  }

  .sidebar .sidebar-item-dropdown {
    margin-left: 0px;
    color: var(--light);
    height: 50px;
    font-size: 18px;
  }

  .sidebar .dropdown-item-list {
    border: none;
    white-space: normal;
    height: 50px;
  }

  .sidebar .dropdown-item-list:hover {
    background: var(--primary);
    transition-property: background;
    transition-duration: 0.4s;
  }

  .sidebar:hover .dropdown-label,
  .sidebar.show .dropdown-label {
    display: flex;
  }

  .sidebar .dropdown-label {
    display: none;
    position: absolute;
    top: 11px;
    font-size: 18px;
    color: var(--light);
    margin-left: 60px;
  }

  .sidebar .dropdown-open {
    min-width: 50px;
    float: right;
    display: block;
    margin-top: 10px;
  }

  .sidebar .dropdown-open > * {
    stroke: var(--light);
  }

  .sidebar .dropdown-icon {
    min-width: 50px;
    margin-left: 10px;
  }

  .sidebar-item-dropdown span {
    margin-left: 30px;
  }

  .p-t-10 {
    padding-top: 10px;
  }

  .sidebar-item-dropdown a {
    color: var(--light) !important;
    padding-left: 32px;
    min-width: 100% !important;
    margin-top: 10px;
  }

  .f-s-18 {
    font-size: 18px;
  }

  .sidebar .dropdown-block-no-icon {
    border: 4px solid var(--light);
    height: 36px;
    min-width: 36px;
    border-radius: 15%;
    top: 2px;
    margin: 3px 17px;
  }

  .sidebar .dropdown-block-no-icon span {
    position: absolute;
    font-size: 18px;
    color: var(--light);
    margin-left: 0px;
    height: 40px;
    font-weight: 800;
  }
</style>