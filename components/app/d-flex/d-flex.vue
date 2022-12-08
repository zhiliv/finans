<template>
  <div :class="classes" v-bind="$attrs">
    <slot></slot>
  </div>
</template>
<script>
import { strToBool, isBoolean } from '../../../scripts/component/func'
const validJustifyContent = ['start', 'end', 'center', 'between', 'around', 'every'] // доступные варианты для  justify-content-*
const validAlignItem = ['start', 'end', 'center', 'baseline', 'stretch'] // доступные варианты align-item-*
const validAlignContent = ['start', 'end', 'center', 'between', 'around', 'stretch'] // доступные варианты для align-content
const validAlignSelf = ['auto', 'start', 'end', 'center', 'baseline', 'stretch'] // доступные варианты для align-self-*
export default {
  props: {
    /*
     * Класс d-flex
     */
    dFlex: {
      type: [String, Boolean],
      default: true,
      validator(value) {
        return isBoolean(strToBool(value))
      },
    },
    /*
     * Класс d-sm-flex
     */
    dSmFlex: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Класс d-md-flex
     */
    dMdFlex: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Класс d-lg-flex
     */
    dLgFlex: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Класс d-xl-flex
     */
    dXlFlex: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Класс d-xxl-flex
     */
    dXxlFlex: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Класс d-inline-flex
     */
    dInlineFlex: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Класс d-sm-inline-flex
     */
    dSmInlineFlex: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Класс d-md-inline-flex
     */
    dMdInlineFlex: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Класс d-lg-inline-flex
     */
    dLgInlineFlex: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Класс d-xl-inline-flex
     */
    dXlInlineFlex: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Класс d-xxl-inline-flex
     */
    dXxlInlineFlex: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Класс flex-row
     */
    flexRow: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Класс flex-sm-row
     */
    flexSmRow: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Класс flex-md-row
     */
    flexMdRow: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Класс flex-lg-row
     */
    flexLgRow: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Класс flex-xl-row
     */
    flexXlRow: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Класс flex-xxl-row
     */
    flexXxlRow: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Класс flex-row-reverse
     */
    flexRowReverse: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Класс flex-sm-row-reverse
     */
    flexSmRowReverse: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Класс flex-md-row-reverse
     */
    flexMdRowReverse: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Класс flex-lg-row-reverse
     */
    flexLgRowReverse: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Класс flex-xl-row-reverse
     */
    flexXlRowReverse: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Класс flex-xxl-row-reverse
     */
    flexXxlRowReverse: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Класс flex-column
     */
    flexColumn: {
      type: String,
      default: null,
      validator(value) {
        return value === true || value === null
      },
    },
    /*
     * Класс flex-sm-column
     */
    flexSmColumn: {
      type: String,
      default: null,
      validator(value) {
        return value === true || value === null
      },
    },
    /*
     * Класс flex-md-column
     */
    flexMdColumn: {
      type: String,
      default: null,
      validator(value) {
        return value === true || value === null
      },
    },
    /*
     * Класс flex-lg-column
     */
    flexLgColumn: {
      type: String,
      default: null,
      validator(value) {
        return value === true || value === null
      },
    },
    /*
     * Класс flex-xl-column
     */
    flexXlColumn: {
      type: String,
      default: null,
      validator(value) {
        return value === true || value === null
      },
    },
    /*
     * Класс flex-xxl-column
     */
    flexXxlColumn: {
      type: String,
      default: null,
      validator(value) {
        return value === true || value === null
      },
    },

    /*
     * Класс flex-column-reverse
     */
    flexColumnReverse: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Класс flex-sm-column-reverse
     */
    flexSmColumnReverse: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Класс flex-md-column-reverse
     */
    flexMdColumnReverse: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Класс flex-lg-column-reverse
     */
    flexLgColumnReverse: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Класс flex-xl-column-reverse
     */
    flexXlColumnReverse: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Класс flex-column-xxl-reverse
     */
    flexXxlColumnReverse: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Классы justify-content-*
     */
    justifyContent: {
      type: String,
      default: null,
      validator(value) {
        return validJustifyContent.includes(value) || value === null
      },
    },
    /*
     * Классы justify-content-sm-*
     */
    justifyContentSm: {
      type: String,
      default: null,
      validator(value) {
        return validJustifyContent.includes(value) || value === null
      },
    },
    /*
     * Классы justify-content-md-*
     */
    justifyContentMd: {
      type: String,
      default: null,
      validator(value) {
        return validJustifyContent.includes(value) || value === null
      },
    },
    /*
     * Классы justify-content-xl-*
     */
    justifyContentLg: {
      type: String,
      default: null,
      validator(value) {
        return validJustifyContent.includes(value) || value === null
      },
    },
    /*
     * Классы justify-content-xxl*
     */
    justifyContentXl: {
      type: String,
      default: null,
      validator(value) {
        return validJustifyContent.includes(value) || value === null
      },
    },
    /*
     * Классы justify-content-*
     */
    justifyContentXxl: {
      type: String,
      default: null,
      validator(value) {
        return validJustifyContent.includes(value) || value === null
      },
    },
    /*
     * Классы align-item-*
     */
    alignItems: {
      type: String,
      default: null,
      validator(value) {
        return validAlignItem.includes(value) || value === null
      },
    },
    /*
     * Классы align-item-sm-*
     */
    alignItemsSm: {
      type: String,
      default: null,
      validator(value) {
        return validAlignItem.includes(value) || value === null
      },
    },
    /*
     * Классы align-item-md-*
     */
    alignItemsMd: {
      type: String,
      default: null,
      validator(value) {
        return validAlignItem.includes(value) || value === null
      },
    },
    /*
     * Классы align-item-lg-*
     */
    alignItemsLg: {
      type: String,
      default: null,
      validator(value) {
        return validAlignItem.includes(value) || value === null
      },
    },
    /*
     * Классы align-item-xl-*
     */
    alignItemsXl: {
      type: String,
      default: null,
      validator(value) {
        return validAlignItem.includes(value) || value === null
      },
    },
    /*
     * Классы align-item-xxl-*
     */
    alignItemsXxl: {
      type: String,
      default: null,
      validator(value) {
        return validAlignItem.includes(value) || value === null
      },
    },
    /*
     * Классы align-content-*
     */
    alignContent: {
      type: String,
      default: null,
      validator(value) {
        return validAlignContent.includes(value) || value === null
      },
    },
    /*
     * Классы align-content-sm-*
     */
    alignContentSm: {
      type: String,
      default: null,
      validator(value) {
        return validAlignContent.includes(value) || value === null
      },
    },
    /*
     * Классы align-content-md-*
     */
    alignContentMd: {
      type: String,
      default: null,
      validator(value) {
        return validAlignContent.includes(value) || value === null
      },
    },
    /*
     * Классы align-content-lg-*
     */
    alignContentLg: {
      type: String,
      default: null,
      validator(value) {
        return validAlignContent.includes(value) || value === null
      },
    },
    /*
     * Классы align-content-xl-*
     */
    alignContentXl: {
      type: String,
      default: null,
      validator(value) {
        return validAlignContent.includes(value) || value === null
      },
    },
    /*
     * Классы align-content-xxl-*
     */
    alignContentXxl: {
      type: String,
      default: null,
      validator(value) {
        return validAlignContent.includes(value) || value === null
      },
    },
    /*
     * Классы align-self-*
     */
    alignSelf: {
      type: String,
      default: null,
      validator(value) {
        return validAlignSelf.includes(value) || value === null
      },
    },
    /*
     * Классы align-self-sm-*
     */
    alignSelfSm: {
      type: String,
      default: null,
      validator(value) {
        return validAlignSelf.includes(value) || value === null
      },
    },
    /*
     * Классы align-self-md-*
     */
    alignSelfMd: {
      type: String,
      default: null,
      validator(value) {
        return validAlignSelf.includes(value) || value === null
      },
    },
    /*
     * Классы align-self-Lg*
     */
    alignSelfLg: {
      type: String,
      default: null,
      validator(value) {
        return validAlignSelf.includes(value) || value === null
      },
    },
    /*
     * Классы align-self-Xl*
     */
    alignSelfXl: {
      type: String,
      default: null,
      validator(value) {
        return validAlignSelf.includes(value) || value === null
      },
    },
    /*
     * Классы align-self-xxl-*
     */
    alignSelfXxl: {
      type: String,
      default: null,
      validator(value) {
        return validAlignSelf.includes(value) || value === null
      },
    },
    /*
     * Классы flex-nowrap
     */
    flexNowrap: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Классы flex-sm-nowrap
     */
    flexSmNowrap: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Классы flex-md-nowrap
     */
    flexMdNowrap: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Классы flex-lg-nowrap
     */
    flexLgNowrap: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Классы flex-xl-nowrap
     */
    flexXlNowrap: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Классы flex-xxl-nowrap
     */
    flexXxlNowrap: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Классы flex-wrap
     */
    flexWrap: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Классы flex-sm-wrap
     */
    flexSmWrap: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Классы flex-md-wrap
     */
    flexMdWrap: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Классы flex-lg-wrap
     */
    flexLgWrap: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Классы flex-xl-wrap
     */
    flexXlWrap: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Классы flex-xxl-wrap
     */
    flexXxlWrap: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Классы flex-wrap-reverse
     */
    flexWrapReverse: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Классы flex-sm-wrap-reverse
     */
    flexSmWrapReverse: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Классы flex-md-wrap-reverse
     */
    flexMdWrapReverse: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Классы flex-lg-wrap-reverse
     */
    flexLgWrapReverse: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Классы flex-xl-wrap-reverse
     */
    flexXlWrapReverse: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
    /*
     * Классы flex-xxl-wrap-reverse
     */
    flexXxlWrapReverse: {
      type: String,
      default: null,
      validator(value) {
        return value === 'true' || value === null
      },
    },
  },
  computed: {
    classes() {
      const { dInlineFlex, dSmInlineFlex, dMdInlineFlex, dLgInlineFlex, dXlInlineFlex, dXxlInlineFlex } = this
      const { dFlex, dSmFlex, dMdFlex, dLgFlex, dXlFlex, dXxlFlex } = this
      const { flexRow, flexSmRow, flexMdRow, flexLgRow, flexXlRow, flexXxlRow } = this
      const {
        flexRowReverse,
        flexSmRowReverse,
        flexMdRowReverse,
        flexLgRowReverse,
        flexXlRowReverse,
        flexXxlRowReverse,
      } = this
      const { flexColumn, flexSmColumn, flexMdColumn, flexLgColumn, flexXlColumn, flexXxlColumn } = this
      const {
        flexColumnReverse,
        flexSmColumnReverse,
        flexMdColumnReverse,
        flexLgColumnReverse,
        flexXlColumnReverse,
        flexXxlColumnReverse,
      } = this
      const {
        justifyContent,
        justifyContentSm,
        justifyContentMd,
        justifyContentLg,
        justifyContentXl,
        justifyContentXxl,
      } = this
      const { alignItems, alignItemsSm, alignItemsMd, alignItemsLg, alignItemsXl, alignItemsXxl } = this
      const { alignContent, alignContentSm, alignContentMd, alignContentLg, alignContentXl, alignContentXxl } = this
      const { alignSelf, alignSelfSm, alignSelfMd, alignSelfLg, alignSelfXl, alignSelfXxl } = this
      const { flexNowrap, flexSmNowrap, flexMdNowrap, flexLgNowrap, flexXlNowrap, flexXxlNowrap } = this
      const { flexWrap, flexSmWrap, flexMdWrap, flexLgWrap, flexXlWrap, flexXxlWrap } = this
      const {
        flexWrapReverse,
        flexSmWrapReverse,
        flexMdWrapReverse,
        flexLgWrapReverse,
        flexXlWrapReverse,
        flexXxlWrapReverse,
      } = this
      return {
        'd-flex': !dInlineFlex && !!dFlex,
        'd-sm-flex': !!dSmFlex,
        'd-md-flex': !!dMdFlex,
        'd-lg-flex': !!dLgFlex,
        'd-xl-flex': !!dXlFlex,
        'd-xxl-flex': !!dXxlFlex,
        'd-inline-flex': !!dInlineFlex,
        'd-sm-inline-flex': !!dSmInlineFlex,
        'd-md-inline-flex': !!dMdInlineFlex,
        'd-lg-inline-flex': !!dLgInlineFlex,
        'd-xl-inline-flex': !!dXlInlineFlex,
        'd-xxl-inline-flex': !!dXxlInlineFlex,
        'flex-row': !!flexRow && !flexRowReverse,
        'flex-sm-row': !!flexSmRow,
        'flex-md-row': !!flexMdRow,
        'flex-lg-row': !!flexLgRow,
        'flex-xl-row': !!flexXlRow,
        'flex-xxl-row': !!flexXxlRow,
        'flex-row-reverse': !!flexRowReverse && !flexRow,
        'flex-sm-row-reverse': !!flexSmRowReverse,
        'flex-md-row-reverse': !!flexMdRowReverse,
        'flex-lg-row-reverse': !!flexLgRowReverse,
        'flex-xl-row-reverse': !!flexXlRowReverse,
        'flex-xxl-row-reverse': !!flexXxlRowReverse,
        'flex-column': !!flexColumn && !flexColumnReverse,
        'flex-sm-column': !!flexSmColumn,
        'flex-md-column': !!flexMdColumn,
        'flex-lg-column': !!flexLgColumn,
        'flex-xl-column': !!flexXlColumn,
        'flex-xxl-column': !!flexXxlColumn,
        'flex-column-reverse': !!flexColumnReverse && !flexColumn,
        'flex-sm-column-reverse': !!flexSmColumnReverse,
        'flex-md-column-reverse': !!flexMdColumnReverse,
        'flex-lg-column-reverse': !!flexLgColumnReverse,
        'flex-xl-column-reverse': !!flexXlColumnReverse,
        'flex-xxl-column-reverse': !!flexXxlColumnReverse,
        [`justify-content-${justifyContent}`]: !!justifyContent,
        [`justify-content-sm-${justifyContentSm}`]: !!justifyContentSm,
        [`justify-content-md-${justifyContentMd}`]: !!justifyContentMd,
        [`justify-content-lg-${justifyContentLg}`]: !!justifyContentLg,
        [`justify-content-xl-${justifyContentXl}`]: !!justifyContentXl,
        [`justify-content-xxl-${justifyContentXxl}`]: !!justifyContentXxl,
        [`align-items-${alignItems}`]: !!alignItems,
        [`align-items-sm-${alignItemsSm}`]: !!alignItemsSm,
        [`align-items-md-${alignItemsMd}`]: !!alignItemsMd,
        [`align-items-lg-${alignItemsLg}`]: !!alignItemsLg,
        [`align-items-xl-${alignItemsXl}`]: !!alignItemsXl,
        [`align-items-xxl-${alignItemsXxl}`]: !!alignItemsXxl,
        [`align-content-${alignContent}`]: !!alignContent,
        [`align-content-sm-${alignContentSm}`]: !!alignContentSm,
        [`align-content-md-${alignContentMd}`]: !!alignContentMd,
        [`align-content-lg-${alignContentLg}`]: !!alignContentLg,
        [`align-content-xl-${alignContentXl}`]: !!alignContentXl,
        [`align-content-xxl-${alignContentXxl}`]: !!alignContentXxl,
        [`align-self-${alignSelf}`]: !!alignSelf,
        [`align-self-sm-${alignSelfSm}`]: !!alignSelfSm,
        [`align-self-md-${alignSelfMd}`]: !!alignSelfMd,
        [`align-self-lg-${alignSelfLg}`]: !!alignSelfLg,
        [`align-self-xl-${alignSelfXl}`]: !!alignSelfXl,
        [`align-self-xxl-${alignSelfXxl}`]: !!alignSelfXxl,
        'flex-nowrap': !!flexNowrap,
        'flex-sm-nowrap': !!flexSmNowrap,
        'flex-md-nowrap': !!flexMdNowrap,
        'flex-lg-nowrap': !!flexLgNowrap,
        'flex-xl-nowrap': !!flexXlNowrap,
        'flex-xxl-nowrap': !!flexXxlNowrap,
        'flex-wrap': !!flexWrap,
        'flex-sm-wrap': !!flexSmWrap,
        'flex-md-wrap': !!flexMdWrap,
        'flex-lg-wrap': !!flexLgWrap,
        'flex-xl-wrap': !!flexXlWrap,
        'flex-xxl-wrap': !!flexXxlWrap,
        'flex-wrap-reverse': !!flexWrapReverse,
        'flex-sm-wrap-reverse': !!flexSmWrapReverse,
        'flex-md-wrap-reverse': !!flexMdWrapReverse,
        'flex-lg-wrap-reverse': !!flexLgWrapReverse,
        'flex-xl-wrap-reverse': !!flexXlWrapReverse,
        'flex-xxl-wrap-reverse': !!flexXxlWrapReverse,
      }
    },
  },
}
</script>
<style>
  .d-flex {
    display: flex !important;
  }

  .d-inline-flex {
    display: inline-flex !important;
  }
  .flex-row {
    flex-direction: row !important;
  }

  .flex-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-column {
    flex-direction: column !important;
  }

  .flex-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-wrap {
    flex-wrap: wrap !important;
  }

  .flex-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .flex-column-reverse {
    flex-direction: column-reverse !important;
  }

  .justify-content-start {
    justify-content: flex-start !important;
  }

  .justify-content-end {
    justify-content: flex-end !important;
  }

  .justify-content-center {
    justify-content: center !important;
  }

  .justify-content-between {
    justify-content: space-between !important;
  }

  .justify-content-around {
    justify-content: space-around !important;
  }

  .justify-content-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-start {
    align-items: flex-start !important;
  }

  .align-items-end {
    align-items: flex-end !important;
  }

  .align-items-center {
    align-items: center !important;
  }

  .align-items-baseline {
    align-items: baseline !important;
  }

  .align-items-stretch {
    align-items: stretch !important;
  }

  .align-content-start {
    align-content: flex-start !important;
  }

  .align-content-end {
    align-content: flex-end !important;
  }

  .align-content-center {
    align-content: center !important;
  }

  .align-content-between {
    align-content: space-between !important;
  }

  .align-content-around {
    align-content: space-around !important;
  }

  .align-content-stretch {
    align-content: stretch !important;
  }

  .align-self-auto {
    align-self: auto !important;
  }

  .align-self-start {
    align-self: flex-start !important;
  }

  .align-self-end {
    align-self: flex-end !important;
  }

  .align-self-center {
    align-self: center !important;
  }

  .align-self-baseline {
    align-self: baseline !important;
  }

  .align-self-stretch {
    align-self: stretch !important;
  }

  @media (min-width: 576px) {
    .d-sm-flex {
      display: flex !important;
    }

    .d-sm-inline-flex {
      display: inline-flex !important;
    }

    .flex-sm-row {
      flex-direction: row !important;
    }

    .flex-sm-row-reverse {
      flex-direction: row-reverse !important;
    }

    .flex-sm-column {
      flex-direction: column !important;
    }

    .flex-sm-column-reverse {
      flex-direction: column-reverse !important;
    }

    .flex-sm-wrap {
      flex-wrap: wrap !important;
    }

    .flex-sm-nowrap {
      flex-wrap: nowrap !important;
    }

    .flex-sm-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }

    .justify-content-sm-start {
      justify-content: flex-start !important;
    }
    .justify-content-sm-end {
      justify-content: flex-end !important;
    }
    .justify-content-sm-center {
      justify-content: center !important;
    }
    .justify-content-sm-between {
      justify-content: space-between !important;
    }
    .justify-content-sm-around {
      justify-content: space-around !important;
    }
    .justify-content-sm-evenly {
      justify-content: space-evenly !important;
    }
    .align-items-sm-start {
      align-items: flex-start !important;
    }
    .align-items-sm-end {
      align-items: flex-end !important;
    }
    .align-items-sm-center {
      align-items: center !important;
    }
    .align-items-sm-baseline {
      align-items: baseline !important;
    }
    .align-items-sm-stretch {
      align-items: stretch !important;
    }
    .align-content-sm-start {
      align-content: flex-start !important;
    }
    .align-content-sm-end {
      align-content: flex-end !important;
    }
    .align-content-sm-center {
      align-content: center !important;
    }
    .align-content-sm-between {
      align-content: space-between !important;
    }
    .align-content-sm-around {
      align-content: space-around !important;
    }
    .align-content-sm-stretch {
      align-content: stretch !important;
    }
    .align-self-sm-auto {
      align-self: auto !important;
    }
    .align-self-sm-start {
      align-self: flex-start !important;
    }
    .align-self-sm-end {
      align-self: flex-end !important;
    }
    .align-self-sm-center {
      align-self: center !important;
    }
    .align-self-sm-baseline {
      align-self: baseline !important;
    }
    .align-self-sm-stretch {
      align-self: stretch !important;
    }
  }

  @media (min-width: 768px) {
    .d-md-flex {
      display: flex !important;
    }

    .d-md-inline-flex {
      display: inline-flex !important;
    }

    .flex-md-row {
      flex-direction: row !important;
    }

    .flex-md-row-reverse {
      flex-direction: row-reverse !important;
    }

    .flex-md-column {
      flex-direction: column !important;
    }

    .flex-md-column-reverse {
      flex-direction: column-reverse !important;
    }

    .flex-md-wrap {
      flex-wrap: wrap !important;
    }

    .flex-md-nowrap {
      flex-wrap: nowrap !important;
    }

    .flex-md-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }

    .justify-content-md-start {
      justify-content: flex-start !important;
    }
    .justify-content-md-end {
      justify-content: flex-end !important;
    }
    .justify-content-md-center {
      justify-content: center !important;
    }
    .justify-content-md-between {
      justify-content: space-between !important;
    }
    .justify-content-md-around {
      justify-content: space-around !important;
    }
    .justify-content-md-evenly {
      justify-content: space-evenly !important;
    }
    .align-items-md-start {
      align-items: flex-start !important;
    }
    .align-items-md-end {
      align-items: flex-end !important;
    }
    .align-items-md-center {
      align-items: center !important;
    }
    .align-items-md-baseline {
      align-items: baseline !important;
    }
    .align-items-md-stretch {
      align-items: stretch !important;
    }
    .align-content-md-start {
      align-content: flex-start !important;
    }
    .align-content-md-end {
      align-content: flex-end !important;
    }
    .align-content-md-center {
      align-content: center !important;
    }
    .align-content-md-between {
      align-content: space-between !important;
    }
    .align-content-md-around {
      align-content: space-around !important;
    }
    .align-content-md-stretch {
      align-content: stretch !important;
    }
    .align-self-md-auto {
      align-self: auto !important;
    }
    .align-self-md-start {
      align-self: flex-start !important;
    }
    .align-self-md-end {
      align-self: flex-end !important;
    }
    .align-self-md-center {
      align-self: center !important;
    }
    .align-self-md-baseline {
      align-self: baseline !important;
    }
    .align-self-md-stretch {
      align-self: stretch !important;
    }
  }

  @media (min-width: 992px) {
    .d-lg-flex {
      display: flex !important;
    }

    .d-lg-inline-flex {
      display: inline-flex !important;
    }

    .flex-lg-row {
      flex-direction: row !important;
    }

    .flex-lg-row-reverse {
      flex-direction: row-reverse !important;
    }

    .flex-lg-column {
      flex-direction: column !important;
    }

    .flex-lg-column-reverse {
      flex-direction: column-reverse !important;
    }

    .flex-lg-wrap {
      flex-wrap: wrap !important;
    }

    .flex-lg-nowrap {
      flex-wrap: nowrap !important;
    }

    .flex-lg-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }

    .justify-content-lg-start {
      justify-content: flex-start !important;
    }
    .justify-content-lg-end {
      justify-content: flex-end !important;
    }
    .justify-content-lg-center {
      justify-content: center !important;
    }
    .justify-content-lg-between {
      justify-content: space-between !important;
    }
    .justify-content-lg-around {
      justify-content: space-around !important;
    }
    .justify-content-lg-evenly {
      justify-content: space-evenly !important;
    }
    .align-items-lg-start {
      align-items: flex-start !important;
    }
    .align-items-lg-end {
      align-items: flex-end !important;
    }
    .align-items-lg-center {
      align-items: center !important;
    }
    .align-items-lg-baseline {
      align-items: baseline !important;
    }
    .align-items-lg-stretch {
      align-items: stretch !important;
    }
    .align-content-lg-start {
      align-content: flex-start !important;
    }
    .align-content-lg-end {
      align-content: flex-end !important;
    }
    .align-content-lg-center {
      align-content: center !important;
    }
    .align-content-lg-between {
      align-content: space-between !important;
    }
    .align-content-lg-around {
      align-content: space-around !important;
    }
    .align-content-lg-stretch {
      align-content: stretch !important;
    }
    .align-self-lg-auto {
      align-self: auto !important;
    }
    .align-self-lg-start {
      align-self: flex-start !important;
    }
    .align-self-lg-end {
      align-self: flex-end !important;
    }
    .align-self-lg-center {
      align-self: center !important;
    }
    .align-self-lg-baseline {
      align-self: baseline !important;
    }
    .align-self-lg-stretch {
      align-self: stretch !important;
    }
  }

  @media (min-width: 1200px) {
    .d-xl-flex {
      display: flex !important;
    }

    .d-xl-inline-flex {
      display: inline-flex !important;
    }

    .flex-xl-row {
      flex-direction: row !important;
    }

    .flex-xl-row-reverse {
      flex-direction: row-reverse !important;
    }

    .flex-xl-column {
      flex-direction: column !important;
    }

    .flex-xl-column-reverse {
      flex-direction: column-reverse !important;
    }

    .flex-xl-wrap {
      flex-wrap: wrap !important;
    }

    .flex-xl-nowrap {
      flex-wrap: nowrap !important;
    }

    .flex-xl-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }

    .justify-content-xl-start {
      justify-content: flex-start !important;
    }
    .justify-content-xl-end {
      justify-content: flex-end !important;
    }
    .justify-content-xl-center {
      justify-content: center !important;
    }
    .justify-content-xl-between {
      justify-content: space-between !important;
    }
    .justify-content-xl-around {
      justify-content: space-around !important;
    }
    .justify-content-xl-evenly {
      justify-content: space-evenly !important;
    }
    .align-items-xl-start {
      align-items: flex-start !important;
    }
    .align-items-xl-end {
      align-items: flex-end !important;
    }
    .align-items-xl-center {
      align-items: center !important;
    }
    .align-items-xl-baseline {
      align-items: baseline !important;
    }
    .align-items-xl-stretch {
      align-items: stretch !important;
    }
    .align-content-xl-start {
      align-content: flex-start !important;
    }
    .align-content-xl-end {
      align-content: flex-end !important;
    }
    .align-content-xl-center {
      align-content: center !important;
    }
    .align-content-xl-between {
      align-content: space-between !important;
    }
    .align-content-xl-around {
      align-content: space-around !important;
    }
    .align-content-xl-stretch {
      align-content: stretch !important;
    }
    .align-self-xl-auto {
      align-self: auto !important;
    }
    .align-self-xl-start {
      align-self: flex-start !important;
    }
    .align-self-xl-end {
      align-self: flex-end !important;
    }
    .align-self-xl-center {
      align-self: center !important;
    }
    .align-self-xl-baseline {
      align-self: baseline !important;
    }
    .align-self-xl-stretch {
      align-self: stretch !important;
    }
  }

  @media (min-width: 1400px) {
    .d-xxl-flex {
      display: flex !important;
    }

    .d-xxl-inline-flex {
      display: inline-flex !important;
    }

    .flex-xxl-row {
      flex-direction: row !important;
    }

    .flex-xxl-row-reverse {
      flex-direction: row-reverse !important;
    }

    .flex-xxl-column {
      flex-direction: column !important;
    }

    .flex-xxl-column-reverse {
      flex-direction: column-reverse !important;
    }

    .flex-xxl-wrap {
      flex-wrap: wrap !important;
    }

    .flex-xxl-nowrap {
      flex-wrap: nowrap !important;
    }

    .flex-xxl-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }

    .justify-content-xxl-start {
      justify-content: flex-start !important;
    }
    .justify-content-xxl-end {
      justify-content: flex-end !important;
    }
    .justify-content-xxl-center {
      justify-content: center !important;
    }
    .justify-content-xxl-between {
      justify-content: space-between !important;
    }
    .justify-content-xxl-around {
      justify-content: space-around !important;
    }
    .justify-content-xxl-evenly {
      justify-content: space-evenly !important;
    }
    .align-items-xxl-start {
      align-items: flex-start !important;
    }
    .align-items-xxl-end {
      align-items: flex-end !important;
    }
    .align-items-xxl-center {
      align-items: center !important;
    }
    .align-items-xxl-baseline {
      align-items: baseline !important;
    }
    .align-items-xxl-stretch {
      align-items: stretch !important;
    }
    .align-content-xxl-start {
      align-content: flex-start !important;
    }
    .align-content-xxl-end {
      align-content: flex-end !important;
    }
    .align-content-xxl-center {
      align-content: center !important;
    }
    .align-content-xxl-between {
      align-content: space-between !important;
    }
    .align-content-xxl-around {
      align-content: space-around !important;
    }
    .align-content-xxl-stretch {
      align-content: stretch !important;
    }
    .align-self-xxl-auto {
      align-self: auto !important;
    }
    .align-self-xxl-start {
      align-self: flex-start !important;
    }
    .align-self-xxl-end {
      align-self: flex-end !important;
    }
    .align-self-xxl-center {
      align-self: center !important;
    }
    .align-self-xxl-baseline {
      align-self: baseline !important;
    }
    .align-self-xxl-stretch {
      align-self: stretch !important;
    }
  }
</style>
