<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const { push } = useRouter()
const mode = ref('day')
const checkMode = () => {
  if (mode.value === 'day') {
    document.getElementsByTagName('html')[0].className = 's-theme__dark'
    mode.value = 'night'
  } else {
    document.getElementsByTagName('html')[0].className = ''
    mode.value = 'day'
  }
}
</script>

<template>
  <h1>Sectrend UI</h1>
  <button @click="checkMode">{{ mode }}</button>
  <div class="container">
    <div class="container-—item" @click="push('/document/button')">button</div>
    <div class="container-—item" @click="push('/document/icon')">icon</div>
    <div class="container-—item" @click="push('/document/tag')">tag</div>
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
