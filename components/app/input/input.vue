<template>
  <label v-if="label" class="label py-0 px-2">{{ label }}</label>
  <input
    :value="modelValue"
    :type="type"
    class="input"
    :pattern="patterns"
    :maxlength="maxlength"
    :style="$attrs.style"
    :class="[attrs.class, { 'input-success': props.isValid === true, 'input-error': props.isValid === false }]"
    @input="handler"
  />
</template>

<script lang="ts" setup>
const attrs = useAttrs() // Получение переданных аттрибутов
const emit = defineEmits(['update:modelValue']) // События

/*
 * Отправка события при  изменении поля ввода
 * @function handler
 * @param {Object} event - Объект события
 */
const handler = (event: any) => {
  emit('update:modelValue', event.target.value ? event.target.value : null)
}

/* Модель для входных параметров */
interface Props {
  modelValue: string | null // Данные поля
  label?: string | null // Подпись поля
  type?: string // Тип поля
  patterns?: string | undefined // Паттерны
  isValid?: string | null | boolean // Валидация поля
  maxlength?: any | number | undefined // Максимальная длина
}

/* Установка значений PROPS */
const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  label: null,
  type: 'text',
  isValid: null,
  maxlength: null,
})
</script>
