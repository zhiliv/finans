<template>
  <app-row class="d-flex">
    <app-col col="12" class="d-flex" style="border: 1px solid gray; height: calc(100% - 70px)">
      <app-row class="h-100">
        <app-listbox-items></app-listbox-items>
      </app-row>
    </app-col>
    <app-col col="12" class="d-flex align-self-end" style="border: 1px solid green; height: 70px;"></app-col>
  </app-row>
</template>

<script>
export default {
  head: {
    title: 'Управление оферами',
  },
}
</script>

<style>
  @import '~/assets/css/flex.css';
  @import '~/assets/css/size.css';
</style>
