import type { StyleValue } from 'vue'
import type { SpaceProps } from '../props'

export const setStyle = (props: SpaceProps) => {
  const attr: StyleValue = {}
  props.justify && (attr.justifyContent = props.justify)
  if (typeof props.size === 'number') {
    attr.gap = props.size + 'px'
  } else if (Array.isArray(props.size) && props.size.length <= 2) {
    attr.gap = props.size.reduce((pre: string, cur) => pre + cur + 'px ', '')
  }
  props.vertical && (attr.flexFlow = 'column')
  props.align && (attr.alignItems = props.align)
  !props.wrap && (attr.flexWrap = 'nowrap')
  return attr
}
