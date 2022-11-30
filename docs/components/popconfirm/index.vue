<script setup lang="ts">
//import { ref } from 'vue'
import codeText from './index.vue?raw'
import { Star } from '../../../src/icon'
// const text = ref('233')

// setTimeout(() => {
//   text.value = '778'
// }, 3000)

const handCancelClick = (value: any) => {
  console.log(value)
}

const handleConfirmClick = (value: any) => {
  console.log(value)
}
</script>

<template>
  <h3>popconfirm</h3>

  <h4>基础使用</h4>
  <div class="b">
    <s-popconfirm placement="top-start">
      233
      <template #trigger>
        <s-button type="info">hover me</s-button>
      </template>
    </s-popconfirm>
  </div>

  <h4>类型</h4>
  <div class="b">
    <s-space>
      <s-popconfirm placement="top-start">
        InfoInfoInfo
        <template #trigger>
          <s-button type="info">Info</s-button>
        </template>
      </s-popconfirm>
      <s-popconfirm type="success">
        好像这个类型没什么X用
        <template #trigger>
          <s-button type="success">Success</s-button>
        </template>
      </s-popconfirm>
      <s-popconfirm type="warn">
        WarnWarnWarn
        <template #trigger>
          <s-button type="warn">Warn</s-button>
        </template>
      </s-popconfirm>
      <s-popconfirm type="danger">
        DangerDangerDanger
        <template #trigger>
          <s-button type="danger">Danger</s-button>
        </template>
      </s-popconfirm>
    </s-space>
  </div>

  <h4>图标更换</h4>
  <div class="b">
    <s-popconfirm type="danger" placement="top-start">
      更换图标更换图标更换图标
      <template #icon>
        <s-icon :icon="Star" color="red" />
      </template>
      <template #trigger>
        <s-button type="danger">更换图标</s-button>
      </template>
    </s-popconfirm>
  </div>

  <h4>无图标</h4>
  <div class="b">
    <s-popconfirm placement="top-start" :show-icon="false">
      无图标无图标无图标无图标
      <template #trigger>
        <s-button type="info">无图标</s-button>
      </template>
    </s-popconfirm>
  </div>

  <h4>更换取消 确认 文字</h4>
  <div class="b">
    <s-popconfirm placement="top-start" cancel-text="qx" confirm-text="qr">
      更换取消 确认 文字
      <template #trigger>
        <s-button type="warn">更换文字</s-button>
      </template>
    </s-popconfirm>
  </div>

  <h4>事件</h4>
  <div class="b">
    <s-popconfirm placement="top-start" @cancel-click="handCancelClick" @confirm-click="handleConfirmClick">
      positive-click & negative-click
      <template #trigger>
        <s-button type="success">positive-click & negative-click</s-button>
      </template>
    </s-popconfirm>
  </div>

  <h4>自定义操作</h4>
  <div class="b">
    <s-popconfirm placement="top-start">
      自定义操作自定义操作自定义操作
      <template #action>
        <s-button type="success" text>Success</s-button>
      </template>
      <template #trigger>
        <s-button type="success">自定义操作</s-button>
      </template>
    </s-popconfirm>
  </div>

  <h4>触发方式</h4>
  <div class="b">同popover</div>

  <h4>位置</h4>
  <div class="b">同popover</div>

  <h4>隐藏箭头</h4>
  <div class="b">同popover</div>

  <h3>code</h3>
  <hr />

  <pre>{{ codeText }}</pre>
</template>
<style scoped>
.b {
  margin-bottom: 20px;
}
</style>
