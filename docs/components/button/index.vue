<script setup lang="ts">
import { ref } from 'vue'
import { Star, Setting, Refresh } from '../../../src/icon'
import codeText from './index.vue?raw'

const loading = ref(false)
const ok = () => {
  console.log(1)
}
</script>

<template>
  <h3>button</h3>

  <h4>基础使用</h4>
  <div class="c">
    <s-button>Deafult</s-button>
    <s-button type="info">Info</s-button>
    <s-button type="success">Success</s-button>
    <s-button type="warn">Warn</s-button>
    <s-button type="danger">Danger</s-button>
  </div>

  <h4>文字按钮</h4>
  <div class="c">
    <s-button text>Deafult</s-button>
    <s-button type="info" text>Info</s-button>
    <s-button type="success" text>Success</s-button>
    <s-button type="warn" text>Warn</s-button>
    <s-button type="danger" text>Danger</s-button>
  </div>

  <h4>使用图标</h4>
  <div class="c">
    <s-button type="danger">
      <template #icon>
        <s-icon :icon="Star" :rotate="30" />
      </template>
      Deafult
    </s-button>
    <s-button type="info">
      <template #icon>
        <s-icon> <Setting /> </s-icon>
      </template>
      Info
    </s-button>
    <s-button type="success">
      <template #icon>
        <s-icon :icon="Refresh" spin />
      </template>
      Success
    </s-button>
  </div>

  <h4>形状</h4>
  <div class="c">
    <s-button type="info" circle>
      <template #icon>
        <s-icon :icon="Star" />
      </template>
    </s-button>
    <s-button type="success" circle>S</s-button>
    <s-button type="warn" round>
      Star
      <template #icon>
        <s-icon :icon="Star" />
      </template>
    </s-button>
    <s-button type="danger" round> Round </s-button>
  </div>

  <h4>加载中</h4>
  <div class="c">
    <s-button type="success" @click="loading = !loading">click me</s-button>
    <s-button type="info" :loading="loading" @click="ok()">Info</s-button>
    <s-button type="warn" circle :loading="loading">
      <template #icon>
        <s-icon :icon="Star" />
      </template>
    </s-button>
  </div>

  <h4>尺寸</h4>
  <div class="c">
    <s-button type="success" size="small">Success</s-button>
    <s-button type="warn">Warn</s-button>
    <s-button type="danger" size="large">Danger</s-button>
  </div>

  <h4>禁用</h4>
  <div class="c">
    <s-button disabled>Deafult</s-button>
    <s-button type="info" text>Info</s-button>
    <s-button type="success" circle>Success</s-button>
  </div>

  <h3>code</h3>
  <hr />

  <pre>{{ codeText }}</pre>
</template>

<style scoped>
.c {
  display: flex;
  gap: 8px;
  margin-bottom: 30px;
}
</style>
