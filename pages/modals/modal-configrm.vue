<template>
  <div class="flex w-full justify-center h-auto">
    <span class="h-20">{{ modelValue.options.text }}</span>
  </div>
</template>

<script lang="ts" setup>

/** 
* @interface Props
* @member {Object} modelValue - Данные формы
*/
interface Props {
  modelValue?: any
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
})
</script>
