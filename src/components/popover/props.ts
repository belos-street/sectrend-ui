import type { PropType, ExtractPropTypes } from 'vue'
import { popContainerProps } from '../pop-container/props'
export const popoverProps = {
  ...popContainerProps
}

export type PopoverProps = ExtractPropTypes<typeof popoverProps>
