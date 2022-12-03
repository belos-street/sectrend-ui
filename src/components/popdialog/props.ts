import type { PropType, ExtractPropTypes } from 'vue'
import type { PopContainerPropsPlacement, PopContainerPropsTrigger } from '../pop-container/type'
export const popdialogProps = {
  title: String,
  closable: {
    type: Boolean,
    default: true
  },
  show: Boolean,
  raw: Boolean,
  showArrow: {
    type: Boolean,
    default: true
  },
  trigger: {
    type: String as PropType<PopContainerPropsTrigger>,
    default: 'click'
  },
  placement: {
    type: String as PropType<PopContainerPropsPlacement>,
    default: 'bottom-start'
  },
  confirmText: String,
  cancelText: String
}

export type PopdialogProps = ExtractPropTypes<typeof popdialogProps>
