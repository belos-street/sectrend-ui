let name = await question('input component name: '),
  path = './src/components',
  capName = `${name[0].toUpperCase()}${name.slice(1)}`

cd(path)
await fs.mkdir(name)
cd(name)

/** 1.单元测试文件 */
await fs.mkdir('__test__')
await fs.writeFile(
  `__test__/${name}.spec.tsx`,
  `import ${name} from '../${name}'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('${name} test', () => {
  it('mount default slots', () => {
    const wrapper = mount(${name}, {
      slots: { default: <></> }
    })
    expect(wrapper.element.innerHTML).toContain('txt')
  })
})`
)

/** 2.src - set-class*/
await fs.mkdir('src')
await fs.writeFile(
  `src/set-class.ts`,
  `import { _name } from '..'
import { type ${capName}Props } from '../props'

export const setClass = (props: ${capName}Props) => {
  let classStr = _name
  return classStr
}`
)

/** 3.style.css */
await fs.mkdir('style')
await fs.writeFile(
  `style/index.css`,
  `.s-${name} {

}`
)

/** 4.index.ts */
await fs.writeFile(
  `index.ts`,
  `export { default as ${capName} } from './${name}'
export type { ${capName}Props } from './props'
  
export const _name = 's-${name}'`
)

/** 5.props.ts */
await fs.writeFile(
  `props.ts`,
  `import type { PropType, ExtractPropTypes } from 'vue'
export const ${name}Props = {
}
  
export type ${capName}Props = ExtractPropTypes<typeof ${name}Props>`
)

/** 6.tsx.ts */
await fs.writeFile(
  `${name}.tsx`,
  `import { defineComponent } from 'vue'
import { ${name}Props } from './props'
import { setClass } from './src/set-class'
export default defineComponent({
  name: 'S${capName}',
  props: ${name}Props,
  setup(props, { slots }) {
    return () => (
      <>{slots.default && slots.default()}</>
    )
  }
})`
)

/** 7.type.ts */
await fs.writeFile(`type.ts`, `export type ${capName}Props = {} `)

console.info(`create success~`)
