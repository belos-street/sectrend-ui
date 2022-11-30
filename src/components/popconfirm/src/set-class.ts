import { validatorIconType } from '../../../common/icon-type'
import type { PopconfirmProps } from '../props'

export const setIconClass = (props: PopconfirmProps) => {
  let classStr = 's-popconfirm-icon s-icon--type '
  validatorIconType(props.type) ? (classStr += ` s-icon--type__${props.type}`) : (classStr += ' s-icon--type__info')

  return classStr
}
