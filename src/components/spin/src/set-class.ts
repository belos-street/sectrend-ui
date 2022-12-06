import { validatorSize } from '../props'
import type { SpinPropsSize } from '../type'

export const setIconClass = (size: SpinPropsSize) => {
  let classStr = 's-spin--icon'
  if (size && validatorSize(size)) classStr += ` s-spin--icon__${size}`
  return classStr
}
