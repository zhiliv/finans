<!-- eslint-disable vue/valid-v-for -->
<template>
  <div class="absolute right-4 bottom-16 z-100">
    <app-toast-body
      v-for="item in list"
      :id="item.id"
      :key="item.id"
      :title="item.title"
      :message="item.message"
      :timer="item.timer"
      :type="item.type"
      :class="item.class"></app-toast-body>
  </div>
</template>

<script setup>
const list = ref([]) // Список уведомлений
const ind = ref(0) // Индекс уведомления

/*
 * Отслеживание события для отображения уведомлений
 */
emitter.on('show-toast', event => {
  if (event) {
    event.id = ind.value++
    list.value.push(event) // Добавление уведомления в список
  }
})

/*
 * Прослушивание события для удаления уведомления
 */
emitter.on('remove-toast', event => {
  const index = list.value.findIndex(el => el.id === event.id) // Получение индекса сообщения
  list.value.splice(index, 1) // Удаление элемента из массива
})
</script>
