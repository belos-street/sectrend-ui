import type { App } from 'vue'
import { Button as SButton } from './components/button'
import { Tag as STag } from './components/tag'
import { Icon as SIcon } from './components/icon'
import { Divider as SDivider } from './components/divider'
import { ConfigProvider as SConfigProvider } from './components/config-provider'
import { Space as SSpace } from './components/space'
import { Popover as SPopover } from './components/popover'
import { Popconfirm as SPopconfirm } from './components/popconfirm'
import { Popdialog as SPopdialog } from './components/popdialog'
import { Breadcrumb as SBreadcrumb, BreadcrumbItem as SBreadcrumbItem } from './components/breadcrumb'

import './styles/sectrend-ui.css'
export * from './locale'

export {
  SButton,
  STag,
  SIcon,
  SDivider,
  SConfigProvider,
  SSpace,
  SPopover,
  SPopconfirm,
  SPopdialog,
  SBreadcrumb,
  SBreadcrumbItem
}

export default {
  install(app: App) {
    app.component(SButton.name, SButton)
    app.component(STag.name, STag)
    app.component(SIcon.name, SIcon)
    app.component(SDivider.name, SDivider)
    app.component(SConfigProvider.name, SConfigProvider)
    app.component(SSpace.name, SSpace)
    app.component(SPopover.name, SPopover)
    app.component(SPopconfirm.name, SPopconfirm)
    app.component(SPopdialog.name, SPopdialog)
    app.component(SBreadcrumb.name, SBreadcrumb)
    app.component(SBreadcrumbItem.name, SBreadcrumbItem)
  }
}
