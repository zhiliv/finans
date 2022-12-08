<template>
  <address v-bind="$attrs">
    <slot></slot>
  </address>
</template>

<style>
  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
  }
</style>
