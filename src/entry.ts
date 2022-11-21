import type { App } from 'vue'
import { Button as SButton } from './button'

import '../styles/common.css'

export { SButton }

export default {
  install(app: App) {
    app.component(SButton.name, SButton)
  }
}
