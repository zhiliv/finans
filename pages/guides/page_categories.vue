<template>
  <div class="w-full h-full items-start lg:py-0 py-1 bg-stone-800">
    <div class="items-start h-full">
      <div class="grid grid-cols-12 h-full">
        <div class="lg:col-span-3 col-span-12 mx-4 lg:mx-0 h-[calc(100%-50px)]">
          <app-listbox-items
            :list="list"
            class="border border-gray-400 bg-stone-700"
            v-model="valueModel"
            :loading="isLoad"
            @delete="onDeleteItem"
            :select-index="selectIndex"
            :url-name="listApi.categories.url"
          />
          <div class="w-full flex justify-end px-2">
            <app-button class="mt-2 btn-info btn-sm" @click="getLisLeads">Получение с Leads.su</app-button>
          </div>
        </div>
        <div class="lg:col-span-9 col-span-12 w-full">
          <div class="grid grid-cols-12">
            <app-sub-name @is-valid="getValid" v-model="valueModel" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <app-control-buttons
    :disabled-save="controlsDisabled.save"
    @save="onSave"
    :on-cancel="onCancel"
    :on-new="onNew"
    :disabled-cancel="controlsDisabled.cancel"
    :data="valueModel"
    :url="listApi.categories.url"
    :new-item-data="newItemData"
  />
</template>

<script lang="ts" setup>
import { appSubName, appControlButtons } from '~/pages/sub' // подключение саб формы
import { Confirm } from '~/types/confirm'
import { useCategoryStore } from '~/stores/categoryStore'
import { listApi } from '~/server/api/list'
const meta = { title: 'Категории' } // Установка мета данных страницы
useSeoMeta(meta) // Установка заголовка
const selectIndex = ref(-1) // Индекс выбираемого элемента
const store = useCategoryStore()
const isLoad = ref(true) // Статус загрузки страницы
await store.getAll() // Получение всех категорий
const list = ref(store.list) // установка списка для отображения
const valueModel = ref({ id: null }) // Данные формы
const controlsDisabled = ref({ save: true, cancel: true }) // Активность кнопок "Сохранить" и "Отменить"
const newItemData = ref() // Данные новой записи

/**
 ** Обновление списка
 * @function updateList
 */
async function updateList() {
  await store.getAll()
  list.value = store.list // Установка значения списка
}

onBeforeMount(async () => {
  await updateList()
  isLoad.value = store.loading // Установка статуса загрузки списка
})

/**
 ** При нажатии на кнопку "Получить с Leads.su"
 * @function getLisLeads
 */
async function getLisLeads() {
  isLoad.value = true
  await useCategoryStore().getCategoryLeads() // Получение всех категорий
  await updateList()
  isLoad.value = false
}

/**
 ** Отслеживание изменений данных формы
 */
watch(
  valueModel,
  newVal => {
    if (!checkEmptyObject(newVal)) {
      const index = list.value.findIndex((el: any) => el.id === valueModel.value.id) // Получение индекса выделенного элемента
      const obj = cloneObject(list.value[index]) // клонирование объекта
      delete obj.isActive // удаление свойства isActive
      controlsDisabled.value.save = withObject(valueModel.value, obj) // установка доступности кнопки "Сохранить"
      controlsDisabled.value.cancel = withObject(valueModel.value, obj) // установка доступности кнопки "Отменить"
    } else {
      controlsDisabled.value.save = true
    }
  },
  { deep: true },
)

/**
 ** Удаление выделенного элемента
 * @function onDeleteItem
 * @param {Object} item - Данные строки
 */
async function onDeleteItem(status: boolean) {
  if (status) {
    await updateList()
    selectIndex.value = list.value?.length ? 0 : -1 // Выделение первого элемента
  }
}

/**
 ** Получение данных о валидности заполнения
 * @function getValid
 * @param {Boolean} valid - Получаемое значение валидации
 */
function getValid(valid: boolean) {
  controlsDisabled.value.save = controlsDisabled.value.save || !valid || !valueModel.value.id
}

/**
 ** Отмена изменения данных
 * @function onCancel
 */
async function onCancel() {
  const confirmParam: Confirm = {
    message: 'Есть не сохраненные данные, отменить изменения?',
  } // Параметры сообщения подтверждения
  const confirm: Boolean | unknown = await dialogConfirm(confirmParam) // Отображение окна подтверждения
  if (confirm) {
    const index = list.value.findIndex((el: any) => el.id === valueModel.value.id) // получение индекса элемента в списке
    const item = cloneObject(list.value[index]) // клонирование элемента в объектную модель
    valueModel.value = item // установка значения данных модели
  }
}

/**
 ** Сохранение данных
 * @function onSave
 */
async function onSave() {
  const index = list.value.findIndex((el: any) => el.id == valueModel.value.id) // получение идентификатора выделенного элемента
  await updateList() // Обновление списка
  selectIndex.value = index // Выделение элемента редактирования
}

/**
 ** Создание новой записи
 * @function onNew
 */
async function onNew() {
  const id = await newRecord('Создание новой категории', '/api/categories/add') // Получение идентификатора новой записи
  await updateList() // Обновление списка
  selectIndex.value = list.value.findIndex((el: any) => el.id === id) // Выделение элемента
}
</script>