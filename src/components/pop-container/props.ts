import type { PropType, ExtractPropTypes } from 'vue'
import type { PopContainerPropsPlacement, PopContainerPropsTrigger } from './type'
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
  }
}

export type PopContainerProps = ExtractPropTypes<typeof popContainerProps>
