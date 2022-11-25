<script setup lang="ts">
import codeText from '../../App.vue?raw'
</script>

<template>
  <h3>ConfigProvider</h3>

  <h4>基础使用</h4>
  <div class="c"></div>

  <h3>code</h3>
  <hr />

  <pre>{{ codeText }}</pre>
</template>
<style scoped>
.c {
  align-items: center;
}
</style>
