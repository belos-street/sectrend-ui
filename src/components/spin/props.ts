import type { PropType, ExtractPropTypes } from 'vue'
import type { SpinPropsSize } from './type'

const sizes = Object.freeze<SpinPropsSize[]>(['default', 'small', 'large'])
export const validatorSize = (value: SpinPropsSize) => sizes.includes(value)
export const spinProps = {
  size: {
    default: 'default',
    type: String as PropType<SpinPropsSize>,
    validator: validatorSize
  },
  show: Boolean
}

export type SpinProps = ExtractPropTypes<typeof spinProps>
