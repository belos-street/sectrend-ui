import type { PropType, ExtractPropTypes } from 'vue'
import type { DrawerPropsPlacement } from './type'

const placements = Object.freeze<DrawerPropsPlacement[]>(['top', 'right', 'bottom', 'left'])
export const validatorPlacement = (value: DrawerPropsPlacement) => placements.includes(value)

export const drawerProps = {
  placement: {
    type: String as PropType<DrawerPropsPlacement>,
    default: placements[1],
    validator: validatorPlacement
  },
  width: {
    type: Number,
    default: undefined
  },
  height: {
    type: Number,
    default: undefined
  },
  show: Boolean,
  maskClose: Boolean,
  confirmText: String,
  cancelText: String,
  title: String
}

export type DrawerProps = ExtractPropTypes<typeof drawerProps>
