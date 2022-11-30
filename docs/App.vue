<script setup lang="ts">
import { ref } from 'vue'
import Header from './frame/header/index.vue'
import { zhCN, enGB } from '@/locale'

const theme = ref('light')

// setTimeout(() => {
//   val.value = 'dark'
// }, 3000)
</script>

<template>
  <Header />
  <s-config-provider :locale="enGB" :theme="theme">
    <router-view></router-view>
  </s-config-provider>
</template>
