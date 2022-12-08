export * from './src/entry'
import SectrendUI from './src/entry'
export default SectrendUI

declare module 'vue' {
  export interface GlobalComponents {
    SButton: typeof import('./src/entry')['SButton']
    STag: typeof import('./src/entry')['STag']
    SIcon: typeof import('./src/entry')['SIcon']
    SDivider: typeof import('./src/entry')['SDivider']
    SConfigProvider: typeof import('./src/entry')['SConfigProvider']
    SSpace: typeof import('./src/entry')['SSpace']
    SPopover: typeof import('./src/entry')['SPopover']
    SPopconfirm: typeof import('./src/entry')['SPopconfirm']
    SPopdialog: typeof import('./src/entry')['SPopdialog']
    SBreadcrumb: typeof import('./src/entry')['SBreadcrumb']
    SBreadcrumbItem: typeof import('./src/entry')['SBreadcrumbItem']
    SSpin: typeof import('./src/entry')['SSpin']
    SDrawer: typeof import('./src/entry')['SDrawer']
  }
  interface ComponentCustomProps {
    // hello?: string
  }

  interface ComponentCustomProperties {
    //    $http: typeof axios
    // $translate: (key: string) => string
  }
}
