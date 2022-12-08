<template>
  <img :src="src" :class="classes" v-bind="$attrs" @click="$emit('click', $event)" />
</template>

<script>
export default {
  props: {
    /* Ссылка на изображение */
    src: {
      type: String,
      default: null,
    },
    /* Класс img-fluid */
    imgFluid: {
      type: Boolean,
      default: null,
      validator(value) {
        return value === null || value === 'true'
      },
    },
    /* Класс img-thumbnail */
    imgThumbnail: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      const { imgFluid, imgThumbnail } = this
      return {
        'img-fluid': !!imgFluid,
        'img-thumbnail': !!imgThumbnail,
      }
    },
  },
}
</script>

<style>
  img {
    vertical-align: middle;
  }

  .img-fluid {
    max-width: 100%;
    height: auto;
  }

  .img-thumbnail {
    padding: 0.25rem;
    background-color: #fff;
    border: 1px solid var(--bs-border-color);
    border-radius: 0.375rem;
    max-width: 100%;
    height: auto;
  }

  .figure-img {
    margin-bottom: 0.5rem;
    line-height: 1;
  }
</style>
