<script setup lang="ts">
import { ref } from 'vue'
import codeText from './index.vue?raw'

const isShow = ref(false)

const handleConfirmClick = () => {
  isShow.value = false
  console.log('confirm-click')
}
</script>

<template>
  <h3>popdialog</h3>

  <h4>基础使用</h4>
  <div class="b">
    <s-popdialog title="Title" v-model:show="isShow" @confirm-click="handleConfirmClick">
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

  <h4>不显示关闭按钮</h4>
  <div class="b">
    <s-popdialog title="表格" :closable="false">
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
      <template #trigger>
        <s-button type="info" text>click me</s-button>
      </template>
    </s-popdialog>
  </div>

  <h4>自定义表头</h4>
  <div class="b">
    <s-popdialog title="Title">
      <s-space justify="space-between" vertical>
        <div class="content">contentcontentcontent</div>
        <div class="content">contentcontentcontent</div>
        <div class="content">contentcontentcontent</div>
        <div class="content">contentcontentcontent</div>
      </s-space>
      <template #header> To > Young > To > Simple </template>
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
