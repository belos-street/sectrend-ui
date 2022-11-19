import type { PropType, ExtractPropTypes } from 'vue'
import type { ButtonColor } from './type'

export const buttonProps = {
  color: {
    type: String as PropType<ButtonColor>,
    default: 'blue'
  }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
