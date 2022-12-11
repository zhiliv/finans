<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
const validBooleanTrue = ['true', true]
export default {
  props: {
    /* Класс container-sm */
    sm: {
      type: [String, Boolean],
      default: null,
      validator(value) {
        return validBooleanTrue.includes(value)
      },
    },
    /* Класс container-md */
    md: {
      type: [String, Boolean],
      default: null,
      validator(value) {
        return validBooleanTrue.includes(value)
      },
    },
    /* Класс container-lg */
    lg: {
      type: [String, Boolean],
      default: null,
      validator(value) {
        return validBooleanTrue.includes(value)
      },
    },
    /* Класс container-xl */
    xl: {
      type: [String, Boolean],
      default: null,
      validator(value) {
        return validBooleanTrue.includes(value)
      },
    },
    /* Класс container-xxl */
    xxl: {
      type: [String, Boolean],
      default: null,
      validator(value) {
        return validBooleanTrue.includes(value)
      },
    },
    /* Класс container-fluid */
    fluid: {
      type: [String, Boolean],
      default: null,
      validator(value) {
        return validBooleanTrue.includes(value)
      },
    },
  },
  computed: {
    classes() {
      const { sm, md, lg, xl, xxl, fluid } = this
      return {
        container: !containerFluid, // установка класса container
        'container-fluid': !!fluid, // установка класса container-fluid
        'container-sm': !!sm, // установка класса container-sm
        'container-md': !!md, // установка класса container-md
        'container-lg': !!lg, // установка класса container-lg
        'container-xl': !!xl, // установка класса container-xl
        'container-xxl': !!xxl, // установка класса container-xxl
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
