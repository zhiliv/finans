<template>
  <div>
    <ul class="list-group m-0 h-100">
      <li v-for="item in list" :key="item[value]">{{item[text]}}</li>
    </ul>
    <app-spinner v-if="showSpinner && !isLoad" class="relative top-50 start-50" />
  </div>
</template>

<script>
import mixinFunction from '~/mixins/globalMixins'

export default {
  mixins: [mixinFunction],
  props: {
    /* Список */
    list: {
      type: Array,
      default: () => [],
    },

    /* Признак заполнения списка */
    isLoad: {
      type: [String, Boolean],
      default: false,
    },
    /* Отображать ли спиннер при отображении компонента */
    showSpinner: {
      type: [String, Boolean],
      default: false,
      validator(value) {
        return String(value) === 'true' || String(value) === 'false' || value === true || value === false
      },
    },
    /* Значение строки */
    value: {
      type: String,
      default: 'id',
    },
    text: {
      type: String,
      default: 'name',
    },
  },
  mounted() {},
  methods: {},
}
</script>

<style>
  @import '~/assets/css/position.css';
  @import '~/assets/css/margin.css';
  .list-group {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    border-radius: var(--bs-list-group-border-radius);
  }
</style>
