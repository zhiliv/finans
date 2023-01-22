<template>
  <sub-form v-model="dataForm" is-modal="true" />
  <sub-control-new :on-create="onCreate" :data-form="inputData" />
</template>

<script>
import subForm from '~/pages/sub/sub_form_type_docs.vue'
import subControlNew from '~/pages/sub/control_new.vue'
export default {
  components: {
    'sub-form': subForm, // форма тела модального окна
    'sub-control-new': subControlNew, // саф форма с действиями формы
  },
  inheritAttrs: false, // отключение наследования аттрибутов

  props: {
    /* Входные данные формы */
    inputData: {
      // входные данные
      type: Object,
      default: {},
    },
  },

  setup() {
    /* Инициализация отслеживаемого объекта  данных формы */
    const dataForm = reactive({
      name: null, // значение поля "Наименование"
    }) // данные формы
    return {
      dataForm,
    }
  },

  mounted() {
    const { inputData } = this
    this.dataForm = inputData // присвоение данным формы значения входных параметров
  },

  methods: {
    /*
     * Сохранение данных
     * @function onCreate
     */
    async onCreate() {
      const { dataForm, inputData } = this
      const obj = Object.assign(dataForm, inputData) // объединение объектов
      this.$event(`close-modal-${dataForm.formUuid}`, obj) // открытие модальной формы
    },
  },
}
</script>
<style>
</style>