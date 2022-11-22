<script setup lang="ts">
import About from './views/AboutView.vue?raw'

const checkMode = () => {
  document.getElementsByTagName('html')[0].className = 's-theme__dark'
}
</script>

<template>
  <h1>Sectrend UI</h1>
  <button @click="checkMode">night</button>
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
