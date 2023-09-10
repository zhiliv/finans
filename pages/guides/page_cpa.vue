<template>
  <div class="w-full h-[calc(100vh-28px-70px)] items-start lg:py-0 py-1 bg-stone-800">
    <div class="items-start h-full">
      <div class="grid grid-cols-12 h-full">
        <div class="lg:col-span-3 col-span-12 h-full mx-4 lg:mx-0">
          <app-listbox-items
            :list="list"
            class="border border-gray-400 bg-stone-700"
            v-model="valueModel"
            :loading="isLoadList"
            ref="listRefs"
            :select-index="selectIndex"
            :on-delete="onDeleteItem"
          />
        </div>
        <div class="lg:col-span-9 col-span-12 w-full">
          
        </div>
      </div>
    </div>
  </div>
  <app-control-buttons
    :disabled-save="controlsDisabled.save"
    :on-save="onSave"
    :on-cancel="onCancel"
    :on-new="onNew"
    :disabled-cancel="controlsDisabled.cancel"
  />
</template>

<script lang="ts" setup>
import { CPA } from '~/types/cpa'
import { Query } from '~/types/query'
import { Confirm } from '~/types/confirm'
import appSub from '~/pages/sub/sub_cpa.vue' // подключение саб формы
import appControlButtons from '~/pages/sub/control_edit.vue' // подключение саб формы с кнопка ми управления

const meta = { title: 'Партнерские программы' } // Установка мета данных страницы
useSeoMeta(meta) // Установка мета тегов

const listRefs = ref() // Ссылка на список
const valueModel = ref({ id: null, name: null, site: null }) // Данные формы
const selectIndex = ref(-1) // Индекс выбираемого элемента
const controlsDisabled = ref({ save: true, cancel: true }) // Активность кнопок "Сохранить" и "Отменить"
const { pending: isLoadList, data: list } = await useLazyAsyncData('list', () => $fetch('/api/cpa/all')) // Получение списка категорий
const refreshList = () => refreshNuxtData('list') // Обновление списка
refreshList() // Обновление списка

/* Отслеживание изменений данных формы */
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
 * Получение данных о валидности заполнения
 * @function getValid
 * @param {Boolean} valid - Получаемое значение валидации
 */
function getValid(valid: boolean) {
  controlsDisabled.value.save = controlsDisabled.value.save || !valid || !valueModel.value.id
}

/**
 * Удаление выделенного элемента
 * @function onDeleteItem
 */
async function onDeleteItem(item: CPA) {
  const confirmParam: Confirm = {
    message: 'Удалить запись?',
  } // Параметры сообщения подтверждения
  const confirm: Boolean | unknown = await dialogConfirm(confirmParam) // Отображение окна подтверждения
  if (confirm) {
    const paramsQuery: Query = { url: '/api/cpa/del', method: 'delete', body: valueModel.value.id }
    const response: any = await query(paramsQuery) // Отправка запроса на удаление
    if (response?.data?.value?.status == 200) {
      const index = list.value.findIndex((el: any) => el.id === valueModel.value.id) // получение индекса удаляемого элемента
      list.value.splice(index, 1) // Удаление элемента из списка
      showToast({ message: response.data.value.message, type: 'success' }) // Обработка результата
      selectIndex.value = list.value?.length ? 0 : -1 // Выделение первого элемента
    }
  }
}

/**
 * Отмена изменения данных
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
 * Сохранение данных
 * @function onSave
 */
async function onSave() {
  const confirmParam: Confirm = {
    message: 'Сохранить изменения?',
  } // Параметры сообщения подтверждения
  const confirm: Boolean | unknown = await dialogConfirm(confirmParam) // Отображение окна подтверждения
  if (confirm) {
    const index = list.value.findIndex((el: any) => el.id == valueModel.value.id) // получение идентификатора выделенного элемента
    const body = cloneObject(valueModel.value)
    body.name = capitalize(body.name)
    const paramsQuery: Query = { url: '/api/cpa/edit', method: 'post', body: valueModel.value }
    const response: any = await query(paramsQuery) // Отправка запроса на сохранение данных
    if (response?.data?.value?.status == 200) {
      list.value[index] = valueModel.value // Изменение объекта выделенного элемента в списка
      selectIndex.value = index
      showToast({ message: response.data.value.message, type: 'success' }) // Обработка результата
    }
  }
}

/**
 * Создание новой записи
 * @function onNew
 */
async function onNew() {
  const body: any = await showModal('modal_name', { modalTitle: 'Создание новой категории' })
  if (body) {
    body.name = capitalize(body.name)
    const paramsQuery: Query = { url: '/api/cpa/add', method: 'post', body } // параметры запроса
    const response: any = await query(paramsQuery) // Отправка запроса на сохранение данных
    if (response?.data?.value?.status == 200) {
      showToast({ message: response.data.value.message, type: 'success' }) // Отображение уведомления
      list.value.push(response.data.value.data) // Добавление записи в список
      const index = list.value.findIndex((el: any) => el.id === response.data.value.data.id) // Получение индекса элемента в списке
      selectIndex.value = index // Установка индекса элемента списку
    }
  }
}
</script>