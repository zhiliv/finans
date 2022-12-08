<template>
  <dd v-bind="$attrs">
    <slot></slot>
  </dd>
</template>

<style>
  dd {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }
</style>
