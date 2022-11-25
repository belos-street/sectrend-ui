import type { PropType, ExtractPropTypes } from 'vue'
import type { ConfigProviderTheme } from './type'
import { getTheme } from './src/theme'
import type { LocaleType } from '../../locale/type'
import zhCN from '../../locale/zh-CN'

const themes = Object.freeze<ConfigProviderTheme[]>(['light', 'dark'])
export const validatorThemes = (val: ConfigProviderTheme) => themes.includes(val)

export const configProviderProps = {
  locale: {
    type: Object as PropType<LocaleType>,
    default: zhCN
  },
  theme: {
    type: String as PropType<ConfigProviderTheme>,
    default: getTheme(),
    validator: validatorThemes
  }
}

export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>
