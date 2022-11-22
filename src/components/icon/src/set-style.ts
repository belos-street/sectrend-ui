import type { IconProps } from '../props'
import type { IconAttr } from '../type'

export const setStyle = (props: IconProps) => {
  const styleObj: IconAttr = {}
  if (props.size && Number(props.size)) styleObj.fontSize = `${Number(props.size)}px`
  if (props.color) styleObj.color = props.color
  if (props.rotate && Number(props.rotate)) styleObj.transform = `rotate(${props.rotate}deg)`
  if (props.spin) styleObj.animation = 's-icon-rotate-360 1s linear infinite'
  return styleObj
}
