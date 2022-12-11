<template>
  <caption :class="[classes]" v-bind="$attrs">
    <slot></slot>
  </caption>
</template>

<script>
export default {
  props: {
    /*
     * Расположение заголовка сверху
     */
    top: {
      type: String,
      default: null,
      validator(value){
        return value === 'true' || value === true
      }
    },
  },
  computed: {
    classes() {
      const { top } = this
      return {
        'caption-top': !!top,
      }
    },
  },
}
</script>

<style>
  caption {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    color: rgba(var(--bs-body-color-rgb), 0.75);
    text-align: left;
  }

  .caption-top {
    caption-side: top;
  }
</style>
