<template>
  <div :class="classes" v-bind="$attrs">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    /*
     * Класс container-sm
     */
    containerSm: {
      type: String,
      default: null,
      validator(value){
        return value === 'true' || value === null
      }
    },
    /*
     * Класс container-md
     */
     containerMd: {
      type: String,
      default: null,
      validator(value){
        return value === 'true' || value === null
      }
    },
    /*
     * Класс container-lg
     */
     containerLg: {
      type: String,
      default: null,
      validator(value){
        return value === 'true' || value === null
      }
    },
    /*
     * Класс container-xl
     */
     containerXl: {
      type: String,
      default: null,
      validator(value){
        return value === 'true' || value === null
      }
    },
    /*
     * Класс container-xxl
     */
     containerXxl: {
      type: String,
      default: null,
      validator(value){
        return value === 'true' || value === null
      }
    },
    /*
     * Класс container-fluid
     */
     containerFluid: {
      type: String,
      default: null,
      validator(value){
        return value === 'true' || value === null
      }
    },
  },
  computed: {
    classes() {
      const { containerSm, containerMd, containerLg, containerXl, containerXxl, containerFluid } = this
      return {
        container: !containerFluid, // установка класса container
        'container-fluid': !!containerFluid, // установка класса container-fluid
        'container-sm': !!containerSm, // установка класса container-sm
        'container-md': !!containerMd, // установка класса container-md
        'container-lg': !!containerLg, // установка класса container-lg
        'container-xl': !!containerXl, // установка класса container-xl
        'container-xxl': !!containerXxl, // установка класса container-xxl
      }
    },
  },
}
</script>
<style>
  .container,
  .container-fluid,
  .container-xxl,
  .container-xl,
  .container-lg,
  .container-md,
  .container-sm {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 576px) {
    .container-sm,
    .container {
      max-width: 540px;
    }
  }
  @media (min-width: 768px) {
    .container-md,
    .container-sm,
    .container {
      max-width: 720px;
    }
  }
  @media (min-width: 992px) {
    .container-lg,
    .container-md,
    .container-sm,
    .container {
      max-width: 960px;
    }
  }
  @media (min-width: 1200px) {
    .container-xl,
    .container-lg,
    .container-md,
    .container-sm,
    .container {
      max-width: 1140px;
    }
  }
  @media (min-width: 1400px) {
    .container-xxl,
    .container-xl,
    .container-lg,
    .container-md,
    .container-sm,
    .container {
      max-width: 1320px;
    }
  }
</style>
