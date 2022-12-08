<template>
  <a
    :href="href"
    v-bind="$attrs"
    @click="$emit('click', $event)"
    @mouseover="$emit('mouseover', $event)"
    @mouseleave="$emit('mouseleave', $event)"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    /**
     * Значение ссылки
     */
    href: {
      type: String,
      default: '',
    },
  },
}
</script>
<style>
  a {
    color: var(--bs-link-color);
    text-decoration: underline;
  }

  a:hover {
    color: var(--bs-link-hover-color);
  }

  a:not([href]):not([class]),
  a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration: none;
  }
</style>
