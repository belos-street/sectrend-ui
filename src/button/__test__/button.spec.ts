import button from '../button'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

/**
 * describe 测试分组 描述
 * it 测试内容的描述
 * mount 对组件进行dom测试
 * expect 断言
 *
 * wrapper.classes() 获取dom的所有class
 * wrapper.text() 获取dom文本内容
 * wrapper.attributes() 获取dom的属性
 */
describe('button test', () => {
  it('mount default slots', () => {
    const wrapper = mount(button, {
      slots: { default: 'Button Text' } //传入插槽
    })

    expect(wrapper.text()).toContain('Button')
    expect(wrapper.text()).toContain('Text')
    expect(wrapper.text()).toBe('Button Text')
  })

  it('mount props color', () => {
    const wrapper = mount(button, {
      props: { color: 'red' } //传入插槽
    })

    expect(wrapper.attributes().style).toContain('color: red')
  })
})
