import type { PropType, ExtractPropTypes } from 'vue'
import type { ButtonPropsType, ButtonPropsSize } from './type'

const types = Object.freeze<ButtonPropsType[]>(['default', 'info', 'success', 'warn', 'danger'])
const sizes = Object.freeze<ButtonPropsSize[]>(['default', 'small', 'large'])
export const validatorType = (value: ButtonPropsType) => types.includes(value)
export const validatorSize = (value: ButtonPropsSize) => sizes.includes(value)

export const buttonProps = {
  type: {
    type: String as PropType<ButtonPropsType>,
    default: 'default',
    validator: validatorType
  },
  text: Boolean,
  disabled: Boolean,
  loading: Boolean,
  round: Boolean,
  circle: Boolean,
  size: {
    type: String as PropType<ButtonPropsSize>,
    default: 'default',
    validator: validatorSize
  },
  htmlType: String
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
