<script setup lang="ts">
import type { ConfigProviderTheme } from '@/components/config-provider/type'
import { ref } from 'vue'
import Header from './frame/header/index.vue'
import zhCN from '@/locale/zh-CN'
import enGB from '@/locale/en-GB'

const theme = ref<ConfigProviderTheme>('light')

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
