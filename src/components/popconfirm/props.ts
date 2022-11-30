import type { IconType } from '../../common/icon-type'
import type { PropType, ExtractPropTypes } from 'vue'
import type { PopContainerPropsPlacement, PopContainerPropsTrigger } from '../pop-container/type'

export const popconfirmProps = {
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
    default: 'top'
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  confirmText: String,
  cancelText: String,
  type: {
    type: String as PropType<IconType>,
    default: 'info'
  }
}

export type PopconfirmProps = ExtractPropTypes<typeof popconfirmProps>
