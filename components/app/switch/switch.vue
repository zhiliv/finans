<template>
  <div class="form-check form-switch">
    <input v-model="value" class="form-check-input" type="checkbox" role="switch" />
    <app-label class="form-check-label pl-5p">{{label}}</app-label>
  </div>
</template>

<script>
import appLabel from './../label/label.vue'
export default {
  components: {
    'app-label': appLabel,
  },
  props: {
    label: {
      type: String,
      default: '',
    },
  },
  data(){
    return {
      value: false
    }
  }
}
</script>

<style>
  .form-check {
    display: block;
    min-height: 1.5rem;
    padding-left: 1.5em;
    margin-bottom: 0.125rem;
  }

  .form-check .form-check-input {
    float: left;
    margin-left: -1.5em;
  }

  .form-check-input {
    width: 1em;
    height: 1em;
    margin-top: 0.25em;
    vertical-align: top;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: 1px solid rgba(0, 0, 0, 0.25);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    print-color-adjust: exact;
  }

  .form-check-input:active {
    filter: brightness(90%);
  }
  .form-check-input:focus {
    border-color: var(--focus-form-control-shadow);
    outline: 0;
    box-shadow: 0 0 0 0.25rem var(--focus-form-control-shadow);
  }
  .form-check-input:checked {
    background-color: var(--focus-form-control);
    border-color: var(--focus-form-control-shadow);
  }

  .form-check-input:disabled {
    pointer-events: none;
    filter: none;
    opacity: 0.5;
  }

  .form-check-input[disabled] ~ .form-check-label,
  .form-check-input:disabled ~ .form-check-label {
    cursor: default;
    opacity: 0.5;
  }

  .form-switch {
    padding-left: 2.5em;
  }
  .form-switch .form-check-input {
    width: 2em;
    margin-left: -2.5em;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
    background-position: left center;
    border-radius: 2em;
    transition: background-position 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .form-switch .form-check-input {
      transition: none;
    }
  }

  .form-switch .form-check-input:checked {
    background-position: right center;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
  }
  .form-switch.form-check-reverse {
    padding-right: 2.5em;
    padding-left: 0;
  }
  .form-switch.form-check-reverse .form-check-input {
    margin-right: -2.5em;
    margin-left: 0;
  }
  .form-check-input[type='checkbox'] {
    border-radius: 0.25em;
  }

  .form-check-input:checked[type='checkbox'] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
  }

  .form-check-input[type='checkbox']:indeterminate {
    background-color: var(--focus-form-control);
    border-color: var(--focus-form-control);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
  }

  .pl-5p {
    padding-left: 5px;
  }
</style>