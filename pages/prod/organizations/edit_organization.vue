<template>
  <app-spinner v-if="!isLoad" class="w-full" />
  <app-input v-model="data.name" class="standart w-full input" label="Наименование" :is-valid="isValid.name" />
  <app-carousel @upload="upload" :images="data.images" />
  <app-textarea v-model="data.short_description" label="Короткое описание" class="h-[80px]" />
  <app-textarea v-model="data.description" label="Короткое описание" class="h-[300px]" />
</template>

<script lang="ts" setup>
import { useOrganizationsStore } from '~/stores/organizations-store'
const emit = defineEmits(['valid', 'data'])

/** 
* @interface Props
* @member {Object} modelValue - Данные формы
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
interface Data {
  name: String | null
  description: String | null
  short_description: String | null
  id: number | null
}

/** 
* Данные формы
* @member {String} name - Наименование
* @member {String} description - Описание
*/
const data = ref({
  name: null,
  description: null,
  short_description: null,
  id: null,
  images: []
}) // Данные формы

/** 
* Данные валидации
* @member {Boolean} name - Валидация наименования
* @member {Boolean} description - Валидация описания
*/
const isValid = ref({
  name: false,
  result: false
})

const isLoad = ref(false) // Статус загрузки данных
const store = useOrganizationsStore() // Создание нового стора
const id = ref(props.modelValue.id) // Идентификатор записи

onMounted(async () => {
  const response = await store.getRecord(id.value)
  isLoad.value = true
  data.value.id = id
  data.value.name = response.value.name
  data.value.short_description = response.value.short_description
  data.value.description = response.value.description
  data.value.images = response.value.images
})


/**
* Наблюдатель для установки валидации
*/
watch(data.value, (newVal: Data) => {
  isValid.value.name = !!(newVal.name && newVal.name.length && newVal.name.length > 3) // Установка валидации для поля "Наименование"
  /* Установка валидации для поля "Описание" */
  
  isValid.value.result = getValidForm(isValid.value)
  emit('valid', { save: !isValid.value.result })
  emit('data', data.value)
})

/** 
* Загрузка изображения
* @function upload
* @param {Object}  data - Данные о загружаемом файле
*/
async function upload(dataUpload: any) {
  /* dataUpload.id_org = data.value.id  // Установка идентификатора организации
  await store.uploadImage(dataUpload) */
}

</script>