import type { App } from 'vue'
import { Button as SButton } from './components/button'
import { Tag as STag } from './components/tag'

import './styles/common.css'

export { SButton, STag }

export default {
  install(app: App) {
    app.component(SButton.name, SButton)
    app.component(STag.name, STag)
  }
}
