<template>
  <app-row class="d-flex w-100 main-page">
    <app-col col="12" class="d-flex flex-100 w-100 page-data">
      <app-row class="h-100 d-flex flex-100">
        <div class="d-flex w-100 data-document h-100 flex-column">
          <div class="w-100 h-100">
            <h2
              class="border-bottom border-1px border-solid border-grey-lighten-3 w-100 m-0"
            >Типы документов</h2>
            <app-row class="h-90 overflow-auto type-docs-page">
              <app-col col-sm="12" col-md="12" col-lg="3" col-xl="3" col-xxl="2" class="h-100">
                <app-listbox-items
                  ref="list"
                  :list="list"
                  v-model="dataPage"
                  v-model:index="index"
                  :show-spinner="true"
                  :is-load="statusLoadList"
                  class="h-95 shadow-container border border-1px border-solid border-grey-lighten-2 border-radius-5px m-t-05em"
                ></app-listbox-items>
              </app-col>
              <app-col col-sm="12" col-md="12" col-lg="9" col-xl="9" col-xxl="10" class>
                <div
                  class="shadow-container h-95 w-100 border border-1px border-solid border-grey-lighten-2 border-radius border-radius-5px m-t-05em"
                >
                  <data-form v-model="dataPage" />
                </div>
              </app-col>
            </app-row>
          </div>
        </div>
      </app-row>
    </app-col>
    <sub-control v-model="dataPage" :on-save="onSave" :on-new="onNew" />
  </app-row>
</template>

<script>
import dataForm from '~/pages/sub/sub_form_type_docs.vue'
import subControl from '~/pages/sub/control.vue'

export default {
  components: {
    'data-form': dataForm,
    'sub-control': subControl, // подключение панели кнопок
  },

  methods: {
    /* Сохранение данных
     * @function onSave
     */
    onSave() {
      console.log('index', this.index)
    },

    /* Создание нового набора данных
     * @function onNew
     */
    async onNew() {
      const result = await this.$showModal('modal_type_docs', { modalTitle: 'Создание нового типа документа' }) // отображение модального окна
      const response = await $fetch('/api/type-docs/add', { method: 'POST', body: result }) // отправка запроса для создания новой записи
      this.list.push(response) // добавление результата в список
    },

    /*
     * Получение списка типов документов
     * @function getList
     */
    async getList() {
      const result = await $fetch('/api/type-docs/list', { method: 'GET' }) // отправка запроса для получения всего списка
      return result
    },
  },

  data() {
    return {
      list: [], // список типов документов
      isLoadList: false, // статус загрузки данных
      dataPage: {}, // данные страницы
      index: -1, // индекс выделенного элемента
      statusLoadList: false // статус загрузки списка
    }
  },

  async beforeMount() {
    const { getList } = this
    const result = await getList() // получение списка типа документов
    this.list = result // установка значения в список
    this.statusLoadList = true // скрытие спиннера загрузки в списке
  },
}
</script>

<style>
  @import '~/assets/css/size.css';
  @import '~/assets/css/margin.css';
  @import '~/assets/css/overflow.css';
  @import '~/assets/css/font.css';
  @import '~/assets/css/padding.css';
  @media (max-width: 767.9px) {
    .data-document {
      margin-top: 50px;
    }
  }

  @media (max-width: 767.9px) and (orientation: portrait) {
    .page-data {
      height: calc(100% - 160px);
      padding: 0px;
    }

    .main-page {
      padding: 0px;
    }

    .type-docs-page {
      max-height: 72vh;
    }
  }

  @media (min-width: 768px) {
    .page-data {
      height: calc(100% - 60px);
    }

    .type-docs-page {
      max-height: 87vh;
    }
  }
</style>