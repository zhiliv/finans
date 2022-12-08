<template>
  <iframe v-bind="$attrs">
    <slot></slot>
  </iframe>
</template>

<style>
  iframe {
    border: 0;
  }
</style>
