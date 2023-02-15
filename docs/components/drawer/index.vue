<script setup lang="ts">
import { ref } from 'vue'
import { Star } from '../../../src/icon'
import codeText from './index.vue?raw'
import type { DrawerPropsPlacement } from '@/components/drawer/type'

const isShow = ref(false)
const placement = ref<DrawerPropsPlacement>('right')
const handelClick = (place: DrawerPropsPlacement) => {
  placement.value = place
  isShow.value = true
}

const isShow2 = ref(false)
const isShow3 = ref(false)

const isShow4 = ref(false)

const isShow5 = ref(false)
const handleClose = (show: boolean) => {
  console.log(show, '现在是关闭时的回调')
}
type Callback = (bool: boolean) => void
const handleConfirm = (callback: Callback) => {
  setTimeout(() => {
    isShow5.value = false
  }, 3000)
}

const isShow6 = ref(false)
const isShow7 = ref(false)
</script>

<template>
  <h3>drawer</h3>

  <h4>基础使用 --- {{ isShow }}</h4>
  <div class="b">
    <s-space :size="0">
      <s-button @click="handelClick('top')">上</s-button>
      <s-button @click="handelClick('right')">右</s-button>
      <s-button @click="handelClick('bottom')">下</s-button>
      <s-button @click="handelClick('left')">左</s-button>
    </s-space>

    <s-drawer :placement="placement" v-model:show="isShow" title="我是标题" mask-close>
      <div>sectrendsectrendsectrendsectrend</div>
      <div>sectrendsectrendsectrendsectrend</div>
      <div>sectrendsectrendsectrendsectrend</div>
      <div>sectrendsectrendsectrendsectrend</div>
    </s-drawer>
  </div>

  <h4>多重抽屉</h4>
  <div class="b">
    <s-button @click="isShow2 = true">click</s-button>
    <s-drawer title="抽屉标题" v-model:show="isShow2">
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
        <tr>
          <td>January</td>
          <td>$100</td>
        </tr>
        <tr>
          <td>September</td>
          <td>$90</td>
        </tr>
        <tr>
          <td>January</td>
          <td>$100</td>
        </tr>
        <tr>
          <td>September</td>
          <td><input /></td>
        </tr>
      </table>
      <s-button @click="isShow3 = true"> clickme </s-button>
      <s-drawer title="抽屉标题2" v-model:show="isShow3" mask-close> 可以继续套娃 </s-drawer>
    </s-drawer>
  </div>

  <h4>点击遮罩层关闭 mask-close</h4>
  <h4>可调整宽高</h4>
  <h5>placement为： left 和 right时 width有效；top 和 bottom时 height有效</h5>
  <div class="b">
    <s-button @click="isShow4 = true">click</s-button>
    <s-drawer title="抽屉标题4" v-model:show="isShow4" :width="500" mask-close> 500px </s-drawer>
  </div>

  <h4>打开与关闭事件</h4>
  <div class="b">
    <s-button @click="isShow5 = true">click</s-button>
    <s-drawer title="抽屉标题5" v-model:show="isShow5" mask-close @after-leave="handleClose" @confirm-click="handleConfirm">
      事件处理
    </s-drawer>
  </div>

  <h4>自定义头部和底部</h4>
  <div class="b">
    <s-button @click="isShow6 = true">click</s-button>
    <s-drawer title="抽屉标题6" v-model:show="isShow6" mask-close>
      500px
      <template #header> <s-icon :icon="Star" /> 我是自定义头部</template>
      <template #footer> 我是自定义底部 <s-button>click</s-button> </template>
    </s-drawer>
  </div>

  <h4>没有底部</h4>
  <div class="b">
    <s-button @click="isShow7 = true">click</s-button>
    <s-drawer title="抽屉标题6" v-model:show="isShow7" mask-close :no-footer="true"> hihihihihihihi </s-drawer>
  </div>

  <h3>code</h3>
  <hr />

  <pre>{{ codeText }}</pre>
</template>

<style scoped>
h4 {
  margin-top: 20px;
  margin-bottom: 5px;
}
</style>
