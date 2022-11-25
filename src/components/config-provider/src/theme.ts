import type { ConfigProviderTheme } from '../type'

export const getTheme = (): ConfigProviderTheme =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

export const checkThemeMode = (theme: ConfigProviderTheme) => {
  if (theme === 'dark') {
    document.getElementsByTagName('html')[0].className = 's-theme__dark'
  } else {
    document.getElementsByTagName('html')[0].className = ''
  }
}
