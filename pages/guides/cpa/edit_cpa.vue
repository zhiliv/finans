<template>
  <app-spinner v-if="!isLoad" class="w-full" />
  <div class="p-2  overflow-y-auto">
    <app-input v-model="data.name" class="standart w-full input" label="Наименование" :is-valid="isValid.name" />
    <app-input v-model="data.site" class="standart w-full input" label="Наименование" :is-valid="isValid.site" />
  </div>
</template>

<script lang="ts" setup>
import { useCPAStore } from '~/stores/cpa-store'
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
* Модель данных для формы
* @interface Data
*/
interface Data{
  name: String | null
  id: number | null
  site: string
}

/** 
* Данные формы
* @member {String} name - Наименование
* @member {String} description - Описание
*/
const data = ref({
  name: null,
  id: null,
  site: null
}) // Данные формы

/** 
* Данные валидации
* @member {Boolean} name - Валидация наименования
* @member {Boolean} description - Валидация описания
*/
const isValid = ref({
  name: false,
  site: false,
  result: false
})

const isLoad = ref(false) // Статус загрузки данных
const store = useCPAStore() // Создание нового стора
const id = ref(props.modelValue.id) // Идентификатор записи

onMounted(async () => {
  const response = await store.getRecord(id.value)
  isLoad.value = true
  data.value.id = id
  data.value.name = response.value.name
  data.value.site = response.value.site
})


/**
* Наблюдатель для установки валидации
*/
watch(data.value, (newVal: Data) => {
  isValid.value.name = !!(newVal.name && newVal.name.length && newVal.name.length > 3) // Установка валидации для поля "Наименование"
  isValid.value.site = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(newVal.site)
  isValid.value.result = getValidForm(isValid.value)
  emit('valid', {save: !isValid.value.result})
  emit('data', data.value)
})

</script>~/stores/default