import type { StyleValue } from 'vue'
import type { SpaceProps } from '../props'
import type { SpacePropsSize } from '../type'

const setPropsSize = (size: SpacePropsSize): string =>
  typeof size === 'number' ? size + 'px' : size.reduce((pre: string, cur) => pre + cur + 'px ', '')

export const setStyle = (props: SpaceProps) => {
  const attr: StyleValue = {}
  props.justify && (attr.justifyContent = props.justify)
  props.size && (attr.gap = setPropsSize(props.size as SpacePropsSize))
  props.vertical && (attr.flexFlow = 'column')
  props.align && (attr.alignItems = props.align)
  !props.wrap && (attr.flexWrap = 'nowrap')
  return attr
}
