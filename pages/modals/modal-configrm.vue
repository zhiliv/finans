<template>
  <div class="flex w-full justify-center">
    <label>{{ modelValue.options.text }}</label>
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
