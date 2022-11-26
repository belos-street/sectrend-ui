<script setup lang="ts">
import codeText from './index.vue?raw'
</script>

<template>
  <h3>Space</h3>

  <h4>基础使用</h4>
  <div class="b">
    <s-space>
      <s-button type="info">Sectrend</s-button>
      <s-button type="warn">Sectrend</s-button>
      <s-button type="danger">Sectrend</s-button>
    </s-space>
  </div>

  <h4>排列方式</h4>
  <div class="b">
    <s-space align="center">
      <s-button type="info">Sectrend</s-button>
      <span>Sectrend</span>
      <span>Sectrend</span>
      <span>Sectrend</span>
    </s-space>
  </div>

  <h4>垂直</h4>
  <div class="b">
    <s-space justify="space-between" vertical>
      <s-button type="info">Sectrend</s-button>
      <s-button type="warn">Sectrend</s-button>
      <s-button type="danger">Sectrend</s-button>
      <span>233</span>
    </s-space>
  </div>

  <h4>空间围绕</h4>
  <div class="b">
    <s-space justify="space-between">
      <s-button type="info">Sectrend</s-button>
      <s-button type="warn">Sectrend</s-button>
      <s-button type="danger">Sectrend</s-button>
    </s-space>
  </div>

  <h4>间隔大小</h4>
  <div class="b">
    <s-space :size="8">
      <s-button type="info">Sectrend</s-button>
      <s-button type="warn">Sectrend</s-button>
      <s-button type="danger">Sectrend</s-button>
      <s-button type="info">Sectrend</s-button>
      <s-button type="warn">Sectrend</s-button>
      <s-button type="danger">Sectrend</s-button>
      <s-button type="info">Sectrend</s-button>
      <s-button type="warn">Sectrend</s-button>
      <s-button type="danger">Sectrend</s-button>
    </s-space>
  </div>

  <h3>code</h3>
  <hr />

  <pre>{{ codeText }}</pre>
</template>
<style scoped>
.b {
  margin-bottom: 20px;
}
</style>
