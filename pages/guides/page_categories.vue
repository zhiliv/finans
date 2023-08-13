<template>
  <div class="w-full h-full max-h-full" style="max-height: 99%;">
    <div class="h-14">
      <control-record />
    </div>
    <div>
      <app-table :store="store" :columns="columns" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const meta = { title: 'Категории' } // Установка мета данных страницы
useSeoMeta(meta) // Установка заголовка
import { useCategoryStore } from '~/stores/categoryStore'


const store = useCategoryStore()

const columns = [
  {
    key: 'id',
    label: 'Идентификатор',
    width: '200px',
    textPosition: 'center',
    labelPosition: 'center',
    filter: 'text',
  },
  { key: 'name', label: 'Наименование', filter: 'text' },
  { key: 'description', label: 'описание', filter: 'text' },
]

onMounted(() => {
  const preTable = ref()
  console.log('🚀 -> onMounted -> preTable:', preTable)
})


/* onMounted(() => {
  list.value = store.list.value
})

async function applyFilter(params: any) {
  await store.setFilter(params)
  list.value = store.list.value
} */
</script>