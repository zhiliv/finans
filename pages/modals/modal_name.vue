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
 */
interface Props {
  inputData: any
}

const props = withDefaults(defineProps<Props>(), {
  inputData: {},
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