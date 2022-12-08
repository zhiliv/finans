<template>
  <mark v-bind="$attrs">
    <slot></slot>
  </mark>
</template>

<style>
  mark,
  .mark {
    padding: 0.1875em;
    background-color: var(--bs-highlight-bg);
  }
</style>
