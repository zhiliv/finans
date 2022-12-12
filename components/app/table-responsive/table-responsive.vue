<template>
  <div
    :class="[outClass, classes]"
  >
    <slot></slot>
  </div>
</template>

<script>
import {
  removeSpace,
  isBoolean,
  isString,
} from './../../../scripts/component/func'
export default {
  /*
   * Входящие свойства
   * @typedef {Object} props
   * @property {String} classes - Входные классы
   * @property {String} styles - Входные стили
   * @property {Boolean,String} responsive - адаптивные таблицы
   * Возможные варианты:
   *  -true
   *  -sm
   *  -md
   *  -lg
   *  -xl
   *  -xxl
   */
  props: {
    classes: {
      type: String,
      default: '',
    },
    styles: {
      type: String,
      default: '',
    },
    // eslint-disable-next-line vue/require-default-prop
    responsive: {
      type: [String, Boolean],
      default: false,
    },
  },
  data() {
    return {
      outClass: null, // классы, сформированные аттрибутами
    }
  },
  mounted() {
    this.outClass = {}
    if (
      (isBoolean(this.responsive) === true && this.responsive === true) ||
      this.responsive === 'true'
    )
      Object.assign(this.outClass, { responsive: true })
    else if (isString(this.responsive))
      Object.assign(this.outClass, {
        [`responsive-${removeSpace(this.responsive)}`]: true,
      })
  },
}
</script>

<style>
.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

@media (max-width: 575.98px) {
  .table-responsive-sm {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 767.98px) {
  .table-responsive-md {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 991.98px) {
  .table-responsive-lg {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1199.98px) {
  .table-responsive-xl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1399.98px) {
  .table-responsive-xxl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
</style>
