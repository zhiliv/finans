<template>
  <div class="drawer drawer-mobile sidenav hidden lg:flex w-92 h-full" :class="$attrs.class">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-side">
      <label for="my-drawer-2" class="drawer-overlay"></label>
      <ul class="menu px-2 w-80 bg-zinc-800 text-base-content pt-1">
        <template v-for="item in menu" :key="item.name">
          <li class="pt-2" v-if="!item.dropdown">
            <NuxtLink active-class="active" :to="item.href" v-slot="{ href, navigate, isActive }">
              <a :class="{'active': isActive}" :href="href" @click="navigate">{{item.name}}</a>
            </NuxtLink>
          </li>
          <template v-if="item.dropdown">
            <li
              class="font-bold text-zinc-500 py-1 border-t-2 border-zinc-400 first pt-1"
            >{{item.name}}</li>
            <li
              v-for="(itemList, index) in item.list"
              :key="itemList.name"
              class="mt-1"
              :class="item.list.length-1 === index ? 'border-b-2 border-zinc-400 last' : ''"
            >
              <NuxtLink
                active-class="active"
                :to="itemList.href"
                v-slot="{ href, navigate, isActive }"
              >
                <a :class="{'active': isActive}" :href="href" @click="navigate">{{itemList.name}}</a>
              </NuxtLink>
            </li>
          </template>
        </template>
      </ul>
    </div>
  </div>
  <div ref="navbar" class="navbar bg-zinc-800 lg:hidden h-10 w-full">
    <div class="navbar-start">
      <div class="dropdown flex">
        <label tabindex="0" class="btn-ghost lg:hidden content-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-zinc-700 rounded-box w-52"
        >
          <template v-for="item in menu" :key="item.name">
            <li v-if="!item.dropdown">
              <NuxtLink active-class="active" :to="item.href" v-slot="{ href, navigate, isActive }">
                <a :class="{'active': isActive}" :href="href" @click="navigate">{{item.name}}</a>
              </NuxtLink>
            </li>
            <template v-if="item.dropdown">
              <li tabindex="0" class="parent-sidenav-list">
                <a class="justify-between">
                  {{item.name}}
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul class="list-navbar p-2 bg-zinc-700">
                  <li v-for="itemList in item.list" :key="itemList.name">
                    <NuxtLink
                      active-class="active"
                      :to="itemList.href"
                      v-slot="{ href, navigate, isActive }"
                    >
                      <a
                        :class="{'active': isActive}"
                        :href="href"
                        @click="navigate"
                      >{{itemList.name}}</a>
                    </NuxtLink>
                  </li>
                </ul>
              </li>
            </template>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    /* Список меню */
    menu: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    const { setParentActive } = this
    setParentActive()
  },

  methods: {
    /*
     * Установка активности для родительского элемента списка для мобильных устройств
     * @function setParentActive
     */
    setParentActive() {
      const el = this.$refs.navbar.querySelector('.parent-sidenav-list .active')
      if (el) el.parentNode.parentNode.parentNode.querySelector('a').classList.add('active')
    },
  },

  computed: {
    route() {
      return this.$route
    },
  },

  watch: {
    route: {
      immediate: true,
      handler(newValue) {
        const { menu, $emit } = this
        const arr = [] // массив для хранения развернутого списка
        menu.forEach(el => (!el.list ? arr.push(el) : arr.push(...el.list)))
        const selectItem = arr.find(el => el.href === newValue.fullPath)
        $emit('title', selectItem.name)
      },
    },
  },
}
</script>

<style>
  .sidenav {
    overflow-y: auto;
  }

  .sidenav .last {
    padding-bottom: 1em;
  }

  .sidenav .first {
    margin-top: 1em;
  }
</style>