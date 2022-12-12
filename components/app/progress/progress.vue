<template>
  <div class="progress">
    <div
      :class="[{'progress-bar': true}]"
      role="progressbar"
      :aria-valuenow="ariaValuenow"
      :aria-valuemin="ariaValuemin"
      :aria-valuemax="ariaValuemax"
      :style="styles"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    /* @property {Number} ariaAaluenow - текущее значение */
    ariaValuenow: {
      type: [Number, String],
      default: 50,
    },
    /* @property {Number} ariaValuemin - Минимальное значение */
    ariaValuemin: {
      type: [Number, String],
      default: 0,
    },
    /* @property {Number} ariaValuemax - Максимальное значение */
    ariaValuemax: {
      type: [String, Number],
      default: 100,
    },
  },
}
</script>

<style>
  progress {
    vertical-align: baseline;
  }

  .progress {
    --bs-progress-height: 1rem;
    --bs-progress-font-size: 0.75rem;
    --bs-progress-bg: #e9ecef;
    --bs-progress-border-radius: 0.375rem;
    --bs-progress-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);
    --bs-progress-bar-color: #fff;
    --bs-progress-bar-bg: #0d6efd;
    --bs-progress-bar-transition: width 0.6s ease;
    display: flex;
    height: var(--bs-progress-height);
    overflow: hidden;
    font-size: var(--bs-progress-font-size);
    background-color: var(--bs-progress-bg);
    border-radius: var(--bs-progress-border-radius);
  }

  .progress-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    color: var(--bs-progress-bar-color);
    text-align: center;
    white-space: nowrap;
    background-color: var(--bs-progress-bar-bg);
    transition: var(--bs-progress-bar-transition);
  }
  @media (prefers-reduced-motion: reduce) {
    .progress-bar {
      transition: none;
    }
  }

  .progress-bar-striped {
    background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.15) 75%,
      transparent 75%,
      transparent
    );
    background-size: var(--bs-progress-height) var(--bs-progress-height);
  }

  .progress-bar-animated {
    -webkit-animation: 1s linear infinite progress-bar-stripes;
    animation: 1s linear infinite progress-bar-stripes;
  }
  @media (prefers-reduced-motion: reduce) {
    .progress-bar-animated {
      -webkit-animation: none;
      animation: none;
    }
  }
</style>
