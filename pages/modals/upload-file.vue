<template>
  <div class="grid grid-cols-12 min-h-full">
    <div class="col-span-12 flex justify-center">
      <vue-dropzone
        id="dropzone"
        :options="dropzoneOptions"
        v-on:vdropzone-sending="sendingEvent"
        @vdropzone-error="uploadError"
        @vdropzone-success="onSuccess"
      />
    </div>
  </div>
  <div class="flex justify-center p-2 flex-col xl:flex-row">
    <app-button class="btn-error w-full xl:w-[120px]" @click="onCancel" v-show="!file">Отмена</app-button>
    <app-button
      v-show="file"
      :class="{'btn-disabled': disabledLoad}"
      class="btn-success my-2 xl:my-0 w-full xl:w-[120px]"
      @click="onClose"
    >Загрузить</app-button>
  </div>
</template>

<script>
import vueDropzone from 'vue2-dropzone-vue3'
export default {
  components: {
    vueDropzone,
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
      disabledLoad: true,
      file: null, // загружаемый файл
      dropzoneOptions: {
        url: `/api/${this.inputData.path}`,
        maxFilesize: 10,
        dictFileTooBig:
          'Допустимый размер файла: {{maxFilesize}} MB текущий файл имеет размер \n(size: {{filesize}} MB)',
        dictDefaultMessage: 'Выберите файл за загрузки',
      },
    }
  },

  methods: {
    /*
     * Закрытие формы и передача данных о файле в родительскую форму
     * @function onClose
     */
    onClose() {
      const { $event, inputData, file } = this
      $event(`close-modal-${inputData.formUuid}`, file) // открытие модальной формы
    },

    /*
     * При успешном добавлении
     * @function onSuccess
     */
    onSuccess(file, response) {
      this.file = file
    },

    /*
     * Добавление свойства имени файла
     * @function  sendingEvent
     */
    sendingEvent(file, xhr, formData) {
      formData.append('name', file.name)
    },

    /*
     * При ошибке отображать сообщение
     * @function uploadError
     */
    uploadError(file, message, xhr) {
      if (message instanceof Object) {
        file.previewElement.querySelectorAll('.dz-error-message span')[0].textContent = message.message
      }
    },
    /*
     * События нажатия кнопки "Отмена"
     */
    onCancel() {
      const { inputData } = this
      this.$event(`destroy-modal-${inputData.formUuid}`) // отправка события для для закрытия формы
    },
  },

  watch: {
    /*
     * Отслеживание изменения данных файла
     * Установка активности кнопки "Загрузить"
     */
    file: {
      handler(newValue) {
        this.disabledLoad = newValue && newValue.name ? false : true
      },
      deep: true,
    },
  },
}
</script>