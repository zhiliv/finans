<template>
  <div class="w-full h-full max-h-full">
    <div>
      <app-control-record ref="control" @on-new="onNew" modal-title-new="Создание нового типа документа" modal-title-edit="Редактирование типа документа"
        modal-width-new="30%" :select-item="selectItem" @on-edit="onEdit" @on-delete="onDelete" :uniq="true" name-edit-form="edit_type_docs" />
    </div>
    <div class="min-h-full">
      <app-table ref="table" :store="store" :columns="columns" @click="(data) => selectItem = data" @dblclick="onDblEdit" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '~/stores/type-docs-store'

const meta = { title: 'Категории' } // Установка мета данных страницы
useSeoMeta(meta) // Установка заголовка
const selectItem = ref() // Данные о выбранной записи
const table = ref() // Ссылка на элемент таблицы
const control = ref() // Ссылка на кнопки управления
const store = useStore() // Создание нового стора

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
  data.uniq = true // Установка признака уникальности наименования
  const result: any = await store.addNewRecord(data)
  if(result?.data?.value) {
    showToast({ message: result?.data?.value?.message, type: result?.data?.value?.typeMessage }) // Отображение сообщения об успешном добавлении
    table.value.columns[0].filterValue = result.data.value.data.id // Установка значения для идентификатора
    table.value.applyFilter('id', result.data.value.data.id, '=') // Применение фильтра
    table.value.table.querySelector('tbody > tr').click()
  }
}

/** 
* @function onEdit
*/
async function onEdit(data: any) {
  console.log('🚀 -> onEdit -> data:', data)
  const result: any = await store.editRecord(data)
  if(result?.data?.value?.data)
    showToast({ message: result?.data?.value?.message, type: result?.data?.value?.typeMessage }) // Отображение сообщения об успешном обновлении записи
}

/** 
* @function onDelete
*/
async function onDelete() {
  const result: any = await store.deleteRecord({id: selectItem.value.id, _url:  '/type-docs' })
  if(result?.data?.value?.data)
    showToast({ message: result?.data?.value?.message, type: result?.data?.value?.typeMessage }) // Отображение сообщения об успешном удалении записи
}


function onDblEdit(data: any) {
  control.value.onEdit(data)
}
</script>