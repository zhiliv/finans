<template>
  <abbr :class="[classes]">
    <slot></slot>
  </abbr>
</template>

<script>

export default {
  props: {
    /* Признак использования меньшего шрифта */
    initialism: {
      type: [String, Boolean],
      default: null,
      validator(value) {
        return String(value) === "true"
      },
    },
  },
  computed: {
    /* Получение классов компонента */
    classes() {
      const { initialism } = this
      return {
        initialism: !!initialism,
      }
    },
  },
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
