<!-- eslint-disable vue/valid-v-for -->
<template>
  <div aria-live="polite" aria-atomic="true" class="position-absolute end-0 bottom-0 toast-list">
    <div class="toast-container top-0 end-0 p-2" style>
      <app-body-toast
        v-for="item in listToast"
        :id="item.id"
        :key="item.id"
        :title="item.title"
        :message="item.message"
        :toast-color="item.type"
      ></app-body-toast>
    </div>
  </div>
</template>

<script>
import bodyToast from './body-toast/body-toast.vue'
export default {
  components: {
    'app-body-toast': bodyToast,
  },
  data() {
    return {
      listToast: [], // список уведомлений
    }
  },
  mounted() {
    let ind = 0
    this.$nuxt.$on('show-toast', event => {
      const { params } = event // получения объекта уведомления
      params.id = ind++ // установка идентификатора
      this.listToast.push(params) // добавление уведомления в массив
    })
  },
}
</script>

<style>
  @import '~/assets/css/position.css';
  @import '~/assets/css/padding.css';
  .toast-list {
    z-index: 1000;
  }

  .toast-container {
    z-index: var(--bs-toast-zindex);
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    max-width: 100%;
    pointer-events: none;
  }
  .toast-container > :not(:last-child) {
    margin-bottom: var(--bs-toast-spacing);
  }

  .toast-primary {
    --bs-toast-color: #084298;
    --bs-toast-bg: #cfe2ff;
    --bs-toast-border-color: #b6d4fe;
    --bs-toast-header-bg: #90caf9;
    --bs-toast-header-color: #424242;
  }

  .toast-secondary {
    --bs-toast-color: #41464b;
    --bs-toast-bg: #e2e3e5;
    --bs-toast-border-color: #d3d6d8;
    --bs-toast-header-bg: #adb5bd;
    --bs-toast-header-color: #424242;
  }

  .toast-success {
    --bs-toast-color: #0f5132;
    --bs-toast-bg: #d1e7dd;
    --bs-toast-border-color: #badbcc;
    --bs-toast-header-bg: #b9f6ca;
    --bs-toast-header-color: #424242;
  }

  .toast-info {
    --bs-toast-color: #055160;
    --bs-toast-bg: #cff4fc;
    --bs-toast-border-color: #b6effb;
    --bs-toast-header-bg: #bbdefb;
    --bs-toast-header-color: #424242;
  }

  .toast-warning {
    --bs-toast-color: #664d03;
    --bs-toast-bg: #fff3cd;
    --bs-toast-border-color: #ffecb5;
    --bs-toast-header-bg: #fff59d;
    --bs-toast-header-color: #424242;
  }

  .toast-danger {
    --bs-toast-color: #842029;
    --bs-toast-bg: #f8d7da;
    --bs-toast-border-color: #f5c2c7;
    --bs-toast-header-bg: #f3989b;
    --bs-toast-header-color: #424242;
  }

  .toast-light {
    --bs-toast-color: #636464;
    --bs-toast-bg: #fefefe;
    --bs-toast-border-color: #fdfdfe;
    --bs-toast-header-bg: #bdbdbd;
    --bs-toast-header-color: #424242;
  }

  .toast-dark {
    --bs-toast-color: #141619;
    --bs-toast-bg: #d3d3d4;
    --bs-toast-border-color: #bcbebf;
    --bs-toast-header-color: #000000;
    --bs-toast-header-bg: #757575;
  }
</style>