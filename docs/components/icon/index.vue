<script setup lang="ts">
import { Star, Setting, Refresh } from '../../../src/icon'
import codeText from './index.vue?raw'
</script>

<template>
  <h3>Icon</h3>

  <h4>基础使用</h4>
  <div class="c">
    <s-icon>
      <Star />
    </s-icon>
    <s-icon :icon="Star" />
  </div>

  <h4>颜色</h4>
  <div class="c">
    <s-icon color="red">
      <Setting />
    </s-icon>
    <s-icon :icon="Setting" color="blue" />
  </div>

  <h4>角度</h4>
  <div class="c">
    <s-icon :rotate="60">
      <Star />
    </s-icon>
    <s-icon :icon="Star" :rotate="180" />
  </div>

  <h4>尺寸</h4>
  <div class="c">
    <s-icon :icon="Star" />
    <s-icon :icon="Star" :size="24" />
    <s-icon :size="30">
      <Star />
    </s-icon>
  </div>

  <h4>旋转</h4>
  <div class="c">
    <s-icon :icon="Refresh" spin />
  </div>

  <h3>code</h3>
  <hr />

  <pre>{{ codeText }}</pre>
</template>
