export * from './src/entry'
import SectrendUI from './src/entry'
export default SectrendUI

declare module 'vue' {
  export interface GlobalComponents {
    SButton: typeof import('./src/entry')['SButton']
    STag: typeof import('./src/entry')['STag']
    SIcon: typeof import('./src/entry')['SIcon']
  }
}
