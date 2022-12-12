<template>
  <label :class="classes">
    <slot></slot>
  </label>
</template>

<script>
export default {
  props: {
    /* Класс form-label */
    formLabel: {
      type: [String, Boolean],
      default: true,
      validator(value) {
        return String(value) === 'true'
      },
    },
    /* Класс col-from-label */
    colFormLabel: {
      type: [String, Boolean],
      default: null,
      validator(value) {
        return String(value) === 'true'
      },
    },
    /* Класс col-from-label-sm */
    colFormLabelSm: {
      type: [String, Boolean],
      default: null,
      validator(value) {
        return String(value) === 'true'
      },
    },
    /* Класс col-from-label-lg */
    colFormLabelLg: {
      type: [String, Boolean],
      default: null,
      validator(value) {
        return String(value) === 'true'
      },
    },
  },
  computed: {
    classes() {
      const { formLabel, colFormLabel, colFormLabelLg, colFormLabelSm } = this
      return {
        'form-label': formLabel === 'true' || formLabel === true,
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
