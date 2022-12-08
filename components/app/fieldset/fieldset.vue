<template>
  <fieldset v-bind="$attrs">
    <slot></slot>
  </fieldset>
</template>

<style>
  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }
</style>
