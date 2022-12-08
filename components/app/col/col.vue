<template>
  <div :class="classes" v-bind="$attrs">
    <slot></slot>
  </div>
</template>
<script>
import { strToBool } from './../../../scripts/component/func'
const validCol = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto', 'false', 'true', null] // допустимые значения для классов col, col-sm, col-md, col-lg, col-xl, col-xxl
const validOffset = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', null] // доступные значения для класса offset
const validOffsetAdapt = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', null] // доступные значения для классов offset-sm-*, offset-md-*, offset-lg-*, offset-xl-*, offset-xxl-*
const validOrder = ['first', 'last', '0', '1', '2', '3', '4', '5', null] // доступные значения для классов order-*, order-sm-*, order-md-*, order-lg-*, order-xl-*, order-xxl-*
const validFlex = ['0', '1', null]
const validFloat = ['start', 'end', 'none', null]
export default {
  props: {
    col: {
      /*
       * Класс col, col-*
       */
      type: String,
      default: null,
      validator(value) {
        return validCol.includes(value)
      },
    },
    /*
     * Класс col-sm, col-s,-*
     */
    colSm: {
      type: String,
      default: null,
      validator(value) {
        return validCol.includes(value)
      },
    },
    /*
     * Класс col-md, col-md-*
     */
    colMd: {
      type: String,
      default: null,
      validator(value) {
        return value ? validCol.includes(value) : false
      },
    },
    /*
     * Класс col-lg, col-lg-*
     */
    colLg: {
      type: String,
      default: null,
      validator(value) {
        return validCol.includes(value)
      },
    },
    /*
     * Класс col-xl, col-xl-*
     */
    colXl: {
      type: String,
      default: null,
      validator(value) {
        return validCol.includes(value)
      },
    },
    /*
     * Класс col-xxl, col-xxl-*
     */
    colXxl: {
      type: String,
      default: null,
      validator(value) {
        return validCol.includes(value)
      },
    },
    /*
     * Класс offset-*
     */
    offset: {
      type: String,
      default: null,
      validator(value) {
        return validOffset.includes(value)
      },
    },
    /*
     * Класс offset-sm-*
     */
    offsetSm: {
      type: String,
      default: null,
      validator(value) {
        return validOffsetAdapt.includes(value)
      },
    },
    /*
     * Класс offset-lg-*
     */
    offsetMd: {
      type: String,
      default: null,
      validator(value) {
        return validOffsetAdapt.includes(value)
      },
    },
    /*
     * Класс offset-md-*
     */
    offsetLg: {
      type: String,
      default: null,
      validator(value) {
        return validOffsetAdapt.includes(value)
      },
    },
    /*
     * Класс offset-xl-*
     */
    offsetXl: {
      type: String,
      default: null,
      validator(value) {
        return validOffsetAdapt.includes(value)
      },
    },
    /*
     * Класс offset-xxl-*
     */
    offsetXxl: {
      type: String,
      default: null,
      validator(value) {
        return validOffsetAdapt.includes(value)
      },
    },
    /*
     * Класс order-*
     */
    order: {
      type: String,
      default: null,
      validator(value) {
        return validOffsetAdapt.includes(value)
      },
    },
    /*
     * Класс order-sm-*
     */
    orderSm: {
      type: String,
      default: null,
      validator(value) {
        return validOrder.includes(value)
      },
    },
    /*
     * Класс order-md-*
     */
    orderMd: {
      type: String,
      default: null,
      validator(value) {
        return validOrder.includes(value)
      },
    },
    /*
     * Класс order-lg-*
     */
    orderLg: {
      type: String,
      default: null,
      validator(value) {
        return validOrder.includes(value)
      },
    },
    /*
     * Класс order-xl-*
     */
    orderXl: {
      type: String,
      default: null,
      validator(value) {
        return validOrder.includes(value)
      },
    },
    /*
     * Класс order-xxl-*
     */
    orderXxl: {
      type: String,
      default: null,
      validator(value) {
        return validOrder.includes(value)
      },
    },
    /*
     * Класс flex-fill
     */
    flexFill: {
      type: String,
      default: null,
      validator(value) {
        return value === null || value === 'true'
      },
    },
    /*
     * Класс flex-sm-fill
     */
    flexSmFill: {
      type: String,
      default: null,
      validator(value) {
        return value === null || value === 'true'
      },
    },
    /*
     * Класс flex-md-fill
     */
    flexMdFill: {
      type: String,
      default: null,
      validator(value) {
        return value === null || value === 'true'
      },
    },
    /*
     * Класс flex-lg-fill
     */
    flexLgFill: {
      type: String,
      default: null,
      validator(value) {
        return value === null || value === 'true'
      },
    },
    /*
     * Класс flex-xl-fill
     */
    flexXlFill: {
      type: String,
      default: null,
      validator(value) {
        return value === null || value === 'true'
      },
    },
    /*
     * Класс flex-xxl-fill
     */
    flexXxlFill: {
      type: String,
      default: null,
      validator(value) {
        return value === null || value === 'true'
      },
    },
    /* Класс flex-grow-* */
    flexGrow: {
      type: String,
      default: null,
      validator(value) {
        return validFlex.includes(value)
      },
    },
    /* Класс flex-sm-grow-* */
    flexSmGrow: {
      type: String,
      default: null,
      validator(value) {
        return validFlex.includes(value)
      },
    },
    /* Класс flex-md-grow-* */
    flexMdGrow: {
      type: String,
      default: null,
      validator(value) {
        return validFlex.includes(value)
      },
    },
    /* Класс flex-lg-grow-* */
    flexLgGrow: {
      type: String,
      default: null,
      validator(value) {
        return validFlex.includes(value)
      },
    },
    /* Класс flex-xl-grow-* */
    flexXlGrow: {
      type: String,
      default: null,
      validator(value) {
        return validFlex.includes(value)
      },
    },
    /* Класс flex-xxl-grow-* */
    flexXxlGrow: {
      type: String,
      default: null,
      validator(value) {
        return validFlex.includes(value)
      },
    },

    /* Класс flex-shrink-* */
    flexShrink: {
      type: String,
      default: null,
      validator(value) {
        return validFlex.includes(value)
      },
    },
    /* Класс flex-sm-shrink-* */
    flexSmShrink: {
      type: String,
      default: null,
      validator(value) {
        return validFlex.includes(value)
      },
    },
    /* Класс flex-md-shrink-* */
    flexMdShrink: {
      type: String,
      default: null,
      validator(value) {
        return validFlex.includes(value)
      },
    },
    /* Класс flex-lg-shrink-* */
    flexLgShrink: {
      type: String,
      default: null,
      validator(value) {
        return validFlex.includes(value)
      },
    },
    /* Класс flex-xl-shrink-* */
    flexXlShrink: {
      type: String,
      default: null,
      validator(value) {
        return validFlex.includes(value)
      },
    },
    /* Класс flex-xxl-shrink-* */
    flexXxlShrink: {
      type: String,
      default: null,
      validator(value) {
        return validFlex.includes(value)
      },
      /* Класс float-* */
      float: {
        type: String,
        default: null,
        validator(value) {
          return validFloat.includes(value)
        },
      },
      /* Класс float-sm-* */
      floatSm: {
        type: String,
        default: null,
        validator(value) {
          return validFloat.includes(value)
        },
      },
      /* Класс float-md-* */
      floatMd: {
        type: String,
        default: null,
        validator(value) {
          return validFloat.includes(value)
        },
      },
      /* Класс float-lg-* */
      floatLg: {
        type: String,
        default: null,
        validator(value) {
          return validFloat.includes(value)
        },
      },
      /* Класс float-xl-* */
      floatXl: {
        type: String,
        default: null,
        validator(value) {
          return validFloat.includes(value)
        },
      },
      /* Класс float-xxl-* */
      floatXxl: {
        type: String,
        default: null,
        validator(value) {
          return validFloat.includes(value)
        },
      },
    },
  },
  computed: {
    /*
     * Формирование классов для компонента
     */
    classes() {
      const { col, colSm, colMd, colLg, colXl, colXxl } = this
      const { offset, offsetSm, offsetMd, offsetLg, offsetXl, offsetXxl } = this
      const { order, orderSm, orderMd, orderLg, orderXl, orderXxl } = this
      const { flexFill, flexSmFill, flexMdFill, flexLgFill, flexXlFill, flexXxlFill } = this
      const { flexGrow, flexSmGrow, flexMdGrow, flexLgGrow, flexXlGrow, flexXxlGrow } = this
      const { flexShrink, flexSmShrink, flexMdShrink, flexLgShrink, flexXlShrink, flexXxlShrink } = this
      const { float, floatSm, floatMd, floatLg, floatXl, floatXxl } = this
      return {
        col: strToBool(col) === true, // проверяем что значение не является числом и является булевым типом
        'col-auto': col === 'auto',
        [`col-${col}`]: !!col && col !== 'auto' && col !== 'false', // проверяем что значение является числом
        'col-sm': colSm === 'true', // проверяем что значение не является числом и является булевым типом
        'col-sm-auto': colSm === 'auto',
        [`col-sm-${colSm}`]: !!colSm && colSm !== 'auto' && colSm !== 'false', // проверяем что значение является числом
        'col-md': colMd === 'true', // проверяем что значение не является числом и является булевым типом
        'col-md-auto': colMd === 'auto',
        [`col-md-${colMd}`]: !!colMd && colMd !== 'auto' && colMd !== 'false', // проверяем что значение является числом
        'col-lg': colLg === 'true', // проверяем что значение не является числом и является булевым типом
        'col-lg-auto': colLg === 'auto',
        [`col-lg-${colLg}`]: !!colLg && colLg !== 'auto' && colLg !== 'false', // проверяем что значение является числом
        'col-xl': colXl === 'true', // проверяем что значение не является числом и является булевым типом
        'col-xl-auto': colXl === 'auto',
        [`col-xl-${colXl}`]: !!colXl && colXl !== 'auto' && colXl !== 'false', // проверяем что значение является числом
        'col-xxl': colXxl === 'true', // проверяем что значение не является числом и является булевым типом
        'col-xxl-auto': colXxl === 'auto',
        [`col-xxl-${colXxl}`]: !!colXxl && colXxl !== 'auto' && colXxl !== 'false', // проверяем что значение является числом
        [`offset-${offset}`]: !!offset, // установка класса offset
        [`offset-sm-${offsetSm}`]: !!offsetSm, // установка класса offset-sm-*
        [`offset-md-${offsetMd}`]: !!offsetMd, // установка класса offset-md-*
        [`offset-lg-${offsetLg}`]: !!offsetLg, // установка класса offset-lg-*
        [`offset-xl-${offsetXl}`]: !!offsetXxl, // установка класса offset-xl-*
        [`offset-xxl-${offsetXxl}`]: !!offsetXxl, // установка класса offset-xxl-*
        [`order-${order}`]: !!order, // установка класса order
        [`order-sm-${orderSm}`]: !!orderSm, // установка класса order-sm-*
        [`order-md-${orderMd}`]: !!orderMd, // установка класса order-md-*
        [`order-lg-${orderLg}`]: !!orderLg, // установка класса order-lg-*
        [`order-xl-${orderXl}`]: !!orderXl, // установка класса order-xl-*
        [`order-xxl-${orderXxl}`]: !!orderXxl, // установка класса order-xxl-*
        'flex-fill': !!flexFill,
        'flex-sm-fill': !!flexSmFill,
        'flex-md-fill': !!flexMdFill,
        'flex-lg-fill': !!flexLgFill,
        'flex-xl-fill': !!flexXlFill,
        'flex-xxl-fill': !!flexXxlFill,
        [`flex-grow-${flexGrow}`]: !!flexGrow,
        [`flex-sm-grow-${flexSmGrow}`]: !!flexSmGrow,
        [`flex-md-grow-${flexMdGrow}`]: !!flexMdGrow,
        [`flex-lg-grow-${flexLgGrow}`]: !!flexLgGrow,
        [`flex-xl-grow-${flexXlGrow}`]: !!flexXlGrow,
        [`flex-xxl-grow-${flexXxlGrow}`]: !!flexXxlGrow,
        [`flex-shrink-${flexShrink}`]: !!flexGrow,
        [`flex-sm-shrink-${flexSmShrink}`]: !!flexSmShrink,
        [`flex-md-shrink-${flexMdShrink}`]: !!flexMdShrink,
        [`flex-lg-shrink-${flexLgShrink}`]: !!flexLgShrink,
        [`flex-xl-shrink-${flexXlShrink}`]: !!flexXlShrink,
        [`flex-xxl-shrink-${flexXxlShrink}`]: !!flexXxlShrink,
        [`float-${float}`]: !!float,
        [`float-sm-${floatSm}`]: !!floatSm,
        [`float-md-${floatMd}`]: !!floatMd,
        [`float-lg-${floatLg}`]: !!floatLg,
        [`float-xl-${floatXl}`]: !!floatXl,
        [`float-xxl-${floatXxl}`]: !!floatXxl,
      }
    },
  },
}
</script>
<style>
  .col {
    flex: 1 0 0%;
  }

  .col-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-1 {
    flex: 0 0 auto;
    width: 8.3333%;
  }

  .col-2 {
    flex: 0 0 auto;
    width: 16.6667%;
  }

  .col-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-4 {
    flex: 0 0 auto;
    width: 33.3333%;
  }

  .col-5 {
    flex: 0 0 auto;
    width: 41.6667%;
  }

  .col-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-7 {
    flex: 0 0 auto;
    width: 58.3333%;
  }

  .col-8 {
    flex: 0 0 auto;
    width: 66.6667%;
  }

  .col-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-10 {
    flex: 0 0 auto;
    width: 83.3333%;
  }

  .col-11 {
    flex: 0 0 auto;
    width: 91.6667%;
  }

  .col-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-1 {
    margin-left: 8.3333%;
  }

  .offset-2 {
    margin-left: 16.6667%;
  }

  .offset-3 {
    margin-left: 25%;
  }

  .offset-4 {
    margin-left: 33.3333%;
  }

  .offset-5 {
    margin-left: 41.6667%;
  }

  .offset-6 {
    margin-left: 50%;
  }

  .offset-7 {
    margin-left: 58.3333%;
  }

  .offset-8 {
    margin-left: 66.6667%;
  }

  .offset-9 {
    margin-left: 75%;
  }

  .offset-10 {
    margin-left: 83.3333%;
  }

  .offset-11 {
    margin-left: 91.6667%;
  }

  .order-first {
    order: -1 !important;
  }

  .order-0 {
    order: 0 !important;
  }

  .order-1 {
    order: 1 !important;
  }

  .order-2 {
    order: 2 !important;
  }

  .order-3 {
    order: 3 !important;
  }

  .order-4 {
    order: 4 !important;
  }

  .order-5 {
    order: 5 !important;
  }

  .order-last {
    order: 6 !important;
  }

  .flex-fill {
    flex: 1 1 auto !important;
  }

  .flex-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-shrink-1 {
    flex-shrink: 1 !important;
  }

  .float-start {
    float: left !important;
  }

  .float-end {
    float: right !important;
  }

  .float-none {
    float: none !important;
  }

  @media (min-width: 576px) {
    .col-sm {
      flex: 1 0 0%;
    }

    .col-sm-auto {
      flex: 0 0 auto;
      width: auto;
    }

    .col-sm-1 {
      flex: 0 0 auto;
      width: 8.3333%;
    }

    .col-sm-2 {
      flex: 0 0 auto;
      width: 16.6667%;
    }

    .col-sm-3 {
      flex: 0 0 auto;
      width: 25%;
    }

    .col-sm-4 {
      flex: 0 0 auto;
      width: 33.3333%;
    }

    .col-sm-5 {
      flex: 0 0 auto;
      width: 41.6667%;
    }

    .col-sm-6 {
      flex: 0 0 auto;
      width: 50%;
    }

    .col-sm-7 {
      flex: 0 0 auto;
      width: 58.3333%;
    }

    .col-sm-8 {
      flex: 0 0 auto;
      width: 66.6667%;
    }

    .col-sm-9 {
      flex: 0 0 auto;
      width: 75%;
    }

    .col-sm-10 {
      flex: 0 0 auto;
      width: 83.3333%;
    }

    .col-sm-11 {
      flex: 0 0 auto;
      width: 91.6667%;
    }

    .col-sm-12 {
      flex: 0 0 auto;
      width: 100%;
    }

    .offset-sm-0 {
      margin-left: 0;
    }

    .offset-sm-1 {
      margin-left: 8.3333%;
    }

    .offset-sm-2 {
      margin-left: 16.6667%;
    }

    .offset-sm-3 {
      margin-left: 25%;
    }

    .offset-sm-4 {
      margin-left: 33.3333%;
    }

    .offset-sm-5 {
      margin-left: 41.6667%;
    }

    .offset-sm-6 {
      margin-left: 50%;
    }

    .offset-sm-7 {
      margin-left: 58.3333%;
    }

    .offset-sm-8 {
      margin-left: 66.6667%;
    }

    .offset-sm-9 {
      margin-left: 75%;
    }

    .offset-sm-10 {
      margin-left: 83.3333%;
    }

    .offset-sm-11 {
      margin-left: 91.6667%;
    }

    .order-sm-first {
      order: -1 !important;
    }

    .order-sm-0 {
      order: 0 !important;
    }

    .order-sm-1 {
      order: 1 !important;
    }

    .order-sm-2 {
      order: 2 !important;
    }

    .order-sm-3 {
      order: 3 !important;
    }

    .order-sm-4 {
      order: 4 !important;
    }

    .order-sm-5 {
      order: 5 !important;
    }

    .order-sm-last {
      order: 6 !important;
    }

    .flex-sm-fill {
      flex: 1 1 auto !important;
    }

    .flex-sm-grow-0 {
      flex-grow: 0 !important;
    }
    .flex-sm-grow-1 {
      flex-grow: 1 !important;
    }

    .flex-sm-shrink-0 {
      flex-shrink: 0 !important;
    }
    .flex-sm-shrink-1 {
      flex-shrink: 1 !important;
    }

    .float-sm-start {
      float: left !important;
    }
    .float-sm-end {
      float: right !important;
    }
    .float-sm-none {
      float: none !important;
    }
  }

  @media (min-width: 768px) {
    .col-md {
      flex: 1 0 0%;
    }

    .col-md-auto {
      flex: 0 0 auto;
      width: auto;
    }

    .col-md-1 {
      flex: 0 0 auto;
      width: 8.3333%;
    }

    .col-md-2 {
      flex: 0 0 auto;
      width: 16.6667%;
    }

    .col-md-3 {
      flex: 0 0 auto;
      width: 25%;
    }

    .col-md-4 {
      flex: 0 0 auto;
      width: 33.3333%;
    }

    .col-md-5 {
      flex: 0 0 auto;
      width: 41.6667%;
    }

    .col-md-6 {
      flex: 0 0 auto;
      width: 50%;
    }

    .col-md-7 {
      flex: 0 0 auto;
      width: 58.3333%;
    }

    .col-md-8 {
      flex: 0 0 auto;
      width: 66.6667%;
    }

    .col-md-9 {
      flex: 0 0 auto;
      width: 75%;
    }

    .col-md-10 {
      flex: 0 0 auto;
      width: 83.3333%;
    }

    .col-md-11 {
      flex: 0 0 auto;
      width: 91.6667%;
    }

    .col-md-12 {
      flex: 0 0 auto;
      width: 100%;
    }

    .offset-md-0 {
      margin-left: 0;
    }

    .offset-md-1 {
      margin-left: 8.3333%;
    }

    .offset-md-2 {
      margin-left: 16.6667%;
    }

    .offset-md-3 {
      margin-left: 25%;
    }

    .offset-md-4 {
      margin-left: 33.3333%;
    }

    .offset-md-5 {
      margin-left: 41.6667%;
    }

    .offset-md-6 {
      margin-left: 50%;
    }

    .offset-md-7 {
      margin-left: 58.3333%;
    }

    .offset-md-8 {
      margin-left: 66.6667%;
    }

    .offset-md-9 {
      margin-left: 75%;
    }

    .offset-md-10 {
      margin-left: 83.3333%;
    }

    .offset-md-11 {
      margin-left: 91.6667%;
    }

    .order-md-first {
      order: -1 !important;
    }

    .order-md-0 {
      order: 0 !important;
    }

    .order-md-1 {
      order: 1 !important;
    }

    .order-md-2 {
      order: 2 !important;
    }

    .order-md-3 {
      order: 3 !important;
    }

    .order-md-4 {
      order: 4 !important;
    }

    .order-md-5 {
      order: 5 !important;
    }

    .order-md-last {
      order: 6 !important;
    }

    .flex-md-fill {
      flex: 1 1 auto !important;
    }

    .flex-md-grow-0 {
      flex-grow: 0 !important;
    }
    .flex-md-grow-1 {
      flex-grow: 1 !important;
    }

    .flex-md-shrink-0 {
      flex-shrink: 0 !important;
    }
    .flex-md-shrink-1 {
      flex-shrink: 1 !important;
    }

    .float-md-start {
      float: left !important;
    }
    .float-md-end {
      float: right !important;
    }
    .float-md-none {
      float: none !important;
    }
  }

  @media (min-width: 992px) {
    .col-lg {
      flex: 1 0 0%;
    }

    .col-lg-auto {
      flex: 0 0 auto;
      width: auto;
    }

    .col-lg-1 {
      flex: 0 0 auto;
      width: 8.3333%;
    }

    .col-lg-2 {
      flex: 0 0 auto;
      width: 16.6667%;
    }

    .col-lg-3 {
      flex: 0 0 auto;
      width: 25%;
    }

    .col-lg-4 {
      flex: 0 0 auto;
      width: 33.3333%;
    }

    .col-lg-5 {
      flex: 0 0 auto;
      width: 41.6667%;
    }

    .col-lg-6 {
      flex: 0 0 auto;
      width: 50%;
    }

    .col-lg-7 {
      flex: 0 0 auto;
      width: 58.3333%;
    }

    .col-lg-8 {
      flex: 0 0 auto;
      width: 66.6667%;
    }

    .col-lg-9 {
      flex: 0 0 auto;
      width: 75%;
    }

    .col-lg-10 {
      flex: 0 0 auto;
      width: 83.3333%;
    }

    .col-lg-11 {
      flex: 0 0 auto;
      width: 91.6667%;
    }

    .col-lg-12 {
      flex: 0 0 auto;
      width: 100%;
    }

    .offset-lg-0 {
      margin-left: 0;
    }

    .offset-lg-1 {
      margin-left: 8.3333%;
    }

    .offset-lg-2 {
      margin-left: 16.6667%;
    }

    .offset-lg-3 {
      margin-left: 25%;
    }

    .offset-lg-4 {
      margin-left: 33.3333%;
    }

    .offset-lg-5 {
      margin-left: 41.6667%;
    }

    .offset-lg-6 {
      margin-left: 50%;
    }

    .offset-lg-7 {
      margin-left: 58.3333%;
    }

    .offset-lg-8 {
      margin-left: 66.6667%;
    }

    .offset-lg-9 {
      margin-left: 75%;
    }

    .offset-lg-10 {
      margin-left: 83.3333%;
    }

    .offset-lg-11 {
      margin-left: 91.6667%;
    }

    .order-lg-first {
      order: -1 !important;
    }

    .order-lg-0 {
      order: 0 !important;
    }

    .order-lg-1 {
      order: 1 !important;
    }

    .order-lg-2 {
      order: 2 !important;
    }

    .order-lg-3 {
      order: 3 !important;
    }

    .order-lg-4 {
      order: 4 !important;
    }

    .order-lg-5 {
      order: 5 !important;
    }

    .order-lg-last {
      order: 6 !important;
    }

    .flex-lg-fill {
      flex: 1 1 auto !important;
    }

    .flex-lg-grow-0 {
      flex-grow: 0 !important;
    }
    .flex-lg-grow-1 {
      flex-grow: 1 !important;
    }

    .flex-lg-shrink-0 {
      flex-shrink: 0 !important;
    }
    .flex-lg-shrink-1 {
      flex-shrink: 1 !important;
    }

    .float-lg-start {
      float: left !important;
    }
    .float-lg-end {
      float: right !important;
    }
    .float-lg-none {
      float: none !important;
    }
  }

  @media (min-width: 1200px) {
    .col-xl {
      flex: 1 0 0%;
    }

    .col-xl-auto {
      flex: 0 0 auto;
      width: auto;
    }

    .col-xl-1 {
      flex: 0 0 auto;
      width: 8.3333%;
    }

    .col-xl-2 {
      flex: 0 0 auto;
      width: 16.6667%;
    }

    .col-xl-3 {
      flex: 0 0 auto;
      width: 25%;
    }

    .col-xl-4 {
      flex: 0 0 auto;
      width: 33.3333%;
    }

    .col-xl-5 {
      flex: 0 0 auto;
      width: 41.6667%;
    }

    .col-xl-6 {
      flex: 0 0 auto;
      width: 50%;
    }

    .col-xl-7 {
      flex: 0 0 auto;
      width: 58.3333%;
    }

    .col-xl-8 {
      flex: 0 0 auto;
      width: 66.6667%;
    }

    .col-xl-9 {
      flex: 0 0 auto;
      width: 75%;
    }

    .col-xl-10 {
      flex: 0 0 auto;
      width: 83.3333%;
    }

    .col-xl-11 {
      flex: 0 0 auto;
      width: 91.6667%;
    }

    .col-xl-12 {
      flex: 0 0 auto;
      width: 100%;
    }

    .offset-xl-0 {
      margin-left: 0;
    }

    .offset-xl-1 {
      margin-left: 8.3333%;
    }

    .offset-xl-2 {
      margin-left: 16.6667%;
    }

    .offset-xl-3 {
      margin-left: 25%;
    }

    .offset-xl-4 {
      margin-left: 33.3333%;
    }

    .offset-xl-5 {
      margin-left: 41.6667%;
    }

    .offset-xl-6 {
      margin-left: 50%;
    }

    .offset-xl-7 {
      margin-left: 58.3333%;
    }

    .offset-xl-8 {
      margin-left: 66.6667%;
    }

    .offset-xl-9 {
      margin-left: 75%;
    }

    .offset-xl-10 {
      margin-left: 83.3333%;
    }

    .offset-xl-11 {
      margin-left: 91.6667%;
    }

    .order-xl-first {
      order: -1 !important;
    }

    .order-xl-0 {
      order: 0 !important;
    }

    .order-xl-1 {
      order: 1 !important;
    }

    .order-xl-2 {
      order: 2 !important;
    }

    .order-xl-3 {
      order: 3 !important;
    }

    .order-xl-4 {
      order: 4 !important;
    }

    .order-xl-5 {
      order: 5 !important;
    }

    .order-xl-last {
      order: 6 !important;
    }

    .flex-xl-fill {
      flex: 1 1 auto !important;
    }

    .flex-xl-grow-0 {
      flex-grow: 0 !important;
    }
    .flex-xl-grow-1 {
      flex-grow: 1 !important;
    }

    .flex-xl-shrink-0 {
      flex-shrink: 0 !important;
    }
    .flex-xl-shrink-1 {
      flex-shrink: 1 !important;
    }

    .float-xl-start {
      float: left !important;
    }
    .float-xl-end {
      float: right !important;
    }
    .float-xl-none {
      float: none !important;
    }
  }

  @media (min-width: 1400px) {
    .col-xxl {
      flex: 1 0 0%;
    }

    .col-xxl-auto {
      flex: 0 0 auto;
      width: auto;
    }

    .col-xxl-1 {
      flex: 0 0 auto;
      width: 8.3333%;
    }

    .col-xxl-2 {
      flex: 0 0 auto;
      width: 16.6667%;
    }

    .col-xxl-3 {
      flex: 0 0 auto;
      width: 25%;
    }

    .col-xxl-4 {
      flex: 0 0 auto;
      width: 33.3333%;
    }

    .col-xxl-5 {
      flex: 0 0 auto;
      width: 41.6667%;
    }

    .col-xxl-6 {
      flex: 0 0 auto;
      width: 50%;
    }

    .col-xxl-7 {
      flex: 0 0 auto;
      width: 58.3333%;
    }

    .col-xxl-8 {
      flex: 0 0 auto;
      width: 66.6667%;
    }

    .col-xxl-9 {
      flex: 0 0 auto;
      width: 75%;
    }

    .col-xxl-10 {
      flex: 0 0 auto;
      width: 83.3333%;
    }

    .col-xxl-11 {
      flex: 0 0 auto;
      width: 91.6667%;
    }

    .col-xxl-12 {
      flex: 0 0 auto;
      width: 100%;
    }

    .offset-xxl-0 {
      margin-left: 0;
    }

    .offset-xxl-1 {
      margin-left: 8.3333%;
    }

    .offset-xxl-2 {
      margin-left: 16.6667%;
    }

    .offset-xxl-3 {
      margin-left: 25%;
    }

    .offset-xxl-4 {
      margin-left: 33.3333%;
    }

    .offset-xxl-5 {
      margin-left: 41.6667%;
    }

    .offset-xxl-6 {
      margin-left: 50%;
    }

    .offset-xxl-7 {
      margin-left: 58.3333%;
    }

    .offset-xxl-8 {
      margin-left: 66.6667%;
    }

    .offset-xxl-9 {
      margin-left: 75%;
    }

    .offset-xxl-10 {
      margin-left: 83.3333%;
    }

    .offset-xxl-11 {
      margin-left: 91.6667%;
    }

    .order-xxl-first {
      order: -1 !important;
    }

    .order-xxl-0 {
      order: 0 !important;
    }

    .order-xxl-1 {
      order: 1 !important;
    }

    .order-xxl-2 {
      order: 2 !important;
    }

    .order-xxl-3 {
      order: 3 !important;
    }

    .order-xxl-4 {
      order: 4 !important;
    }

    .order-xxl-5 {
      order: 5 !important;
    }

    .order-xxl-last {
      order: 6 !important;
    }
    .flex-xxl-fill {
      flex: 1 1 auto !important;
    }

    .flex-xxl-grow-0 {
      flex-grow: 0 !important;
    }
    .flex-xxl-grow-1 {
      flex-grow: 1 !important;
    }

    .flex-xxl-shrink-0 {
      flex-shrink: 0 !important;
    }
    .flex-xxl-shrink-1 {
      flex-shrink: 1 !important;
    }

    .float-xxl-start {
      float: left !important;
    }
    .float-xxl-end {
      float: right !important;
    }
    .float-xxl-none {
      float: none !important;
    }
  }
</style>
