<template>
  <div :class="classes" v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<script>
const validRow = ['1', '2', '3', '4', '5', '6', 'auto', null]
export default {
  inheritAttrs: true,
  props: {
    /* Класс row */
    row: {
      type: String,
      default: 'true',
    },
    /* Класс row-cols-* */
    rowCols: {
      type: String,
      default: null,
      validator(value) {
        return validRow.includes(value)
      },
    },
    /* Класс row-cols-sm-* */
    rowColsSm: {
      type: String,
      default: null,
      validator(value) {
        return validRow.includes(value)
      },
    },
    /* Класс row-cols-md-* */
    rowColsMd: {
      type: String,
      default: null,
      validator(value) {
        return validRow.includes(value)
      },
    },
    /* Класс row-cols-lg-* */
    rowColsLg: {
      type: String,
      default: null,
      validator(value) {
        return validRow.includes(value)
      },
    },
    /* Класс row-cols-xl-* */
    rowColsXl: {
      type: String,
      default: null,
      validator(value) {
        return validRow.includes(value)
      },
    },
    /* Класс row-cols-xxl-* */
    rowColsXxl: {
      type: String,
      default: null,
      validator(value) {
        return validRow.includes(value)
      },
    },
  },
  computed: {
    classes() {
      const { row, rowCols, rowColsSm, rowColsMd, rowColsLg, rowColsXl, rowColsXxl } = this
      return {
        row,
        [`row-cols-${rowCols}`]: rowCols,
        [`row-cols-sm-${rowColsSm}`]: rowColsSm,
        [`row-cols-md-${rowColsMd}`]: rowColsMd,
        [`row-cols-lg-${rowColsLg}`]: rowColsLg,
        [`row-cols-xl-${rowColsXl}`]: rowColsXl,
        [`row-cols-xxl-${rowColsXxl}`]: rowColsXxl,
      }
    },
  },
}
</script>
<style>


  .row-cols-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-3 > * {
    flex: 0 0 auto;
    width: 33.3333%;
  }

  .row-cols-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-6 > * {
    flex: 0 0 auto;
    width: 16.6667%;
  }

  @media (min-width: 576px) {
    .row-cols-sm-auto > * {
      flex: 0 0 auto;
      width: auto;
    }

    .row-cols-sm-1 > * {
      flex: 0 0 auto;
      width: 100%;
    }

    .row-cols-sm-2 > * {
      flex: 0 0 auto;
      width: 50%;
    }

    .row-cols-sm-3 > * {
      flex: 0 0 auto;
      width: 33.3333%;
    }

    .row-cols-sm-4 > * {
      flex: 0 0 auto;
      width: 25%;
    }

    .row-cols-sm-5 > * {
      flex: 0 0 auto;
      width: 20%;
    }

    .row-cols-sm-6 > * {
      flex: 0 0 auto;
      width: 16.6667%;
    }
  }

  @media (min-width: 768px) {
    .row-cols-md-auto > * {
      flex: 0 0 auto;
      width: auto;
    }

    .row-cols-md-1 > * {
      flex: 0 0 auto;
      width: 100%;
    }

    .row-cols-md-2 > * {
      flex: 0 0 auto;
      width: 50%;
    }

    .row-cols-md-3 > * {
      flex: 0 0 auto;
      width: 33.3333%;
    }

    .row-cols-md-4 > * {
      flex: 0 0 auto;
      width: 25%;
    }

    .row-cols-md-5 > * {
      flex: 0 0 auto;
      width: 20%;
    }

    .row-cols-md-6 > * {
      flex: 0 0 auto;
      width: 16.6667%;
    }
  }

  @media (min-width: 992px) {
    .row-cols-lg-auto > * {
      flex: 0 0 auto;
      width: auto;
    }

    .row-cols-lg-1 > * {
      flex: 0 0 auto;
      width: 100%;
    }

    .row-cols-lg-2 > * {
      flex: 0 0 auto;
      width: 50%;
    }

    .row-cols-lg-3 > * {
      flex: 0 0 auto;
      width: 33.3333%;
    }

    .row-cols-lg-4 > * {
      flex: 0 0 auto;
      width: 25%;
    }

    .row-cols-lg-5 > * {
      flex: 0 0 auto;
      width: 20%;
    }

    .row-cols-lg-6 > * {
      flex: 0 0 auto;
      width: 16.6667%;
    }
  }
  @media (min-width: 1200px) {
    .row-cols-xl-auto > * {
      flex: 0 0 auto;
      width: auto;
    }

    .row-cols-xl-1 > * {
      flex: 0 0 auto;
      width: 100%;
    }

    .row-cols-xl-2 > * {
      flex: 0 0 auto;
      width: 50%;
    }

    .row-cols-xl-3 > * {
      flex: 0 0 auto;
      width: 33.3333%;
    }

    .row-cols-xl-4 > * {
      flex: 0 0 auto;
      width: 25%;
    }

    .row-cols-xl-5 > * {
      flex: 0 0 auto;
      width: 20%;
    }

    .row-cols-xl-6 > * {
      flex: 0 0 auto;
      width: 16.6667%;
    }
  }
  @media (min-width: 1400px) {
    .row-cols-xxl-auto > * {
      flex: 0 0 auto;
      width: auto;
    }

    .row-cols-xxl-1 > * {
      flex: 0 0 auto;
      width: 100%;
    }

    .row-cols-xxl-2 > * {
      flex: 0 0 auto;
      width: 50%;
    }

    .row-cols-xxl-3 > * {
      flex: 0 0 auto;
      width: 33.3333%;
    }

    .row-cols-xxl-4 > * {
      flex: 0 0 auto;
      width: 25%;
    }

    .row-cols-xxl-5 > * {
      flex: 0 0 auto;
      width: 20%;
    }

    .row-cols-xxl-6 > * {
      flex: 0 0 auto;
      width: 16.6667%;
    }
  }
</style>
