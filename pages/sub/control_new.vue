<!-- Сабформа для создания новго элемента
Содержит кнопки: "Отменить" и Создать
-->
<template>
  <div class="p-3 flex flex-col lg:flex-row justify-between items-center ">
    <app-button class="btn-sm w-full lg:btn-wide btn-error mx-1 h-38p" @click="onCancel">Отмена</app-button>
    <app-button class="btn-sm w-full lg:btn-wide btn-success mx-1 my-2 h-38p" :class="{ 'btn-disabled': disabledCreate }" @click="onCreate">Создать</app-button>
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

<style>
.h-38p {
  height: 38px
}
</style>
