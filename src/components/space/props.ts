import type { PropType, ExtractPropTypes } from 'vue'
import type { SpacePropsAlign, SpacePropsJustify } from './type'

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

  /**
   * SpacePropsSize 不知道怎么绑定上PropType
   */
  size: {
    type: [Array, Number],
    default: 8,
    validator: (val: unknown) => {
      if (Array.isArray(val)) {
        if (val.length === 1 && typeof val[0] === 'number') {
          return true
        } else if (val.length === 2 && typeof val[0] === 'number' && typeof val[1] === 'number') {
          return true
        } else {
          return false
        }
      } else if (typeof val === 'number') {
        return true
      } else {
        return false
      }
    }
  },
  wrap: {
    default: true,
    type: Boolean
  }
}

export type SpaceProps = ExtractPropTypes<typeof spaceProps>
