import type { App } from 'vue'
import SButton from '@/button'

export { SButton }

export default {
  install(app: App) {
    app.component(SButton.name, SButton)
  }
}
