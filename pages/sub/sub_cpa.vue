<template>
  <div class="lg:col-span-4 col-span-12 mx-4">
    <app-input
      v-model.trim="modelValue.name"
      class="input-bordered w-full"
      :is-valid="isValid.name"
      label="Наименование"
    />
  </div>
  <div class="lg:col-span-4 col-span-12 mx-4">
    <app-input
      v-model.trim="modelValue.site"
      class="input-bordered w-full"
      :is-valid="isValid.site"
      label="Сайт"
    />
  </div>
</template>

<script lang="ts" setup>


/**
 * @interface Props
 * @member {Object} modelValue - Значение формы
 */
interface Props {
  modelValue: any
}

/* Установка значений по умолчанию для входящих свойств */
const props = withDefaults(defineProps<Props>(), {})

/* Создание списка событий */
const emit = defineEmits(['update:modelValue', 'isValid'])
const isValid = ref({ name: false, site: false }) // Валидация полей

watch(
  () => props.modelValue,
  newVal => {
    isValid.value.name = !!(newVal.name && newVal.name.length > 2 && !isNumber(newVal.name))
    isValid.value.site = !!(newVal.site && newVal.site.length > 2 && !isNumber(newVal.site))
    emit('isValid', isValid.value.name && isValid.value.site)
  },
  { deep: true },
)
</script>