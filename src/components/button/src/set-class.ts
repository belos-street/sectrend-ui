import { _name } from '..'
import { validatorType, validatorSize, type ButtonProps } from '../props'

export const setClass = (props: ButtonProps) => {
  let classStr = _name
  if (validatorType(props.type)) classStr += ` ${_name}--type__${props.type}`
  if (props.text) classStr += ` ${_name}--text`
  if (props.disabled) classStr += ` ${_name}--disabled`
  if (props.round) classStr += ` ${_name}--round`
  if (props.circle) classStr += ` ${_name}--circle`
  if (props.loading) classStr += ` ${_name}--loading`
  if (validatorSize(props.size)) classStr += ` ${_name}--size__${props.size}`
  return classStr
}
