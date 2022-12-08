<template>
  <div :class="classes" v-bind="$attrs">
    <template v-if="items.length">
      <app-button
        f-vor="item in items"
        :class="item.class"
        :toogle="item.toogle"
        :size="item.size"
        :aria-label="item.ariaLabel"
      >{{item.caption}}</app-button>
    </template>
    <template v-if="$slots.default">
      <slot></slot>
    </template>
  </div>
</template>

<script>
import appButton from './../button/button.vue'
export default {
  components: {
    'app-button': appButton,
  },
  props: {
    /*
     * Размер группы кнопок
     */
     btnGroupSize: {
      type: String,
      default: null,
      validator(value) {
        return value === 'sm' || value === 'lg' || value === null
      },
    },
    /*
     * Вертикальное расположение
     */
     btnGroupVertical: {
      type: String,
      default: null,
      validator(value){
        return value === 'true' || value === null
      }
    },
    /*
     * Массив кнопок для отображения
     */
    items: {
      type: Array,
      default: () => [],
    },
    /*
     * Группа принадлежности
     */
    role: {
      type: String,
      default: null,
      validator(value) {
        return value === 'group' || value === 'toolbar' || value === null
      },
    },
  },
  computed: {
    classes() {
      const { btnGroupSize, btnGroupVertical } = this
      return {
        'btn-group': !btnGroupSize && !btnGroupVertical,
        [`btn-group-${btnGroupSize}`]: !!btnGroupSize,
        [`btn-group-${btnGroupVertical}`]: !!btnGroupVertical,
      }
    },
  },
}
</script>

<style>
  /* stylelint-disable no-descending-specificity */
  .btn-group,
  .btn-group-vertical {
    position: relative;
    display: inline-flex;
    vertical-align: middle;
    border-radius: 0.375rem;
  }

  .btn-group-sm > .btn {
    --bs-btn-padding-y: 0.25rem;
    --bs-btn-padding-x: 0.5rem;
    --bs-btn-font-size: 0.875rem;
    --bs-btn-border-radius: 0.25rem;
  }

  .btn-group > .btn,
  .btn-group-vertical > .btn {
    position: relative;
    flex: 1 1 auto;
  }

  .btn-group > .btn:not(:first-child),
  .btn-group > .btn-group:not(:first-child) {
    margin-left: -1px;
  }

  .btn-group > .btn:hover,
  .btn-group > .btn:focus,
  .btn-group > .btn:active,
  .btn-group-vertical > .btn:hover,
  .btn-group-vertical > .btn:focus,
  .btn-group-vertical > .btn:active,
  .btn-group > .btn-check:checked + .btn,
  .btn-group > .btn-check:focus + .btn,
  .btn-group-vertical > .btn-check:checked + .btn,
  .btn-group > .btn.active,
  .btn-group-vertical > .btn-check:focus + .btn,
  .btn-group-vertical > .btn.active {
    z-index: 1;
  }

  .btn-group > .btn:nth-child(n + 3),
  .btn-group > :not(.btn-check) + .btn,
  .btn-group > .btn-group:not(:first-child) > .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .btn-group > .btn:not(:last-child):not(.dropdown-toggle),
  .btn-group > .btn.dropdown-toggle-split:first-child,
  .btn-group > .btn-group:not(:last-child) > .btn {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .btn-group-sm > .btn + .dropdown-toggle-split {
    padding-right: 0.375rem;
    padding-left: 0.375rem;
  }

  .btn-group-lg > .btn + .dropdown-toggle-split {
    padding-right: 0.75rem;
    padding-left: 0.75rem;
  }

  .btn-group-vertical {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .btn-group-vertical > .btn,
  .btn-group-vertical > .btn-group {
    width: 100%;
  }

  .btn-group-vertical > .btn:not(:first-child),
  .btn-group-vertical > .btn-group:not(:first-child) {
    margin-top: -1px;
  }

  .btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),
  .btn-group-vertical > .btn-group:not(:last-child) > .btn {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .btn-group-vertical > .btn ~ .btn,
  .btn-group-vertical > .btn-group:not(:first-child) > .btn {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>
