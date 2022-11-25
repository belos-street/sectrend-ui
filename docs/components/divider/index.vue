<script setup lang="ts">
import codeText from './index.vue?raw'
</script>

<template>
  <h3>Icon</h3>

  <h4>基础使用</h4>
  <div class="c">
    <div class="c-c">
      <span>hello</span>
      <s-divider />
      <span>你好~</span>
      <s-divider />
      <span>Hi</span>
    </div>
  </div>

  <h4>垂直</h4>
  <div class="c">
    J
    <s-divider vertical />
    a
    <s-divider vertical />
    v
    <s-divider vertical />
    a
  </div>

  <h4>虚线</h4>
  <div class="c">
    <div class="c-c">
      <s-divider />
      <s-divider dashed />
      <s-divider vertical />
      <s-divider dashed vertical />
    </div>
  </div>

  <h3>code</h3>
  <hr />

  <pre>{{ codeText }}</pre>
</template>
<style scoped>
.c {
  align-items: center;
}

.c-c {
  width: 100%;
}
</style>
