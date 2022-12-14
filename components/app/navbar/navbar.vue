<template>
  <nav class="sidebar">
    <ul class="list">
      <li style="display: flex" class="sidebar-item">
          <nuxt-icon name="basic/stop"  filled  class="icon"></nuxt-icon>
        <app-button class="sidebar-item-button sidebar-item-1">
          <span>sdfsdf</span>
        </app-button>
      </li>
      <li style="display: flex">
        <app-button class="nav-icon">
          <nuxt-icon name="basic/stop"  filled  class="icon"></nuxt-icon>
        </app-button>
        <app-button class="sidebar-item-button sidebar-item">
          <span>sdfsdf</span>
        </app-button>
      </li>
      <li style="display: flex">
        <app-button class="nav-icon">
          <nuxt-icon name="basic/stop"  filled  class="icon"></nuxt-icon>
        </app-button>
        <app-button class="sidebar-item-button sidebar-item">
          <span>sdfsdf</span>
        </app-button>
      </li>
      <li style="display: flex">
        <app-button class="nav-icon">
          <nuxt-icon name="basic/stop"  filled  class="icon"></nuxt-icon>
        </app-button>
        <app-button class="sidebar-item-button sidebar-item">
          <span>sdfsdf</span>
        </app-button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  mounted() {
    // this.$el.style.setProperty('--color', 'red')
  },
}
</script>

<style>
  @media (min-width: 1400px) {
    .sidebar {
      width: 2.5%;
      max-width: 65px;
    }
  }

  @media (min-width: 1200px) and (max-width: 1399px) {
    .sidebar {
      width: 4%;
    }
  }

  .list {
    width: 100%;
    padding: 0px;
  }

  .sidebar {
    height: 100%;
    position: absolute !important;
    z-index: 1;
    overflow: auto;
    background: var(--dark);
    margin-left: -12px;
  }

  .sidebar:hover {
    max-width: 100%;
    width: 15%;
  }

  .sidebar:hover .sidebar-item {
    display: block !important;
  }

  .sidebar-item {
    width: 100%;
    display: block;
    text-align: left;
    border: none;
    white-space: normal;
    float: none;
    outline: 0;
    display: none;
  }

  .sidebar-item-button {
    width: 98%;
    height: 40px;
    border: 0px;
    border-bottom: 1px solid silver;
    border-radius: 0;
    margin-left: 4px;
  }

  .sidebar-item-button span {
    position: absolute;
    left: 0;
    bottom: 20%;
    padding-left: 10px;
    color: white;
  }

  .sidebar-item-button:hover {
    background: var(--primary);
    transition-property: background;
    transition-duration: 0.4s;
  }

  .sidebar:hover .icon{
    /* display: none; */
  }

  .sidebar-item-button:hover span {
    color: var(--font-active-color);
    transition-property: color;
    transition-duration: 0.4s;
  }

  .nav-icon svg{
    width: 40px !important;
    height: 40px !important;
  }

  li{
    height: 45px;
  }
</style>
