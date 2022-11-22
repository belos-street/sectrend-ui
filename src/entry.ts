import type { App } from 'vue'
import { Button as SButton } from './components/button'
import { Tag as STag } from './components/tag'
import { Icon as SIcon } from './components/icon'

import './styles/sectrend-ui.css'

export { SButton, STag, SIcon }

export default {
  install(app: App) {
    app.component(SButton.name, SButton)
    app.component(STag.name, STag)
    app.component(SIcon.name, SIcon)
  }
}
