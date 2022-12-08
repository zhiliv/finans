<template>
  <figure :class="[{figure: true},$attrs.class]" v-bind="$attrs">
    <slot></slot>
  </figure>
</template>

<style>
  figure {
    margin: 0 0 1rem;
  }

  .figure {
    display: inline-block;
  }
</style>
