<template>
  <dt v-bind="$attrs">
    <slot></slot>
  </dt>
</template>

<style>
  dt {
    font-weight: 700;
  }
</style>
