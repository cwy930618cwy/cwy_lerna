<template>
<div class="container">
  <p>Hello, world</p>
  <button @click="close">close from content area</button>
</div>
</template>

<script>
export default {
  inject: ['close']
}
</script>

<style scoped>
.container {
  font-family: PingFang SC;
  padding: 30px;
  text-align: center;
}
button {
  height: 30px;
}
</style>