<template>
  <div class="relative" :class="[$attrs.class, {'px-2': $attrs.multiple}]">
    <app-spinner
      v-if="isLoad === false"
      class="absolute pt-2"
      :class="{'left-[50%]': $attrs.multiple}"
    />
    <label v-if="label" class="label py-0 px-2">{{label}}</label>
    <select
      :multiple="attrs.multiple"
      v-model="selected"
      :disabled="attrs?.disabled"
      class="select select-bordered w-full"
      :class="[$attrs['select-class'], {'mt-3': $attrs.multiple}]"
    >
      <option v-if="!options.length" disabled>Список пуст</option>
      <option v-if="options.length && required" disabled>Выберите значение</option>
      <option
        v-for="item in options"
        :key="item[value]"
        :value="item[value]"
        class="text-[1.35em]"
      >{{item[text]}}</option>
    </select>
  </div>
</template>

<script lang="ts" setup>
const attrs = useAttrs() // Получение аттрибутов
/**
 * @interface Props
 * @member {Array} options - Список
 * @member {String} label - Заголовок списка
 * @member {String} value - Наименование свойства значения
 * @member {String} text - Текстовое значение выделенного элемента
 * @member {Boolean} required - Обязательно поля
 * @member {Boolean} isLoad - Статус загрузки списка
 * @member {Any} selectValue - Значение выделенного элемента списка
 * @member {Boolean} disabled - Активность поля
 * @member {Boolean} multiple - Множественный выбор
 */
interface Props {
  options: any
  label?: string
  value?: string
  text?: string
  required?: boolean
  isLoad: boolean | string
  selectValue?: any
  disabled?: boolean
  multiple?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  options: [],
  value: 'id',
  text: 'name',
  required: false,
  isLoad: false,
  selectValue: null
})

/* События компонента */
const emit = defineEmits(['update:modelValue', 'update:selectValue'])
const selected = ref() // Выделенный элемент


/* Отслеживание изменений выбранных элементов */
watch(selected, newVal => {
  emit('update:modelValue', newVal) // Отправка события для обновления модели данных
})

onMounted(() => {
  selected.value = props.selectValue || null
})


</script>
