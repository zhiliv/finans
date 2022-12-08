<template>
  <label :class="classes" v-bind="$attrs">
    <slot></slot>
  </label>
</template>

<script>
export default {
  props: {
    /* Класс form-label */
    formLabel: {
      type: String,
      default: 'true',
      validator(value) {
        return value === 'true' || value === 'false'
      },
    },
    /* Класс col-from-label */
    colFormLabel: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === 'false' || value === null
      },
    },
    /* Класс col-from-label-sm */
    colFormLabelSm: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === 'false' || value === null
      },
    },
    /* Класс col-from-label-lg */
    colFormLabelLg: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === 'false' || value === null
      },
    },
  },
  computed: {
    classes() {
      const { formLabel, colFormLabel, colFormLabelLg, colFormLabelSm } = this
      return {
        'form-label': formLabel === 'true',
        'col-form-label': !!colFormLabel,
        'col-form-label-lg': !!colFormLabelLg,
        'col-form-label-sm': !!colFormLabelSm,
      }
    },
  },
}
</script>

<style>
  label {
    display: inline-block;
  }

  .form-label {
    margin-bottom: 0.5rem;
  }

  .col-form-label {
    padding-top: calc(0.375rem + 1px);
    padding-bottom: calc(0.375rem + 1px);
    margin-bottom: 0;
    font-size: inherit;
    line-height: 1.5;
  }

  .col-form-label-lg {
    padding-top: calc(0.5rem + 1px);
    padding-bottom: calc(0.5rem + 1px);
    font-size: 1.25rem;
  }

  .col-form-label-sm {
    padding-top: calc(0.25rem + 1px);
    padding-bottom: calc(0.25rem + 1px);
    font-size: 0.875rem;
  }
</style>
