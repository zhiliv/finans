<template>
  <div class="w-full h-[100%] md:h-[85%]">
    <app-table :store="store" :columns="columns"  />
  </div>
</template>

<script lang="ts" setup>
const meta = { title: 'Категории' } // Установка мета данных страницы
useSeoMeta(meta) // Установка заголовка
import { useCategoryStore } from '~/stores/categoryStore'


const store = useCategoryStore()
/* store.offset = 0
store.limit = 5 */
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


/* onMounted(() => {
  list.value = store.list.value
})

async function applyFilter(params: any) {
  await store.setFilter(params)
  list.value = store.list.value
} */
</script>