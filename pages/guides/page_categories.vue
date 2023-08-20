<template>
  <div class="w-full h-full max-h-full">
    <div class="h-14">
      <app-control-record @on-new="onNew" modal-title-new="Создание новой категории" modal-width-new="30%" />
    </div>
    <div>
      <app-table :store="store" :columns="columns" @click="(data) =>  selectItem = data" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '~/stores/store'

const meta = { title: 'Категории' } // Установка мета данных страницы
useSeoMeta(meta) // Установка заголовка
const selectItem = ref() // Данные о выбранной записи

const store = useStore() // Создание нового стора
store.urlApi = '/api/categories'  // Установка ссылки для работы со стором

const columns = [
  {
    key: 'id',
    label: 'Идентификатор',
    width: '200px',
    textPosition: 'center',
    labelPosition: 'center',
    filter: 'number'
  },
  { key: 'name', label: 'Наименование', filter: 'text' },
  { key: 'description', label: 'описание', filter: 'text' },
]

function onNew(event:any){
  console.log('test', event)
}


/* onMounted(() => {
  list.value = store.list.value
})

async function applyFilter(params: any) {
  await store.setFilter(params)
  list.value = store.list.value
} */
</script>