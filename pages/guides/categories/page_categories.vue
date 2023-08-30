<template>
  <div class="w-full h-full max-h-full">
    <div class="h-14">
      <app-control-record @on-new="onNew" modal-title-new="Создание новой категории" modal-width-new="30%" :select-item="!selectItem"  @on-edit="onEdit"/>
    </div>
    <div >
      <app-table ref="table" :store="store" :columns="columns" @click="(data) => selectItem = data" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '~/stores/store'

const meta = { title: 'Категории' } // Установка мета данных страницы
useSeoMeta(meta) // Установка заголовка
const selectItem = ref() // Данные о выбранной записи
const table = ref() // Ссылка на элемент таблицы

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
  { key: 'description', label: 'Описание', filter: 'text' },
]

/**  
* Добавление новой категории
* @function onNew
* @param {Object} data - Данные для добавления
*/
async function onNew(data: any) {
  const result: any = await store.addNewRecord(data)
  if(result?.data?.value?.data) {
    showToast({ message: 'Запись успешно добавлена', type: 'success' }) // Отображение сообщения об успешном добавлении
    table.value.columns[0].filterValue = result.data.value.data.id // Установка значения для идентификатора
    table.value.applyFilter('id', result.data.value.data.id, '=') // Применение фильтра
    table.value.table.querySelector('tbody > tr').click()
  }
}

/** 
* @function onEdit
*/
async function onEdit(){
  console.log('selectItem', selectItem.value)
}
</script>