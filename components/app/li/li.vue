<template>
  <li v-bind="$attrs" :class="classes" @click="$emit('click', $event)">
    <slot></slot>
  </li>
</template>

<script>
export default {
  props: {
    /* Класс list-inline-item */
    listInlineItem: {
      type: String,
      default: null,
      validator(value){
        return value === null || value === 'true'
      }
    },
  },
  computed: {
    classes() {
      const { listInlineItem } = this
      return {
        'list-inline-item': !!listInlineItem,
      }
    },
  },
}
</script>

<style>
  .list-inline-item {
    display: inline-block;
  }
  .list-inline-item:not(:last-child) {
    margin-right: 0.5rem;
  }
</style>
