import { _name, type DividerProps } from '..'
import { validatorTitlePlace } from '../props'
import type { DividerPropsTitlePlace } from '../type'

export const setClass = (props: DividerProps) => {
  let classStr = _name
  props.vertical ? (classStr += ' s-divider--vertical') : (classStr += ' s-divider--horizontal')
  if (props.dashed) classStr += ' s-divider--dashed'
  return classStr
}

export const setDividerLineClass = (titlePlace?: DividerPropsTitlePlace, key?: DividerPropsTitlePlace) => {
  let classStr = 's-divider--line'
  if (titlePlace && key && validatorTitlePlace(titlePlace)) classStr += ` s-divider--line__${key}`
  return classStr
}
