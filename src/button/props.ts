import type { PropType, ExtractPropTypes } from 'vue'
import type { ButtonColor } from './type'

const colors = ['black', 'gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink']
export const buttonProps = {
  color: {
    type: String as PropType<ButtonColor>,
    default: 'blue',
    validator: (value: ButtonColor) => colors.includes(value)
  }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
