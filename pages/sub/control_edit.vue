<template>
  <div class="items-end lg:h-[50px] h-[200px]">
    <div
      class="flex flex-col lg:flex-row justify-between items-center px-3 bg-zinc-700 "
    >
      <app-button
        class="md:w-40 w-full btn-warning my-2 mx-2 hover:bg-amber-700 btn-sm"
        @click="onNew"
      >Новый</app-button>
      <div class="w-full lg:w-auto">
        <app-button
          class="btn md:w-40 w-full btn-error lg:mx-2 my-2 lg:m-0 hover:bg-red-700 btn-sm"
          :class="{'btn-disabled': disabledCancel}"
          @click="onCancel"
        >Отменить</app-button>
        <app-button
          class="'btn md:w-40 w-full btn-success lg:mx-2 my-2 lg:m-0 hover:bg-green-700 btn-sm"
          :class="{'btn-disabled': disabledSave}"
          @click="saveItem"
        >Сохранить</app-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Confirm } from '~/types/confirm'
import { Query } from '~/types/query'

/**
 * @interface Props
 * @member {Function} onSave - Функция сохранения данных
 * @member {Function} onCancel - Функция отмены
 * @member {Function} onNew - Функция создания записи
 * @member {Boolean} disabledNew - Активность кнопки "Новый"
 * @member {Boolean} disabledCancel - Активность кнопки "Отменить"
 * @member {Boolean} disabledSave - Активность кнопки "Сохранить"
 */
interface Props {
  onSave?: any
  onCancel?: any
  onNew?: any
  disabledNew?: boolean
  disabledCancel?: boolean
  disabledSave?: boolean
  data: any
}

const props = withDefaults(defineProps<Props>(), {
  onSave: () => ({}),
  onCancel: () => ({}),
  onNew: () => ({}),
  data: {},
})

const emit = defineEmits(['save'])

/**
 ** Сохранить данные записи
 * @function saveItem
 */
async function saveItem() {
  const confirmParam: Confirm = {
    message: 'Сохранить изменения?',
  } // Параметры сообщения подтверждения
  const confirm: Boolean | unknown = await dialogConfirm(confirmParam) // Отображение окна подтверждения
  if (confirm) {
    const paramsQuery: Query = { url: '/api/categories/edit', method: 'post', body: props.data }
    const result: any = await query(paramsQuery) // Отправка запроса на удаление
    showToast({ message: result.data.value.message, type: 'success' }) // Обработка результата
    emit('save', result)
  }
}
</script>