<template>
  <div :class="classes" role="status">
    <span class="visually-hidden">{{text}}</span>
  </div>
</template>

<script>
export default {
  props: {
    /* Тип спинера */
    typeSpinner: {
      type: String,
      default: 'border',
      validator(value) {
        return value === 'border' || value === 'grow'
      },
    },
    /* Маленький размер спинера */
    spinnerSm: {
      type: [String, Boolean],
      default: false,
      validator(value) {
        return value === false || value === 'true' || value === true
      },
    },
    /* Текст внутри спинера */
    text: {
      type: String,
      default: 'Загрузка...',
    },
  },
  computed: {
    classes() {
      const { typeSpinner, spinnerSm } = this
      return {
        [`spinner-${typeSpinner}`]: !!typeSpinner,
        [`spinner-${typeSpinner}-sm`]: !!spinnerSm,
      }
    },
  },
}
</script>

<style>
  .spinner-grow,
  .spinner-border {
    display: inline-block;
    width: var(--bs-spinner-width);
    height: var(--bs-spinner-height);
    vertical-align: var(--bs-spinner-vertical-align);
    border-radius: 50%;
    -webkit-animation: var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name);
    animation: var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name);
  }

  @-webkit-keyframes spinner-border {
    to {
      transform: rotate(360deg) /* rtl:ignore */;
    }
  }

  @keyframes spinner-border {
    to {
      transform: rotate(360deg) /* rtl:ignore */;
    }
  }
  .spinner-border {
    --bs-spinner-width: 2rem;
    --bs-spinner-height: 2rem;
    --bs-spinner-vertical-align: -0.125em;
    --bs-spinner-border-width: 0.25em;
    --bs-spinner-animation-speed: 0.75s;
    --bs-spinner-animation-name: spinner-border;
    border: var(--bs-spinner-border-width) solid currentcolor;
    border-right-color: transparent;
  }

  .spinner-border-sm {
    --bs-spinner-width: 1rem;
    --bs-spinner-height: 1rem;
    --bs-spinner-border-width: 0.2em;
  }

  @-webkit-keyframes spinner-grow {
    0% {
      transform: scale(0);
    }
    50% {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes spinner-grow {
    0% {
      transform: scale(0);
    }
    50% {
      opacity: 1;
      transform: none;
    }
  }
  .spinner-grow {
    --bs-spinner-width: 2rem;
    --bs-spinner-height: 2rem;
    --bs-spinner-vertical-align: -0.125em;
    --bs-spinner-animation-speed: 0.75s;
    --bs-spinner-animation-name: spinner-grow;
    background-color: currentcolor;
    opacity: 0;
  }

  .spinner-grow-sm {
    --bs-spinner-width: 1rem;
    --bs-spinner-height: 1rem;
  }

  @media (prefers-reduced-motion: reduce) {
    .spinner-border,
    .spinner-grow {
      --bs-spinner-animation-speed: 1.5s;
    }
  }

  .visually-hidden,
  .visually-hidden-focusable:not(:focus):not(:focus-within) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }
</style>