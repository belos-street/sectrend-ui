<script setup lang="ts">
import { ref } from 'vue'

const list = ref(['没没没', '买买买', '飞飞飞'])
</script>

<template>
  <s-breadcrumb separator=">">
    <s-breadcrumb-item>啧啧啧</s-breadcrumb-item>
    <s-breadcrumb-item>走走走</s-breadcrumb-item>
    <s-breadcrumb-item clickable @click="test">爬爬爬</s-breadcrumb-item>
    哈哈哈
    <template v-for="item of list" :key="item">
      <s-breadcrumb-item>{{ item }}</s-breadcrumb-item>
    </template>
  </s-breadcrumb>
</template>

<style lang="less" scoped></style>
