import type { PropType, ExtractPropTypes } from 'vue'
import type { PopContainerPropsPlacement, PopContainerPropsTrigger, PopSubFlag } from './type'
export const popContainerProps = {
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
  flag: {
    type: String as PropType<PopSubFlag>,
    default: 'popover'
  }
}

export type PopContainerProps = ExtractPropTypes<typeof popContainerProps>
