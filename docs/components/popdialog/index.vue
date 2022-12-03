<script setup lang="ts">
import { ref } from 'vue'
import codeText from './index.vue?raw'

const handCancelClick = () => {
  console.log('111')
}

const isShow = ref(false)

const handleConfirmClick = () => {
  isShow.value = false
  console.log(233)
}
</script>

<template>
  <h3>popdialog</h3>

  <h4>基础使用</h4>
  <div class="b">
    <!-- <s-popconfirm placement="top-start">
      233
      <template #trigger>
        <s-button type="info">click me</s-button>
      </template>
    </s-popconfirm> -->

    <s-popdialog
      title="Title"
      confirmText="778"
      v-model:show="isShow"
      @cancel-click="handCancelClick"
      @confirm-click="handleConfirmClick"
    >
      <s-space justify="space-between" vertical>
        <div class="content">content1</div>
        <div class="content">content2</div>
        <div class="content">content3</div>
        <div class="content">content4</div>
      </s-space>
      <template #trigger>
        <s-button type="info" text>click me</s-button>
      </template>
    </s-popdialog>
  </div>
  <h4>其它属性同popconfirm</h4>
  <h3>code</h3>
  <hr />

  <pre>{{ codeText }}</pre>
</template>
<style scoped>
.b {
  margin-bottom: 20px;
}
.content {
  width: 400px;
}
</style>
