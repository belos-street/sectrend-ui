export * from './src/entry'
import SectrendUI from './src/entry'
export default SectrendUI

declare module 'vue' {
  export interface GlobalComponents {
    SButton: typeof import('./src/entry')['SButton']
  }
}
