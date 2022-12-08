<template>
  <app-p v-bind="$attrs" :class="[{'lead': true}]">
    <slot></slot>
  </app-p>
</template>

<script>
  import appP from './../p/p.vue'
  export default{
    components: {
      'app-p': appP
    }
  }

</script>

<style>
  .lead {
    font-size: 1.25rem;
    font-weight: 300;
  }
</style>
