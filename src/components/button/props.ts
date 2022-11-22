import type { PropType, ExtractPropTypes } from 'vue'
import type { ButtonPropsType } from './type'

const types = Object.freeze<ButtonPropsType[]>(['default', 'info', 'success', 'warn', 'danger'])

export const validatorType = (value: ButtonPropsType) => types.includes(value)

export const buttonProps = {
  type: {
    type: String as PropType<ButtonPropsType>,
    default: 'default',
    validator: validatorType
  },
  text: Boolean,
  disabled: Boolean,
  loading: Boolean
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
