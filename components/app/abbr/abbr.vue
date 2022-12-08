<template>
  <abbr :class="[classes]" v-bind="$attrs">
    <slot></slot>
  </abbr>
</template>

<script>
export default {
  props: {
    /**
     * Признак использования меньшего шрифта
     */
    initialism: {
      type: String,
      default: null,
    },
  },
  computed: {
    /*
    * Получение классов компонента
    */
    classes(){
      const {initialism} = this
      return {
        'initialism': !!initialism
      }
    }
  }
}
</script>

<style>
  abbr[title] {
    text-decoration: underline dotted;
    cursor: help;
    text-decoration-skip-ink: none;
  }

  .initialism {
    font-size: 0.875em;
    text-transform: uppercase;
  }
</style>
