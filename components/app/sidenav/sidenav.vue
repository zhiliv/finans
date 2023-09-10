<template>
  <div class="drawer drawer-mobile sidenav hidden lg:flex w-92 h-full" :class="$attrs.class">
    
    <div class="drawer">
      
      <ul class="menu px-2 w-80 bg-gray-200 text-base-content pt-1">
        <template v-for="item in menu" :key="item.name">
          <li class="pt-2" v-if="!item.dropdown">
            <NuxtLink active-class="active" :to="item.href">{{ item.name }}</NuxtLink>
          </li>
          <template v-if="item.dropdown">
            <li class="font-bold text-zinc-500 py-1 border-t-2 border-zinc-400 first pt-1">{{ item.name }}</li>
            <li v-for="(itemList, index) in item.list" :key="itemList.name" class="mt-1"
              :class="item.list.length - 1 === index ? 'border-b-2 border-zinc-400 last' : ''">
              <NuxtLink active-class="active" :to="itemList.href">{{ itemList.name }}</NuxtLink>
            </li>
          </template>
        </template>
      </ul>
    </div>
  </div>
  <div ref="navbarRefs" class="navbar bg-gray-400 lg:hidden h-10 w-full z-100">
    <div class="navbar-start">
      <div class="dropdown flex">
        <label tabindex="0" class="btn-ghost lg:hidden content-end">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 border border-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-200 rounded-box w-52">
          <template v-for="item in menu" :key="item.name">
            <li v-if="!item.dropdown">
              <NuxtLink active-class="active" :to="item.href">{{ item.name }}</NuxtLink>
            </li>
            <template v-if="item.dropdown">
              <li tabindex="0" class="parent-sidenav-list">
                <a class="justify-between">
                  {{ item.name }}
                  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul class="list-navbar p-2 bg-gray-200">
                  <li v-for="itemList in item.list" :key="itemList.name">
                    <NuxtLink active-class="active" :to="itemList.href">{{ itemList.name }}</NuxtLink>
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

<script lang="ts" setup>
/**
 * @interface Props
 * @member {Array} menu - Список меню
 */
interface Props {
  menu: any
}

/* Установка значений по умолчанию для входящих значений */
const props = withDefaults(defineProps<Props>(), {
  menu: [],
})

const emit = defineEmits(['title'])

const navbarRefs = ref() // Ссылка на элемент

/*
 * Получение заголовка для формы
 * @function getTitleNav
 */
function getTitleNav() {
  const arr: any = []
  props.menu.forEach((el: any) => (!el.list ? arr.push(el) : arr.push(...el.list))) // Получение всех элементов меню
  const selectItem = arr.find((el: any) => el.href === route.currentRoute.value.path) // получение выделенного элемента
  emit('title', selectItem.name) // Отправка заголовка формы
}

/* При монтировании объекта */
onMounted(() => {
  const el = navbarRefs.value.querySelector('.parent-sidenav-list .active') // Поиск активного класса элемента
  if(el) el.parentNode.parentNode.parentNode.querySelector('a').classList.add('active') // Установка активного класса для элемента
  getTitleNav()
})

const route = useRouter() // Получение роута

watch(
  () => route,
  () => {
    getTitleNav()
  },
  { deep: true },
)
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