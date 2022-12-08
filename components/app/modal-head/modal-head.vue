<!-- Заголовок модального окна -->
<template>
  <app-row class="justify-content-end p-1 px-3 bg-grey-darken-3 modal-header">
    <app-col col="10">
      <app-h
        level="5"
        class="justify-content-center d-flex m-0 cursor-default no-select"
      >{{ title }}</app-h>
    </app-col>
    <app-button-close class="bg-white" @click="$emit('click', $event)"></app-button-close>
  </app-row>
</template>

<script>
import appRow from './../row/row.vue'
import appCol from './../col/col.vue'
import appH from './../h/h.vue'
import appBtnClose from './../button/close/close.vue'
export default {
  components: {
    'app-row': appRow,
    'app-col': appCol,
    'app-button-close': appBtnClose,
    'app-h': appH,
  },
  props: {
    /* Заголовок */
    title: {
      type: String,
      default: null,
    },
  },
}
</script>

<style>
  @import './../../../assets/css/text/text.css';
  .cursor-default {
    cursor: default;
  }
</style>
