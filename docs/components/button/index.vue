<script setup lang="ts">
import { Star, Setting, Refresh } from '../../../src/icon'
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
    <s-button text>Deafult</s-button>
    <s-button type="info" text>Info</s-button>
    <s-button type="success" text>Success</s-button>
    <s-button type="warn" text>Warn</s-button>
    <s-button type="danger" text>Danger</s-button>
  </div>
</template>

<style scoped>
.c {
  display: flex;
  gap: 8px;
  margin-bottom: 30px;
}
</style>
