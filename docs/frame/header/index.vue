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
    <div class="container-—item" @click="push('/components/button')">button</div>
    <div class="container-—item" @click="push('/components/icon')">icon</div>
    <div class="container-—item" @click="push('/components/divider')">divider</div>
    <div class="container-—item" @click="push('/components/config-provider')">config-provider</div>
    <div class="container-—item" @click="push('/components/tag')">tag</div>
    <div class="container-—item" @click="push('/components/space')">space</div>
    <div class="container-—item" @click="push('/components/popover')">popover</div>
    <div class="container-—item" @click="push('/components/popconfirm')">popconfirm</div>
    <div class="container-—item" @click="push('/components/popdialog')">popdialog</div>
    <div class="container-—item" @click="push('/components/dropdown')">dropdown</div>
    <div class="container-—item" @click="push('/components/breadcrumb')">breadcrumb</div>

    <div class="container-—item" @click="push('/components/breadcrumb')">reslut</div>
    <div class="container-—item" @click="push('/components/breadcrumb')">drawer</div>
    <div class="container-—item" @click="push('/components/breadcrumb')">notification</div>
    <div class="container-—item" @click="push('/components/breadcrumb')">spin</div>
  </div>
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
