<template>
  <div class="p-2">
    <app-input v-model="data.name" class="input-standart input-bordered w-full input" label="Наименование"/>
    <textarea name="" id="" cols="30" rows="10"></textarea>
  </div>
</template>

<script lang="ts" setup>
  import { useStore } from '~/stores/store'
  const data = ref({
    name: null
  }) // Данные формы
  
  const store = useStore() // Создание нового стора
  store.urlApi = '/api/categories'  // Установка ссылки для работы со стором
  
</script>