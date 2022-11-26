import { isFragment } from '../../../utils/is-fragment'
import type { VNode } from 'vue'

/**
 * 清洗slot数据
 * 将子元素拆分出来
 */
export const extractSlotsList = (list: VNode[]) => {
  let arr: VNode[] = []
  list.forEach((item) => {
    isFragment(item) && Array.isArray(item.children)
      ? (arr = [...arr, ...extractSlotsList(item.children as VNode[])])
      : arr.push(item)
  })
  return arr
}
