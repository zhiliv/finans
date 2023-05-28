<template>
<div class="min-w-screen min-h-screen select-none">
  <div class="h-full w-full flex flex-col lg:flex-row">
    <app-sidenav :menu="menu" class="min-h-screen" @title="getTitle" />
    <div class="grid grid-cols-12 w-full h-full">
      <div class="lg:col-span-12 col-span-12 w-full min-h-screen">
        <!-- Заголовок формы -->
        <div class="bg-zinc-700 border-amber-700 h-[28px]">
          <h5 class="text-amber-400 px-2">{{title}}</h5>
        </div>
        <router-view />
      </div>
    </div>
  </div>
</div>
<app-modal />
<app-confirm />
<app-toast />
<app-multiselect />
</template>
<script lang="ts" setup>
import appModal from '~/pages/modal.vue'
import appConfirm from '~/pages/modals/confirm-modal.vue'
import appMultiselect from '~/pages/modals/modal-multiselect.vue'
import menu from './menu.json' //

const title = ref('') // Заголовок

/**
* Получение теста заголовка
* @function getTitle
* @param {String} text - Текст заголовка 
*/
function getTitle(text: string){
  title.value = text
}

</script>