<template>
  <div class="min-w-screen h-screen max-h-screen select-none">
    <div class="h-full w-full flex flex-col lg:flex-row">
      <app-sidenav :menu="menu" class="h-full" @title="getTitle" />
      <div class="grid grid-cols-12 w-full h-full">
        <div class="lg:col-span-12 col-span-12 w-full md:overflow-y-hidden min-h-full">
          <!-- Заголовок формы -->
          <div class="border">
            <h4 class="pl-2 min-h-[32px]">{{ title }}</h4>
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

const title = ref('') // Заголовок

/**
* Получение теста заголовка
* @function getTitle
* @param {String} text - Текст заголовка 
*/
function getTitle(text: string) {
  title.value = text
}

</script>

<style >
body {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>