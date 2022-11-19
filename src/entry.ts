import type { App } from 'vue'
import SButton from '@/button'

// 导出单独组件
export { SButton }

// 编写一个插件，实现一个install方法
export default {
  install(app: App) {
    app.component(SButton.name, SButton)
  }
}
