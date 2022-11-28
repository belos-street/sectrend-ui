<script setup lang="ts">
import { ref } from 'vue'
import { useElementHover } from '@vueuse/core'

const myHoverableElement = ref(null)
const isHovered = useElementHover(myHoverableElement)
</script>

<template>
  <div class="test" ref="myHoverableElement">
    {{ `isHovered:${isHovered}` }}
    <div class="test-1" v-show="isHovered">
      <div class="test-son">test-son</div>

      <div class="test-gs">test-gs</div>
    </div>
  </div>
</template>

<style scoped>
.test {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid black;
  z-index: 1;
  background-color: white;
}

.test-1 {
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  display: flex;
  z-index: 2;
  top: 0;
  left: 0;
  transform: translateX(200px);
}

.test-son {
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 2;
  border: 1px solid black;
  background-color: green;
}

.test-gs {
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  display: flex;
  z-index: 2;
  border: 1px solid black;
  background-color: yellow;
  top: 10px;
  left: 200px;
}
</style>
