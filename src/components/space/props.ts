import type { PropType, ExtractPropTypes } from 'vue'
import type { SpacePropsAlign, SpacePropsJustify, SpacePropsSize } from './type'

const justifys = Object.freeze<SpacePropsJustify[]>([
  'start',
  'end',
  'center',
  'space-around',
  'space-between',
  'space-evenly'
])
const aligns = Object.freeze<SpacePropsAlign[]>(['start', 'end', 'center', 'baseline', 'stretch'])

const validatorJustify = (val: SpacePropsJustify) => justifys.includes(val)
const validatorAlign = (val: SpacePropsAlign) => aligns.includes(val)

export const spaceProps = {
  vertical: Boolean,
  justify: {
    type: String as PropType<SpacePropsJustify>,
    default: justifys[0],
    validator: validatorJustify
  },
  align: {
    type: String as PropType<SpacePropsAlign>,
    deafult: undefined,
    validator: validatorAlign
  },
  size: {
    type: [Number, Array] as PropType<SpacePropsSize>,
    default: 8
  },
  wrap: {
    default: true,
    type: Boolean
  }
}

export type SpaceProps = ExtractPropTypes<typeof spaceProps>
