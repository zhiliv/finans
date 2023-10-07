<template>
  <div class="p-2 flex flex-col md:flex-row w-full">
    <div class="w-full">
      <input type="file" accept="image/*" class="file-input file-input-bordered file-input-warning w-full file-input-sm max-md:ml-2 mt-1" label="Upload"
        @change="handleInputChange" />
      <img :class="{ 'border-2': selectedImageObjectUrl }" class="mt-2" :src="selectedImageObjectUrl" />
    </div>
  </div>
</template>
<script lang="ts" setup>
const emit = defineEmits(['file'])
/** 
* Данные формы
* @constant data
* @member {String} name - Наименование
*/
const data = ref({
  name: null,
  file: null
})
const selectedImageObjectUrl = ref<string>()

/** 
* При выборе файла
* @function handleInputChange
* @param {Obecjt} event - Данные события
*/
async function handleInputChange(event: Event) {
  data.value.file = event?.target?.files[0] // Получение данных файла
  selectedImageObjectUrl.value = URL.createObjectURL(data.value.file) // Отображение изображения  дял предпросмотра
  emit('file', data.value.file)
}
</script>
