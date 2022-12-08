<template>
  <div :class="[{toast: true}, classes]" role="alert" aria-live="assertive" aria-atomic="true">
    <div :class="[{'toast-header': true}, classes]">
      <strong class="me-auto">{{title}}</strong>
      <small class="text-muted">{{new Date().toLocaleTimeString()}}</small>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="toast"
        aria-label="Close"
        @click="onClose"
      ></button>
    </div>
    <div class="toast-body">{{message}}</div>
  </div>
</template>

<script>
export default {
  props: {
    /* Идентификатор уведомления */
    id: {
      type: Number,
      default: 0,
    },
    /* Заголовок */
    title: {
      type: String,
      required: true,
      default: '',
    },
    /* Текст сообщения */
    message: {
      type: String,
      default: null,
    },
    /* Цвет уведомления */
    toastColor: {
      type: String,
      default: 'light',
      validator(value) {
        return (
          value === '' ||
          value === 'primary' ||
          value === 'secondary' ||
          value === 'success' ||
          value === 'info' ||
          value === 'warning' ||
          value === 'danger' ||
          value === 'dark' ||
          value === 'light'
        )
      },
    },
    /* Время через которое будет удалено сообщение */
    timer: {
      type: [String, Number],
      default: 5000,
    },
  },
  computed: {
    /*
     * Установка классов
     * @function classes
     */
    classes() {
      const { toastColor } = this
      return {
        [`toast-${toastColor}`]: !!toastColor,
      }
    },
  },
  mounted() {
    /* Установка интервала, через которое удаляется сообщение */
    setTimeout(() => this.onClose(), this.timer)
  },
  methods: {
    /*
     * При нажатии кнопки "Закрыть"
     * @function onClose
     */
    onClose() {
      const index = this.$parent._data.listToast.findIndex(el => el.id === this.id) // поиск индекса уведомления
      this.$parent._data.listToast.splice(index, 1) // удаление из списка
    },
  },
}
</script>

<style>
  .toast {
    display: block;
    --bs-toast-zindex: 1090;
    --bs-toast-padding-x: 0.75rem;
    --bs-toast-padding-y: 0.5rem;
    --bs-toast-spacing: 0.5rem;
    --bs-toast-max-width: 350px;
    --bs-toast-font-size: 0.875rem;
    --bs-toast-color: ;
    --bs-toast-bg: rgba(255, 255, 255, 0.85);
    --bs-toast-border-width: 1px;
    --bs-toast-border-color: var(--bs-border-color-translucent);
    --bs-toast-border-radius: 0.375rem;
    --bs-toast-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    --bs-toast-header-color: #6c757d;
    --bs-toast-header-bg: rgba(255, 255, 255, 0.85);
    --bs-toast-header-border-color: rgba(0, 0, 0, 0.05);
    width: var(--bs-toast-max-width);
    max-width: 100%;
    font-size: var(--bs-toast-font-size);
    color: var(--bs-toast-color);
    pointer-events: auto;
    background-color: var(--bs-toast-bg);
    background-clip: padding-box;
    border: var(--bs-toast-border-width) solid var(--bs-toast-border-color);
    box-shadow: var(--bs-toast-box-shadow);
    border-radius: var(--bs-toast-border-radius);
  }

  .toast-header {
    display: flex;
    align-items: center;
    padding: var(--bs-toast-padding-y) var(--bs-toast-padding-x);
    color: var(--bs-toast-header-color);
    background-color: var(--bs-toast-header-bg);
    background-clip: padding-box;
    border-bottom: var(--bs-toast-border-width) solid var(--bs-toast-header-border-color);
    border-top-left-radius: calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));
    border-top-right-radius: calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));
  }
  .toast-header .btn-close {
    margin-right: calc(-0.5 * var(--bs-toast-padding-x));
    margin-left: var(--bs-toast-padding-x);
  }

  .toast-body {
    padding: var(--bs-toast-padding-x);
    word-wrap: break-word;
  }

  .btn-close {
    box-sizing: content-box;
    width: 1em;
    height: 1em;
    padding: 0.25em 0.25em;
    color: #000;
    background: transparent
      url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e")
      center/1em auto no-repeat;
    border: 0;
    border-radius: 0.375rem;
    opacity: 0.5;
  }
  .btn-close:hover {
    color: #000;
    text-decoration: none;
    opacity: 0.75;
  }
  .btn-close:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    opacity: 1;
  }
  .btn-close:disabled,
  .btn-close.disabled {
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    opacity: 0.25;
  }
</style>