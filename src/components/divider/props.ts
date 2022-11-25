import type { PropType, ExtractPropTypes } from 'vue'
import type { DividerPropsTitlePlace } from './type'

const titlePlaces = Object.freeze<DividerPropsTitlePlace[]>(['left', 'right', 'center'])
export const validatorTitlePlace = (val: DividerPropsTitlePlace) => titlePlaces.includes(val)

export const dividerProps = {
  vertical: Boolean,
  titlePlace: {
    type: String as PropType<DividerPropsTitlePlace>,
    default: 'center',
    validator: validatorTitlePlace
  },
  titleText: String,
  dashed: Boolean
}

export type DividerProps = ExtractPropTypes<typeof dividerProps>
