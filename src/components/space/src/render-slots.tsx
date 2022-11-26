import type { VNode, Slots } from 'vue'
import { _name } from '..'
import { extractSlotsList } from './extract-slots-list'

export const renderSlots = (slots: Slots) => {
  const list: VNode[] = (slots.default && extractSlotsList(slots.default())) || []
  return list.map((item, index) => (
    <div class={`${_name}--item`} key={index}>
      {item}
    </div>
  ))
}
