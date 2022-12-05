import Breadcrumb from './breadcrumb'
import BreadcrumbItem from './breadcrumb-item'
//export { default as Breadcrumb } from './breadcrumb'

// Breadcrumb.install = function (app: App) {
//   app.component(Breadcrumb.name, Breadcrumb)
// }

// Breadcrumb.breadcrumbItem = BreadcrumbItem

// BreadcrumbItem.install = function (app: App) {
//   app.component(BreadcrumbItem.name, BreadcrumbItem)
// }

export { Breadcrumb, BreadcrumbItem }

export type { BreadcrumbProps } from './props'

export const _name = 's-breadcrumb'
export const _nameItem = 's-breadcrumb-item'
export const NameItem = 'SBreadcrumbItem'
