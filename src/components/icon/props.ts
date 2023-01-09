import type { PropType, ExtractPropTypes } from 'vue'

export const iconProps = {
  rotate: Number,
  spin: Boolean,
  size: Number,
  color: String,
  icon: Object as PropType<any>
}

export type IconProps = ExtractPropTypes<typeof iconProps>
