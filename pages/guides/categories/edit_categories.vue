<template>
  <div class="p-2  overflow-y-auto">
    <app-input v-model="data.name" class="standart input-bordered w-full input" label="Наименование" :is-valid="isValid.name" />
    <app-textarea v-model="data.description" label="Описание" style="height: 550px" :is-valid="isValid.description"></app-textarea>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '~/stores/store'
const emit = defineEmits(['valid', 'data'])

/** 
* @interface Props
* @member {Function} modelValue - Данные формы
*/
interface Props {
  modelValue?: any
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
})


/** 
* Данные формы
* @member {String} name - Наименование
* @member {String} description - Описание
*/
const data = ref({
  name: null,
  description: null,
  id: null,
}) // Данные формы

/** 
* Данные валидации
* @member {Boolean} name - Валидация наименования
* @member {Boolean} description - Валидация описания
*/
const isValid = ref({
  name: false,
  description: null,
  result: false
})


const store = useStore() // Создание нового стора
store.urlApi = '/api/categories'  // Установка ссылки для работы со стором


onMounted(async () => {
  const id = props.modelValue.id // Идентификатор записи
  const response = await store.getRecord(id)
  data.value.id = id
  data.value.name = response.data.value.name
  data.value.description = response.data.value.description
})


/**
* Наблюдатель для установки валидации
*/
watch(data.value, (newVal) => {
  isValid.value.name = newVal.name && newVal.name.length && newVal.name.length > 3 // Установка валидации для поля "Наименование"
  /* Установка валидации для поля "Описание" */
  if(newVal.description) {
    if(newVal.description.length > 3) isValid.value.description = true
    else isValid.value.description = false
  }
  else isValid.value.description = null
  isValid.value.result = getValidForm(isValid.value)
  emit('valid', {save: !isValid.value.result})
  emit('data', data.value)
})

</script>