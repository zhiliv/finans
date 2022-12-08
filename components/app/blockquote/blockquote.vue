<template>
  <div :class="classParent">
    <blockquote :class="[{'blockquote': true}, $attrs.class]" v-bind="$attrs">
      <slot></slot>
    </blockquote>
    <template v-if="$slots.footer">
      <app-figcaption :class="[{'blockquote-footer': true}, classFooter]">
        <slot name="footer"></slot>
      </app-figcaption>
    </template>
  </div>
</template>

<script>
import appFigcaption from './../figcaption/figcaption.vue'
export default {
  components: {
    'app-figcaption': appFigcaption
  },
  props: {
    /*
    * Классы для нижней подписи
    */
    classFooter: {
      type: String,
      default: ''
    },
    /*
    * Классы для родительского блока
    */
    classParent: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
  blockquote {
    margin: 0 0 1rem;
  }

  .blockquote {
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  .blockquote > :last-child {
    margin-bottom: 0;
  }

  .blockquote-footer {
    margin-top: -1rem;
    margin-bottom: 1rem;
    font-size: 0.875em;
    color: #6c757d;
  }

  .blockquote-footer::before {
    content: '—';
  }
</style>
