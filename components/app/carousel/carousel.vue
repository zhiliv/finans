<template>
  <div class="flex justify-start border-b mt-3">
    <span class="pl-2">Изображения</span>
  </div>
  <div class="carousel w-full min-h-[180px] h-[180px] mt-2  pb-2">
    <h4 v-if="!list.length" class="text-center w-full justify-center pt-16">Изображения отсутствуют</h4>
    <div :id="geIdImage(index)" class="carousel-item w-full flex justify-center" v-for="(image, index) in list" :key="index">
      <nuxt-img :src="setUrlImg(image.path)" />
    </div>
  </div>
  <div class="flex justify-center w-full py-2 gap-2 relative border-b mb-4">
    <a v-for="(item, index) in list" :href="getIdLink(index)" :key="index" class="btn btn-xs">{{ index + 1 }}</a>
    <app-button class="btn-xs btn-primary  justify-center absolute right-6" @click="upload">Добавить</app-button>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['upload'])

/** 
* @interface Props
* @member {Array} images - Список изображений
* @member {Function} download
*/
interface Props {
  images?: image[] | any
}

/** 
* @type image
* @member {Number} id - Идентификатор
* @member {String} url - Адрес изображения 
*/
type image = {
  id: number;
  url: String
}

const props = withDefaults(defineProps<Props>(), {
  images: []
})

const list = computed(() => props.images)

/** 
* Отправка события о загрузке файла
* @function upload
*/
async function upload() {
  const body: any = await showModal('upload_image', { options: { title: 'Загрузка изображения', width: '20%', isDrawer: true, buttons: { save: true, cancel: true } } }) // Получение ответа из модального окна
  if(body?.name) {
    body.name = capitalize(body.name)
    emit('upload', body)
  }
}

/** 
* Установка ссылки на изображение
* @function setUrlImg
* @param {String} path - Путь к изображению
*/
const setUrlImg = (path: string) => `/${path}`

/**
* Установка идентификатора изображения
* @function geIdImage
* @param {Number} index - Порядковый номер
*/
const geIdImage = (index: number) => `image_${index + 1}`


/** 
* Получение идентификатора элемента ссылки для перехода по изображения
* @function getIdLink
* @param {Number} index - Порядковый номер
*/
const getIdLink = (index: number) => `#image_${index + 1}`

</script>