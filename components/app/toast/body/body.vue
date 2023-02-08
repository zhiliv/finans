<template>
  <div class="alert alert-info m-2" @click="onClose">
    <div>
      <span>{{title}} {{message}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    /* Идентификатор уведомления */
    id: {
      type: Number,
      default: 0,
    },
    /* Заголовок */
    title: {
      type: String,
      default: '',
    },
    /* Текст сообщения */
    message: {
      type: String,
      default: '',
    },
    /* Время через которое будет удалено сообщение */
    timer: {
      type: [String, Number],
      default: 5000,
    },
  },
  mounted() {
    const { timer, onClose } = this
    /* Установка интервала, через которое удаляется сообщение */
    setTimeout(() => onClose(), timer)
  },
  methods: {
    /*
     * При нажатии кнопки "Закрыть"
     * @function onClose
     */
    onClose() {
      const { $parent } = this
      const index = $parent.listToast.findIndex(el => el.id === this.id) // поиск индекса уведомления
      this.$parent.listToast.splice(index, 1) // удаление из списка
    },
  },
}
</script>