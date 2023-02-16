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
</template>
<script>
import appModal from '~/pages/modal.vue'
import appConfirm from '~/pages/modals/confirm-modal.vue'
export default {
  components: {
    'app-modal': appModal,
    'app-confirm': appConfirm,
  },

  data() {
    return {
      title: null,
      isOpen: false,
      menu: [
        { name: 'Статистика', href: '/' },
        {
          name: 'Справочники',
          dropdown: true,
          list: [
            { name: 'Типы документов', href: '/guides/page_type_docs' },
            { name: 'Категории', href: '/guides/page_categories' },
            { name: 'Партнерские программы', href: '/guides/page_cpa' },
            { name: 'Типы периодов', href: '/guides/page_types_period' },
            { name: 'Способы получения денег', href: '/guides/page_method_get_money' },
          ],
        },
      ], // меню
    }
  },

  methods: {
    /*
    * Отслеживание изменения пункта меню для отображения заголовка
    * @function getTitle
    * @param {String} title - Заголовок
    */
    getTitle(title){
      this.title = title
    }
  }
}
</script>

<style>
</style>