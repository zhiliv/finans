<template>
  <sub-form v-model="dataForm" is-modal="true" />
  <sub-control-new :on-create="onCreate" :data-form="inputData" :disabled-create="disabledCreate" />
</template>

<script>
import subForm from '~/pages/sub/sub_types_period.vue'
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
  data() {
    return {
      disabledCreate: true,
      dataForm: {},
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
      const { dataForm, inputData, $event } = this
      const obj = Object.assign(dataForm, inputData) // объединение объектов
      $event(`close-modal-${dataForm.formUuid}`, obj) // открытие модальной формы
    },
  },

  watch: {
    dataForm: {
      handler(newValue) {
        this.disabledCreate =
          newValue &&
          newValue.name &&
          newValue.padez &&
          newValue.mnozh &&
          (newValue.name || newValue.name.length < 2) &&
          (newValue.padez || newValue.padez.length < 2) &&
          (newValue.mnozh || newValue.mnozh.length < 2)
            ? false
            : true // установка минимальной длины поля "Наименование"
      },
      deep: true,
    },
  },
}
</script>
<style>
</style>