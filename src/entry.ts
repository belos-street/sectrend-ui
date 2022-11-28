import type { App } from 'vue'
import { Button as SButton } from './components/button'
import { Tag as STag } from './components/tag'
import { Icon as SIcon } from './components/icon'
import { Divider as SDivider } from './components/divider'
import { ConfigProvider as SConfigProvider } from './components/config-provider'
import { Space as SSpace } from './components/space'

import { PopContainer as SPopContainer } from './components/pop-container'

import './styles/sectrend-ui.css'
export * from './locale'

export { SButton, STag, SIcon, SDivider, SConfigProvider, SSpace, SPopContainer }

export default {
  install(app: App) {
    app.component(SButton.name, SButton)
    app.component(STag.name, STag)
    app.component(SIcon.name, SIcon)
    app.component(SDivider.name, SDivider)
    app.component(SConfigProvider.name, SConfigProvider)
    app.component(SSpace.name, SSpace)
    app.component(SPopContainer.name, SPopContainer)
  }
}
