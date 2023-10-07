<template>
  <div class="col-span-12 mx-4">
    <app-input v-model.trim="data.name" class="standart input-bordered w-full input" :is-valid="isValid.name" label="Наименование" />
    <app-img-upload @file="onFile"  />
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['valid', 'data'])
/** 
* Данные формы
* @constant data
* @member {String} name - Наименование
*/
const data = ref({
  name: '',
  filename: null,
  dataFile: null
})

/** 
* Данные валидации
* @member {Boolean} name - Валидация наименования
* @member {Boolean} filename - Имя файла
* @member {Boolean} dataFile - Данные файла
* @member {Boolean} result - Результат валидации формы
*/
const isValid = ref({
  name: false,
  filename: false,
  dataFile: false, 
  result: false
})

emit('valid', { save: !isValid.value.result })


/**
* Получение данных о файле
* @function readFileAsync
* @param {Object} file - Данные о файле
*/
const readFileAsync:any = (file: File) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader()
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

/** 
* Событие при выборе файла
* @function onFile
*/
async function onFile(file:any){
  data.value.filename = file.name
  data.value.dataFile = await readFileAsync(file)
}

/**
* Наблюдатель для установки валидации
*/
watch(data.value, (newVal) => {
  isValid.value.name = Boolean(newVal.name && newVal.name.length && newVal.name.length > 3) // Установка валидации для поля "Наименование"
  isValid.value.filename = !!data.value.filename
  isValid.value.dataFile = !!data.value.dataFile
  isValid.value.result = getValidForm(isValid.value)
  emit('valid', { save: !isValid.value.result })
  emit('data', data.value)
})


</script>