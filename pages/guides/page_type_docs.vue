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
                  v-model:index="selectIndex"
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
    <sub-control
      v-model="dataPage"
      :on-save="onSave"
      :on-new="onNew"
      :disabled-control="disControl"
    />
  </app-row>
</template>

<script>
import dataForm from '~/pages/sub/sub_form_type_docs.vue'
import subControl from '~/pages/sub/control.vue'
import mixinFunction from '~/mixins/globalMixins'

export default {
  mixins: [mixinFunction],

  components: {
    'data-form': dataForm,
    'sub-control': subControl, // подключение панели кнопок
  },

  methods: {
    /* Сохранение данных
     * @function onSave
     */
    async onSave() {
      let test = await this.$showConfirm('confirm', { message: 'Хотите ли вы?', confirmText: 'НЕЕЕЕ' })
      console.log('🚀 -> onSave -> test', test)
    },

    /* Создание нового набора данных
     * @function onNew
     */
    async onNew() {
      const { clickElList, $showModal, list, $refs, $nextTick, $el, $showToast } = this
      const result = await $showModal('modal_type_docs', { modalTitle: 'Создание нового типа документа' }) // отображение модального окна
      const response = await $fetch('/api/type-docs/add', { method: 'POST', body: result }) // отправка запроса для создания новой записи
      if (response && response.error)
        $showToast({
          title: 'Произошла ошибка при добавлении записи',
          message: response.error,
          timer: 7000,
          color: 'danger',
        })
      // отображение уведомления об ошибке
      else if (response && response.warning)
        $showToast({
          title: 'Внимание',
          message: response.warning,
          timer: 7000,
          color: 'warning',
        })
      else {
        this.list.push(response) // добавление результата в список
        clickElList(list.length - 1) // выбор добавленного элемента
        $nextTick(() => {
          const options = {
            top: $el.offsetWidth, // значение сдвига скролла от верха
            behavior: 'smooth', // тип анимации
          }
          $refs.list.$el.querySelector('ul').scroll(options) // прокрутка списка
        })
        $showToast({ title: 'Успех', message: 'Запись успешно добавлена', timer: 5000, color: 'success' }) // отображение уведомления об успешном добавлении
      }
    },

    /*
     * Получение списка типов документов
     * @function getList
     */
    async getList() {
      const result = await $fetch('/api/type-docs/all', { method: 'GET' }) // отправка запроса для получения всего списка
      return result
    },

    /*
     * Выбор элемента списка по передаваемому индексу
     * @function clickElList
     * @param {Number} index - Индекс элемента, который необходимо выбрать
     */
    clickElList(index) {
      const { $refs, $nextTick } = this
      $nextTick(() => {
        const els = $refs.list.$el.querySelectorAll('li') // получение  всех DOM элементов списка
        els.forEach((el, ind) => {
          if (ind === index) el.click()
        }) // обход списка и поиск нужного элемента и эмитации его нажатия
      })
    },
  },

  data() {
    return {
      list: [], // список типов документов
      isLoadList: false, // статус загрузки данных
      dataPage: {}, // данные страницы
      selectIndex: null, // индекс выделяемого элемента
      statusLoadList: false, // статус загрузки списка
      disControl: true, // Активность кнопок "Отменить" и "Сохранить"
      selectItem: {}, // объект выделенной строки
    }
  },

  async beforeMount() {
    const { getList } = this
    const result = await getList() // получение списка типа документов
    this.list = result // установка значения в список
    this.statusLoadList = true // скрытие спиннера загрузки в списке
  },

  watch: {
    dataPage: {
      async handler(newValue, oldValue) {
        const { selectIndex, list, checkEmptyObject, withObject, clickElList, $showConfirm, cloneObject } = this
        if (
          !checkEmptyObject(newValue) && // проверка что объект нового значения не пустой
          !checkEmptyObject(oldValue) && // проверка что объект старого значения не пустой
          newValue.id === oldValue.id && // проверка на идентичность идентификаторов
          !withObject(oldValue, newValue) &&
          !withObject(oldValue, list[selectIndex]) // сравнение объектов
        )
          this.dataPage = oldValue // обработка когда данные страницы изменены, но выбран тот же пункт в списке, который и был, данные не затираются
        const index = list.findIndex(el => el.id === oldValue.id) // получение индекса предыдушего выбранного элемента

        if (
          !checkEmptyObject(newValue) && // проверка что объект нового значения не пустой
          !checkEmptyObject(oldValue) && // проверка что объект старого значения не пустой
          newValue.id !== oldValue.id && // проверка на идентичность идентификаторов
          !withObject(oldValue, list[index])
        ) {
          // проверка на то что запись была изменена и пытается выбраться другая запись в списке
          let confirm = await $showConfirm('confirm', {
            message: 'Имеются не сохраненные данные, выбрать другую запись?',
          }) // получение подтверждения \ отмены операции выбора элемента списка
          if (confirm) this.dataPage = cloneObject(list[selectIndex])
          // если бала нажата кнопка "да", то присваиваем данным формы из объекта списка
          else {
            clickElList(index) // выбора из списка элемента
            this.dataPage = oldValue // установка значения страны(прошлое значение )
          }
        }
      },
      deep: true,
    },
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
      padding-right: 7%;
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


