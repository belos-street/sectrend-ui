/**
 * 获取当前元素距离浏览器的顶部和左边的距离
 * @method useMutationObserver 监听dom元素变化
 */

import { onMounted, ref, type Ref } from 'vue'
import { useMutationObserver, useResizeObserver, useDebounceFn } from '@vueuse/core'

export const useElementOffset = (ele: Ref<HTMLElement | null>) => {
  const offsetTop = ref<number>(0)
  const offsetLeft = ref<number>(0)

  const setOffset = () => {
    const offset = { top: 0, left: 0 }
    let tempEle = ele.value as HTMLElement
    do {
      offset.top += tempEle.offsetTop
      offset.left += tempEle.offsetLeft
      tempEle = tempEle.parentElement as HTMLElement
    } while (tempEle.parentElement)
    offsetTop.value = offset.top
    offsetLeft.value = offset.left
  }

  onMounted(() => {
    setOffset()
  })

  useMutationObserver(
    ele,
    () => {
      setOffset()
    },
    { attributes: true }
  )

  useResizeObserver(
    ref(document.getElementsByTagName('html')[0]),
    useDebounceFn(() => {
      setOffset()
    }, 500)
  )

  return {
    offsetTop,
    offsetLeft
  }
}
