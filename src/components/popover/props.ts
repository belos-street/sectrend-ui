import type { PropType, ExtractPropTypes } from 'vue'
import type { PopContainerPropsPlacement, PopContainerPropsTrigger } from '../pop-container/type'
export const popoverProps = {
  raw: Boolean,
  showArrow: {
    type: Boolean,
    default: true
  },
  trigger: {
    type: String as PropType<PopContainerPropsTrigger>,
    default: 'hover'
  },
  placement: {
    type: String as PropType<PopContainerPropsPlacement>,
    default: 'top'
  },
  show: Boolean
}

export type PopoverProps = ExtractPropTypes<typeof popoverProps>
