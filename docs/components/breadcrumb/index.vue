<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Star } from '../../../src/icon'
import codeText from './index.vue?raw'

const list = ref(['Item5', 'Item6', 'Item7'])
const { push } = useRouter()

const handleItemClick = (path?: string) => path && push(path)
</script>

<template>
  <h3>breadcrumb</h3>

  <h4>基础使用</h4>
  <div class="b">
    <s-breadcrumb>
      <s-breadcrumb-item>Item1</s-breadcrumb-item>
      <s-breadcrumb-item>Item2</s-breadcrumb-item>
      <s-breadcrumb-item><s-icon :icon="Star" /> </s-breadcrumb-item>
      Item4
      <template v-for="item of list" :key="item">
        <s-breadcrumb-item>{{ item }}</s-breadcrumb-item>
      </template>
      <s-breadcrumb-item clickable>Item8</s-breadcrumb-item>
    </s-breadcrumb>
  </div>

  <h4>自定义分隔符</h4>
  <div class="b">
    <s-breadcrumb separator=">">
      <s-breadcrumb-item>Item1</s-breadcrumb-item>
      <s-breadcrumb-item>Item2</s-breadcrumb-item>
      <s-breadcrumb-item><s-icon :icon="Star" /> </s-breadcrumb-item>
    </s-breadcrumb>
  </div>

  <h4>是否可点击与链接地址</h4>
  <div class="b">
    <s-breadcrumb>
      <s-breadcrumb-item clickable href="/components/button" @click="handleItemClick">Item1</s-breadcrumb-item>
      <s-breadcrumb-item clickable href="/" @click="handleItemClick">Item2</s-breadcrumb-item>
      <s-breadcrumb-item clickable><s-icon :icon="Star" /> </s-breadcrumb-item>
      <s-breadcrumb-item clickable>Item4</s-breadcrumb-item>
    </s-breadcrumb>
  </div>

  <h3>code</h3>
  <hr />

  <pre>{{ codeText }}</pre>
</template>

<style scoped>
h4 {
  margin-top: 20px;
}
.b {
  margin-bottom: 20px;
}
</style>
