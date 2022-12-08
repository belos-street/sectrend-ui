<script setup lang="ts">
import { ref, watch } from 'vue'
import { Star } from '../../../src/icon'
import codeText from './index.vue?raw'

const isShow = ref(true)
watch(isShow, (newVal) => {
  console.log('newVal', newVal)
})
</script>

<template>
  <h3>breadcrumb</h3>

  <h4>基础使用</h4>
  <div class="b">
    <s-button @click="isShow = !isShow">click</s-button>
    <s-drawer v-model:show="isShow" title="抽屉标题" :width="500">
      <table border="1" class="content">
        <tr>
          <th>Month</th>
          <th>Savings</th>
        </tr>
        <tr>
          <td>January</td>
          <td>$100</td>
        </tr>
        <tr>
          <td>September</td>
          <td>$90</td>
        </tr>
        <tr>
          <td>January</td>
          <td>$100</td>
        </tr>
        <tr>
          <td>September</td>
          <td>$90</td>
        </tr>
        <tr>
          <td>January</td>
          <td>$100</td>
        </tr>
        <tr>
          <td>September</td>
          <td>$90</td>
        </tr>
      </table>
    </s-drawer>
  </div>

  <h4>添加描述</h4>
  <div class="b">
    <s-button @click="isShow = !isShow">click</s-button>
  </div>

  <h4>自定义图标 结合s-icon</h4>
  <div class="b">
    <s-button @click="isShow = !isShow">click</s-button>
  </div>

  <h3>code</h3>
  <hr />

  <pre>{{ codeText }}</pre>
</template>

<style scoped>
h4 {
  margin-top: 20px;
  margin-bottom: 5px;
}

.b {
  margin-bottom: 20px;
}
.s-space {
  border: 1px solid black;
  width: 500px;
}
</style>
