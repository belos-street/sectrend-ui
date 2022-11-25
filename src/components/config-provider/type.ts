import type { LocaleType } from '../../locale/type'
import type { InjectionKey } from 'vue'

export type ConfigProviderTheme = 'light' | 'dark'

export const configProviderLocaleKey: InjectionKey<LocaleType> = Symbol()
