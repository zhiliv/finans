<template>
  <button
    :class="[classes, { active: isActive }]"
    v-bind="$attrs"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    /*
     * размер кнопки
     */
    btnSize: {
      type: String,
      default: null,
      validator(value) {
        return value === 'sm' || value === 'lg' || value === null
      },
    },
    /*
     * Добавление / удаление класса active при нажатии на кнопку
     */
    toogle: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      isActive: false,
    }
  },
  computed: {
    classes() {
      const { btnSize } = this
      return {
        btn: true,
        [`btn-${btnSize}`]: !!btnSize,
      }
    },
  },
  methods: {
    /*
     * При клике на кнопку
     * @function handleClick
     * @property {Object} event - Данные события
     */
    handleClick(event) {
      const { toogle } = this
      toogle === true ? (this.isActive = !this.isActive) : (this.isActive = false) // добавляем / удаляем класс если включен признак toogle
      this.$emit('click', event)
    },
  },
}
</script>

<style>
  /* stylelint-disable no-descending-specificity */
  button:focus:not(:focus-visible) {
    outline: 0;
  }

  button {
    text-transform: none;
    border-radius: 0;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  [role='button'] {
    cursor: pointer;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  button:not(:disabled),
  [type='button']:not(:disabled),
  [type='reset']:not(:disabled),
  [type='submit']:not(:disabled) {
    cursor: pointer;
  }

  ::-webkit-inner-spin-button {
    height: auto;
  }

  .btn {
    position: relative;
    top: -1px;
    --bs-btn-padding-x: 0.75rem;
    --bs-btn-padding-y: 0.375rem;
    --bs-btn-font-family: ;
    --bs-btn-font-size: 1rem;
    --bs-btn-font-weight: 400;
    --bs-btn-line-height: 1.5;
    --bs-btn-color: #212529;
    --bs-btn-bg: transparent;
    --bs-btn-border-width: 1px;
    --bs-btn-border-color: transparent;
    --bs-btn-border-radius: 0.375rem;
    --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
    --bs-btn-disabled-opacity: 0.65;
    --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), 0.5);
    display: inline-block;
    padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
    font-family: var(--bs-btn-font-family);
    font-size: var(--bs-btn-font-size);
    font-weight: var(--bs-btn-font-weight);
    line-height: var(--bs-btn-line-height);
    color: var(--bs-btn-color);
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
    border-radius: var(--bs-btn-border-radius);
    background-color: var(--bs-btn-bg);
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
  }

  @media (prefers-reduced-motion: reduce) {
    .btn {
      transition: none;
    }
  }

  .btn:hover {
    color: var(--bs-btn-hover-color);
    background-color: var(--bs-btn-hover-bg);
    border-color: var(--bs-btn-hover-border-color);
  }

  .btn:disabled,
  .btn.disabled,
  fieldset:disabled .btn {
    color: var(--bs-btn-disabled-color);
    pointer-events: none;
    background-color: var(--bs-btn-disabled-bg);
    border-color: var(--bs-btn-disabled-border-color);
    opacity: var(--bs-btn-disabled-opacity);
  }

  .btn-lg,
  .btn-group-lg > .btn {
    --bs-btn-padding-y: 0.5rem;
    --bs-btn-padding-x: 1rem;
    --bs-btn-font-size: 1.25rem;
    --bs-btn-border-radius: 0.5rem;
  }

  .btn-sm {
    --bs-btn-padding-y: 0.25rem;
    --bs-btn-padding-x: 0.5rem;
    --bs-btn-font-size: 0.875rem;
    --bs-btn-border-radius: 0.25rem;
  }

  .btn:first-child:active:focus-visible,
  .btn.active:focus-visible,
  .btn.show:focus-visible {
    box-shadow: var(--bs-btn-focus-box-shadow);
  }

  .btn:first-child:active,
  .btn.active,
  .btn.show {
    color: var(--bs-btn-active-color);
    background-color: var(--bs-btn-active-bg);
    border-color: var(--bs-btn-active-border-color);
  }
</style>
