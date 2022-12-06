<script setup lang="ts">
import { ref } from 'vue'
import { Star } from '../../../src/icon'
import codeText from './index.vue?raw'

const isShow = ref(false)
</script>

<template>
  <h3>breadcrumb</h3>

  <h4>基础使用</h4>
  <div class="b">
    <s-button @click="isShow = !isShow">click</s-button>
    <s-spin :show="isShow">
      <s-space vertical>
        <span>Sectrend - UI / Sectrend - UI / Sectrend - UI / Sectrend - UI</span>
        <span>Sectrend - UI Sectrend - UI</span>
        <span>Sectrend - UI Sectrend - UI</span>
        <span>Sectrend - UI Sectrend - UI</span>
      </s-space>
    </s-spin>
  </div>

  <h4>添加描述</h4>
  <div class="b">
    <s-button @click="isShow = !isShow">click</s-button>
    <s-spin :show="isShow">
      <s-space vertical>
        <span>Sectrend - UI / Sectrend - UI / Sectrend - UI / Sectrend - UI</span>
        <span>Sectrend - UI Sectrend - UI</span>
        <span>Sectrend - UI Sectrend - UI</span>
        <span>Sectrend - UI Sectrend - UI</span>
      </s-space>
      <template #description> Spin Description </template>
    </s-spin>
  </div>

  <h4>自定义图标 结合s-icon</h4>
  <div class="b">
    <s-button @click="isShow = !isShow">click</s-button>
    <s-spin :show="isShow">
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
      </table>
      <template #icon> <s-icon spin :icon="Star" /> </template>
    </s-spin>
  </div>

  <h4>尺寸</h4>
  <div class="b b-size">
    <s-spin :show="true" size="small" />
    <s-spin :show="true" />
    <s-spin :show="true" size="large" />
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
.s-space {
  border: 1px solid black;
  width: 500px;
}

.b-size .s-spin {
  margin-right: 40px;
}
</style>
