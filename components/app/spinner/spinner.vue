<template>
  <div class="spinner"></div>
</template>

<script>
export default {
  props: {
    /* Текст внутри спинера */
    text: {
      type: String,
      default: 'Загрузка...',
    },
  }
}
</script>

<style>
body {
  background: black;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.spinner {
  color: #fbbf24;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
}

.spinner:after {
  animation: changeContent .8s linear infinite;
  display: block;
  content: "⠋";
  font-size: 50px;
}

@keyframes changeContent {
  10% { content: "⠙"; }
  20% { content: "⠹"; }
  30% { content: "⠸"; }
  40% { content: "⠼"; }
  50% { content: "⠴"; }
  60% { content: "⠦"; }
  70% { content: "⠧"; }
  80% { content: "⠇"; }
  90% { content: "⠏"; }
}

</style>