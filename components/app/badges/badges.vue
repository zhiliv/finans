<template>
  <div>
    <template v-if="type === 'span'">
      <span
        :class="[{'position-absolute': type === 'button', 'top-0': type === 'button', 'start-100': type === 'button',  'translate-middle': type === 'button', 'badge': true, 'p-1': true}, classes]"
      >
        <slot></slot>
      </span>
    </template>
    <template v-else-if="type === 'h'">
      <app-h :class="[{'badge': true}, classes]" level="level">
        <slot></slot>
      </app-h>
    </template>
  </div>
</template>

<script>
import appH from './../h/h.vue'
const validColor = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'] // валидатор цветов
export default {
  components: {
    'app-h': appH,
  },
  props: {
    /* Тип значка */
    type: {
      type: String,
      default: 'span',
      validator(value) {
        return value === 'span' || value === 'h' || value === 'button'
      },
    },
    /* Цвет */
    badgesColor: {
      type: String,
      default: '',
      validator(value) {
        return validColor.includes(value)
      },
    },
    /* Уровень заголовка */
    level: {
      type: String,
      default: '6',
      validator(value) {
        return value && Number.isInteger(+value) && +value > 0 && +value <= 6
      },
    },
  },
  computed: {
    classes() {
      const { badgesColor } = this
      return {
        [`text-bg-${badgesColor}`]: true,
      }
    },
  },
}
</script>

<style>
  @import './../../../assets/css/padding.css';
  .text-bg-primary {
    color: #fff !important;
    background-color: RGBA(13, 110, 253, var(--bs-bg-opacity, 1)) !important;
  }

  .text-bg-secondary {
    color: #fff !important;
    background-color: RGBA(108, 117, 125, var(--bs-bg-opacity, 1)) !important;
  }

  .text-bg-success {
    color: #fff !important;
    background-color: RGBA(25, 135, 84, var(--bs-bg-opacity, 1)) !important;
  }

  .text-bg-info {
    color: #000 !important;
    background-color: RGBA(13, 202, 240, var(--bs-bg-opacity, 1)) !important;
  }

  .text-bg-warning {
    color: #000 !important;
    background-color: RGBA(255, 193, 7, var(--bs-bg-opacity, 1)) !important;
  }

  .text-bg-danger {
    color: #fff !important;
    background-color: RGBA(220, 53, 69, var(--bs-bg-opacity, 1)) !important;
  }

  .text-bg-light {
    color: #000 !important;
    background-color: RGBA(248, 249, 250, var(--bs-bg-opacity, 1)) !important;
  }

  .text-bg-dark {
    color: #fff !important;
    background-color: RGBA(33, 37, 41, var(--bs-bg-opacity, 1)) !important;
  }

  .position-absolute {
    position: absolute !important;
  }

  .top-0 {
    top: 0 !important;
  }

  .start-100 {
    left: 100% !important;
  }

  .translate-middle {
    transform: translate(-50%, -50%) !important;
  }

  .rounded-pill {
    border-radius: var(--bs-border-radius-pill) !important;
  }
</style>