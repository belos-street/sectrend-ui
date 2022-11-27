import type { PropType, ExtractPropTypes } from 'vue'
export const popoverProps = {
  'show-arrow': {
    type: Boolean,
    default: true
  },
  trigger: {},
  placement: {},
  raw: {
    //不加任何样式
    type: Boolean,
    default: true
  }
}

export type PopoverProps = ExtractPropTypes<typeof popoverProps>
