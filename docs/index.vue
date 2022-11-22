<script setup lang="ts">
import About from './views/AboutView.vue?raw'
</script>

<template>
  <h1>Sectrend UI</h1>
  <div class="container">
    <div class="container-—item">button</div>
    <div class="container-—item">tag</div>
  </div>

  <router-view></router-view>
</template>

<style scoped>
h1 {
  margin: 0;
}
.container {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.container-—item {
  margin: 10px 0;
  cursor: pointer;
}
</style>
