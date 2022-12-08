<template>
  <p v-bind="$attrs">
    <slot></slot>
  </p>
</template>


<style>
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
</style>
