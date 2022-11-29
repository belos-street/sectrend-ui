<script setup lang="ts">
import codeText from './index.vue?raw'
</script>

<template>
  <h3>Popover</h3>

  <h4>基础使用</h4>

  <div class="b">
    <s-space>
      <s-pop-container placement="top">
        aaa
        <template #trigger>
          <s-button type="warn">hover me</s-button>
        </template>
      </s-pop-container>
    </s-space>
  </div>

  <h4>位置</h4>
  <div class="b">
    <div class="parent">
      <div class="div1">
        <s-pop-container placement="top-start" trigger="click">
          <s-pop-container placement="top-start" trigger="click">
            top-start2222222
            <template #trigger>
              <s-button>top-start2</s-button>
            </template>
          </s-pop-container>
          <template #trigger>
            <s-button>top-start</s-button>
          </template>
        </s-pop-container>
      </div>
      <div class="div2">
        <s-pop-container placement="top" :show-arrow="false">
          top
          <template #trigger>
            <s-button>top</s-button>
          </template>
        </s-pop-container>
      </div>
      <div class="div3">
        <s-pop-container placement="top-end" trigger="click">
          <div class="z7">top-end2222top-end2222top-end2222</div>
          <template #trigger>
            <s-button>top-end</s-button>
          </template>
        </s-pop-container>
      </div>
      <div class="div4">
        <s-pop-container placement="right-start">
          right-start
          <template #trigger>
            <s-button>right-start</s-button>
          </template>
        </s-pop-container>
      </div>
      <div class="div5">
        <s-pop-container placement="right">
          right
          <template #trigger>
            <s-button>right</s-button>
          </template>
        </s-pop-container>
      </div>
      <div class="div6">
        <s-pop-container placement="right-end">
          right-end
          <template #trigger>
            <s-button>right-end</s-button>
          </template>
        </s-pop-container>
      </div>
      <div class="div7">
        <s-pop-container placement="bottom-end">
          bottom-end
          <template #trigger>
            <s-button>bottom-end</s-button>
          </template>
        </s-pop-container>
      </div>
      <div class="div8">
        <s-pop-container placement="bottom">
          bottom
          <template #trigger>
            <s-button>bottom</s-button>
          </template>
        </s-pop-container>
      </div>
      <div class="div9">
        <s-pop-container placement="bottom-start">
          bottom-start
          <template #trigger>
            <s-button>bottom-start</s-button>
          </template>
        </s-pop-container>
      </div>
      <div class="div10">
        <s-pop-container placement="left-end">
          left-end
          <template #trigger>
            <s-button>left-end</s-button>
          </template>
        </s-pop-container>
      </div>
      <div class="div11">
        <s-pop-container placement="left">
          left
          <template #trigger>
            <s-button>left</s-button>
          </template>
        </s-pop-container>
      </div>
      <div class="div12">
        <s-pop-container placement="left-start">
          left-start
          <template #trigger>
            <s-button>left-start</s-button>
          </template>
        </s-pop-container>
      </div>
    </div>
  </div>

  <h4>隐藏箭头</h4>
  <div class="b">
    <s-pop-container placement="bottom" :show-arrow="false">
      top
      <template #trigger>
        <s-button>top</s-button>
      </template>
    </s-pop-container>
  </div>

  <h3>code</h3>
  <hr />

  <pre>{{ codeText }}</pre>
</template>
<style scoped>
.b {
  margin-bottom: 20px;
}

.parent {
  display: grid;
  grid-template-columns: repeat(3, 116px);
  grid-template-rows: repeat(5, 40px);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-left: 300px;
}

.parent .s-button {
  width: 110px;
}

.div1 {
  grid-area: 1 / 1 / 2 / 2;
}

.div2 {
  grid-area: 1 / 2 / 2 / 3;
}

.div3 {
  grid-area: 1 / 3 / 2 / 4;
}

.div4 {
  grid-area: 2 / 3 / 3 / 4;
}

.div5 {
  grid-area: 3 / 3 / 4 / 4;
}

.div6 {
  grid-area: 4 / 3 / 5 / 4;
}

.div7 {
  grid-area: 5 / 3 / 6 / 4;
}

.div8 {
  grid-area: 5 / 2 / 6 / 3;
}

.div9 {
  grid-area: 5 / 1 / 6 / 2;
}

.div10 {
  grid-area: 4 / 1 / 5 / 2;
}

.div11 {
  grid-area: 3 / 1 / 4 / 2;
}

.div12 {
  grid-area: 2 / 1 / 3 / 2;
}
</style>
