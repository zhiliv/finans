<template>
  <label v-if="label" class="label py-0 px-2">{{ label }}</label>
  <textarea :value="modelValue"  class="textarea textarea-bordered w-full" :pattern="patterns" :style="$attrs.style"
    :class="[attrs.class, { 'textarea-success': props.isValid === true, 'textarea-error': props.isValid === false, 'mt-2': !label }]" @input="handler" />
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

/** 
* @interface Props
* @member {String} modelValue - Данные поля
* @member {String} label - Подпись поля
* @member {String} type - Тип поля 
* @member {RegExp} patterns - Паттерн ввода
* @member {Boolean} isValid - Значение валидации
* @member {Number} maxlength - Максимальная длина
*/
interface Props {
  modelValue: string | null | any // Данные поля
  label?: string | null // Подпись поля
  patterns?: string | undefined // Паттерны
  isValid?: string | null | boolean // Валидация поля
}

/* Установка значений PROPS */
const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  label: null,
  type: 'text',
  isValid: null,
  maxlength: null
})
</script>
