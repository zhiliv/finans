<template>
  <div class="min-w-screen h-screen max-h-screen select-none">
    <div class="h-full w-full flex flex-col lg:flex-row">
      <app-sidenav :menu="menu" class="h-full" @title="getTitle" :user="user" />
      <div class="grid grid-cols-12 w-full h-full">
        <div class="lg:col-span-12 col-span-12 w-full md:overflow-y-hidden min-h-full">
          <!-- Заголовок формы -->
          <div class="border-b flex justify-center">
            <h5 class="pl-2  h-full ">{{ title }}</h5>
          </div>
          <div class="h-full max-h-full">
            <router-view />
          </div>

        </div>
      </div>
    </div>
  </div>
  <app-modal />
  <app-toast />
  <app-multiselect />
</template>
<script lang="ts" setup>
import appModal from '~/pages/modal.vue'
import appMultiselect from '~/pages/modals/modal-multiselect.vue'
import menu from './menu.json' //
import { useStore } from '~/stores/users-store'
const store = useStore() // Создание нового стора
const title = ref('') // Заголовок

/**
* Получение теста заголовка
* @function getTitle
* @param {String} text - Текст заголовка 
*/
function getTitle(text: string) {
  title.value = text
}

const user = ref({name: null}) //Данные пользователя
const id: any = ref(await useCookie('user_id')) // Получение идентификатора пользователя из куки

onMounted(async () => {
  const response = await store.getRecord(id.value) // Получение данных пользователя    
  user.value.name = response.value.name // Присвоение имени пользователя
})





</script>

<style >
body {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>~/stores/default