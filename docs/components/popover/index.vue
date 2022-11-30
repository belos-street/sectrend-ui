<script setup lang="ts">
import codeText from './index.vue?raw'
</script>

<template>
  <h3>Popover</h3>

  <h4>基础使用</h4>
  <div class="b">
    <s-popover>
      hello
      <template #trigger>
        <s-button type="info">hover me</s-button>
      </template>
    </s-popover>
  </div>

  <h4>触发方式</h4>
  <div class="b">
    <s-space>
      <s-popover>
        hover
        <template #trigger>
          <s-button type="warn">hover me</s-button>
        </template>
      </s-popover>
      <s-popover trigger="click">
        click
        <template #trigger>
          <s-button type="danger">click me</s-button>
        </template>
      </s-popover>
    </s-space>
  </div>

  <h4>位置</h4>
  <div class="b">
    <div class="parent">
      <div class="div1">
        <s-popover placement="top-start">
          top-start
          <template #trigger>
            <s-button>top-start</s-button>
          </template>
        </s-popover>
      </div>
      <div class="div2">
        <s-popover placement="top">
          top
          <template #trigger>
            <s-button>top</s-button>
          </template>
        </s-popover>
      </div>
      <div class="div3">
        <s-popover placement="top-end">
          换行测试: end2end222end2end
          <template #trigger>
            <s-button>top-end</s-button>
          </template>
        </s-popover>
      </div>
      <div class="div4">
        <s-popover placement="right-start">
          right-start
          <template #trigger>
            <s-button>right-start</s-button>
          </template>
        </s-popover>
      </div>
      <div class="div5">
        <s-popover placement="right">
          right
          <template #trigger>
            <s-button>right</s-button>
          </template>
        </s-popover>
      </div>
      <div class="div6">
        <s-popover placement="right-end">
          right-end
          <template #trigger>
            <s-button>right-end</s-button>
          </template>
        </s-popover>
      </div>
      <div class="div7">
        <s-popover placement="bottom-end">
          bottom-end
          <template #trigger>
            <s-button>bottom-end</s-button>
          </template>
        </s-popover>
      </div>
      <div class="div8">
        <s-popover placement="bottom">
          bottom
          <template #trigger>
            <s-button>bottom</s-button>
          </template>
        </s-popover>
      </div>
      <div class="div9">
        <s-popover placement="bottom-start">
          bottom-start
          <template #trigger>
            <s-button>bottom-start</s-button>
          </template>
        </s-popover>
      </div>
      <div class="div10">
        <s-popover placement="left-end">
          left-end
          <template #trigger>
            <s-button>left-end</s-button>
          </template>
        </s-popover>
      </div>
      <div class="div11">
        <s-popover placement="left">
          left
          <template #trigger>
            <s-button>left</s-button>
          </template>
        </s-popover>
      </div>
      <div class="div12">
        <s-popover placement="left-start">
          left-start
          <template #trigger>
            <s-button>left-start</s-button>
          </template>
        </s-popover>
      </div>
    </div>
  </div>

  <h4>隐藏箭头</h4>
  <div class="b">
    <s-popover placement="bottom" :show-arrow="false" trigger="click">
      <div class="Dropdown">
        <div>Dropdown</div>
        <div>Dropdown</div>
      </div>

      <template #trigger>
        <s-button type="success">top</s-button>
      </template>
    </s-popover>
  </div>

  <h4>控制隐藏显示</h4>
  <div class="b">
    <s-popover :show="true" placement="bottom">
      控制隐藏显示
      <template #trigger>
        <s-button type="info">hover me</s-button>
      </template>
    </s-popover>
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
