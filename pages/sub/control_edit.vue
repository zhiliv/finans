<template>
  <div class="items-end lg:h-[70px] h-[210px]">
    <div
      class="flex flex-col lg:flex-row justify-between items-center py-2 px-3 bg-zinc-700 h-full"
    >
      <app-button
        class="w-full lg:btn-wide btn-warning my-2 mx-2 hover:bg-amber-700"
        @click="onNew"
      >Новый</app-button>
      <div class="w-full lg:w-auto">
        <app-button
          class="btn w-full lg:btn-wide btn-error lg:mx-2 my-2 lg:m-0 hover:bg-red-700"
          :class="{'btn-disabled': disabledCancel}"
          @click="onCancel"
        >Отменить</app-button>
        <app-button
          class="'btn w-full lg:btn-wide btn-success lg:mx-2 my-2 lg:m-0 hover:bg-green-700"
          :class="{'btn-disabled': disabledSave}"
          @click="onSave"
        >Сохранить</app-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    /* Метод для кнопки "Сохранить" */
    onSave: {
      type: Function,
      default: () => ({}),
    },
    /* Метод для кнопки "Отменить" */
    onCancel: {
      type: Function,
      default: () => ({}),
    },
    /* Метод для кнопки "Новый" */
    onNew: {
      type: Function,
      default: () => ({}),
    },
    /* Свойство активности для кнопки "Новый" */
    disabledNew: {
      type: [Boolean, String],
      default: true,
      validator(value) {
        return value === 'true' || value === 'false' || value === true || value === false
      },
    },
    /* Свойство активности для кнопки "Отменить" */
    disabledCancel: {
      type: [Boolean, String],
      default: true,
      validator(value) {
        return value === 'true' || value === 'false' || value === true || value === false
      },
    },
    /* Свойство активности для кнопки "Сохранить" */
    disabledSave: {
      type: [Boolean, String],
      default: true,
      validator(value) {
        return value === 'true' || value === 'false' || value === true || value === false
      },
    },
  },
}
</script>