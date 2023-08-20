<template>
  <sub-form v-model="dataForm" is-modal="true" />
  <sub-control-new :on-create="onCreate" :data-form="inputData" :disabled-create="disabledCreate" />
</template>

<script lang="ts" setup>
import subForm from '~/pages/sub/sub_name.vue'
import subControlNew from '~/pages/sub/control_new.vue'

/**
 * @interface Props
 * @member {Object} inputData - Входные данные
 * @member {String} title - Заголовок формы1
 * @member {String} formUuid - Уникальный идентификатор формы
 * @member {String} form - Адрес\Имя формы
 * @member {String} name - Имя формы
 * @member {String} width - Ширина формы
 */
interface Props {
  inputData: any
  title: string
  formUuid: string
  form: any
  name?: any
  width?: string
}

const props = withDefaults(defineProps<Props>(), {
  inputData: {},
  title: '',
  formUuid: '',
  form: null,
  name: null,
  width: ''
})

const disabledCreate = ref(true) // Активность кнопки "Создать"
const dataForm: any = ref() // Данные формы
dataForm.value = props.inputData // Присвоение входных данных данным формы

/* Отслеживание данных формы */
watch(
  dataForm,
  newVal => {
    disabledCreate.value = newVal?.name?.length < 3
  },
  { deep: true },
)

/**
 * Сохранение данных
 * @function onCreate
 */
function onCreate() {
  const obj = Object.assign(dataForm.value, props.inputData)
  emitter.emit(`close-modal-${dataForm.value.formUuid}`, obj) // Закрытие модального окна и передача параметров
}
</script>