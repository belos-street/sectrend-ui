import { Success, Info, Warn, Danger } from '../icon'

export type IconType = 'info' | 'success' | 'warn' | 'danger'

const types = Object.freeze<IconType[]>(['info', 'success', 'warn', 'danger'])
export const validatorIconType = (value: IconType) => types.includes(value)

export function setIconType(type: IconType) {
  if (type === 'danger') {
    return <Danger />
  } else if (type === 'warn') {
    return <Warn />
  } else if (type === 'success') {
    return <Success />
  } else {
    return <Info />
  }
}
