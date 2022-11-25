import { defineComponent, provide, watch } from 'vue'
import { configProviderProps } from './props'
import { checkThemeMode } from './src/theme'
import { configProviderLocaleKey } from './type'

export default defineComponent({
  name: 'SConfigProvider',
  props: configProviderProps,
  setup(props, { slots }) {
    provide(configProviderLocaleKey, props.locale)
    watch(
      () => props.theme,
      (newVal) => {
        checkThemeMode(newVal)
      }
    )
    return () => <>{slots.default && slots.default()}</>
  }
})
