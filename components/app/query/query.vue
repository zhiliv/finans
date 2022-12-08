<!-- eslint-disable vue/valid-template-root -->
<template></template>
<script>
export default {
  props: {
    type: {
      // тип HTTP запроса
      type: String,
      required: true,
      default: 'post',
      validator(value) {
        return value === 'post' || value === 'get' || value === 'put' || value === 'delete'
      },
    },
    url: {
      // адрес ссылки
      type: String,
      default: '',
      required: true,
    },
    messageSuccess: {
      // текст сообщения при успешной операции
      type: String,
      default: null,
    },
    titleSuccess: {
      // заголовок сообщения при успешной операции
      type: String,
      default: null,
    },
    typeMessage: {
      // тип сообщения
      type: String,
      default: '',
      validator(value) {
        return (
          value === '' ||
          value === 'primary' ||
          value === 'secondary' ||
          value === 'success' ||
          value === 'info' ||
          value === 'warning' ||
          value === 'danger' ||
          value === 'dark' ||
          value === 'light'
        )
      },
    },
    showMessage: {
      // показывать сообщения
      type: [Boolean, String],
      default: false,
      validator(value) {
        return value === false || value === true || value === 'false' || value === 'true'
      },
    },
  },
  data() {
    return {
      isLoad: false,
    }
  },
  mounted() {
    this.$emit('is-load', false)
  },
  methods: {
    /*
     * Выполнение HTTP запроса
     * @function execute
     * @params  {Object} params - Параметры
     * @params {String} url данные передаваемые в ссылке
     */
    async execute(params, urlParams) {
      const { type, url, messageSuccess, titleSuccess, typeMessage, showMessage } = this
      const readyUrl = urlParams ? `${url}/${urlParams}` : url
      const response = await this.$axios[type](readyUrl, params).catch(err => {
        console.error(err)
        this.$nuxt.$emit('show-toast', { params: { title: err.title, message: err.message, type: 'danger' } }) // отправка события для отображения уведомления
      })
      if (response && response.data) this.$emit('result', response.data)
      if (response && response.status === 200 && showMessage)
        this.$nuxt.$emit('show-toast', {
          params: {
            title: titleSuccess || response.data.title,
            message: messageSuccess || response.data.message,
            type: typeMessage || response.data.typeMessage,
          },
        }) // отправка события для отображения уведомления
      this.$emit('is-load', true)
      return response
    },
  },
}
</script>

<style>
</style>