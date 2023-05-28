<template>
  <div class="col-span-12 mx-4">
    <app-input
      v-model.trim="modelValue.name"
      class="input-bordered w-full"
      :is-valid="isValid.name"
      label="Наименование"
    />
  </div>
</template>

<script lang="ts" setup>
/**
 * @interface Props
 * Модель входных параметров
 * @member {Object} modelValue - Модель формы
 */
interface Props {
  modelValue: any
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: { name: null },
})

const isValid = ref({ name: false }) // Значение валидации

const emit = defineEmits(['update:modelValue', 'is-valid']) // События

/* Отслеживание изменения модели формы */
watch(
  () => props.modelValue,
  newVal => {
    emit('update:modelValue', newVal) // Отправка события с текущим значением
    isValid.value.name =
      !newVal.name || newVal.name === '' || newVal.name.length < 3 || !newVal.name.length || isNumber(newVal.name)
        ? false
        : true // Получение валидации поля "Наименование"
    emit('is-valid', isValid.value.name) // Отправка события со значением валидности
  },
  { deep: true },
)
</script>