<!-- eslint-disable vue/valid-v-for -->
<template>
  <div class="absolute right-4 bottom-4">
    <app-toast-body
      v-for="item in listToast"
      :id="item.id"
      :key="item.id"
      :title="item.title"
      :message="item.message"
      :timer="item.timer"
      :class="item.class"
    ></app-toast-body>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listToast: [], // список уведомлений
    }
  },
  beforeMount() {
    let ind = 0
    const { $listen } = this
    $listen('show-toast', params => {
      if (params) {
        params.id = ind++ // установка идентификатора
        this.listToast.push(params) // добавление уведомления в массив
      }
    })
  },
}
</script>