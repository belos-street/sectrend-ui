import type { PropType, ExtractPropTypes, VNode } from 'vue'

export const iconProps = {
  rotate: Number,
  spin: Boolean,
  size: Number,
  color: String,
  icon: Object as PropType<VNode>
}

export type IconProps = ExtractPropTypes<typeof iconProps>
