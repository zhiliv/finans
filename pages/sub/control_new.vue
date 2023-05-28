<!-- Сабформа для создания новго элемента
Содержит кнопки: "Отменить" и Создать
-->
<template>
  <div class="p-3 flex flex-col lg:flex-row justify-between items-center h-full">
    <app-button class="w-full lg:btn-wide btn-error mx-2" @click="onCancel">Отмена</app-button>
    <app-button
      :class="{'btn-disabled': disabledCreate}"
      class="w-full lg:btn-wide btn-success m-2"
      @click="onCreate"
    >Создать</app-button>
  </div>
</template>

<script lang="ts" setup>
/**
 * @interface Props
 * @member {Function} onCreate - Функция создания записи
 * @member {Object} dataForm - Данные формы
 * @member {Boolean} disabledCreate - Активность кнопки "Создать"
 */
interface Props {
  onCreate: any
  dataForm: any
  disabledCreate: boolean
}

const props = withDefaults(defineProps<Props>(), {
  dataForm: {},
})

/**
 * События нажатия кнопки "Отмена"
 * @function onCancel
 */
function onCancel() {
  emitter.emit(`destroy-modal-${props.dataForm.formUuid}`) // отправка события для для закрытия формы
}
</script>
