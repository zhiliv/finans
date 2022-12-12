<template>
  <img :src="src" :class="classes" @click="$emit('click', $event)" />
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
    fluid: {
      type: [String, Boolean],
      default: null,
      validator(value) {
        return String(value) === 'true'
      },
    },
    /* Класс img-thumbnail */
    thumbnail: {
      type: Boolean,
      default: false,
      validator(value) {
        return String(value) === 'true'
      },
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
