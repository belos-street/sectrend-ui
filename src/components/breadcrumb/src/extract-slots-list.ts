import { isFragment } from '../../../utils/is-fragment'
import type { Component, VNode } from 'vue'
import { NameItem } from '..'

/**
 * 清洗slot数据
 * 将子元素拆分出来
 * template 和 tag为 's-breadcrumb-item' 的组件
 */
export const extractSlotsList = (list: VNode[]): VNode[] => {
  let arr: VNode[] = []
  list.forEach((item) => {
    isFragment(item) && Array.isArray(item.children)
      ? (arr = [...arr, ...extractSlotsList(item.children as VNode[])])
      : (item.type as Component).name === NameItem && arr.push(item)
  })
  return arr
}
