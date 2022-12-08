<template>
  <figcaption :class="classes" v-bind="$attrs">
    <slot></slot>
  </figcaption>
</template>

<script>
export default {
  props: {
    /*
    * Признак подписи для изображения
    */
    figureCaption: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    classes(){
      const {figureCaption} = this
      return {
        'figure-caption': figureCaption
      }
    }
  }
}
</script>

<style>
  .figure-caption {
    font-size: 0.875em;
    color: #6c757d;
  }
</style>
