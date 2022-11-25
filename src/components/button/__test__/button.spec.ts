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
 * wrapper.attributes().style 获取dom的属性
 *   expect(wrapper.attributes().style).toContain('color: red')
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

  it('mount props type', () => {
    const wrapper = mount(button, {
      props: { type: 'info' }
    })
    expect(wrapper.classes().toString()).toContain('s-button--type__info')
  })

  it('mount props size', () => {
    const wrapper = mount(button, {
      props: { size: 'small' }
    })
    expect(wrapper.classes().toString()).toContain('s-button--size__small')
  })

  it('mount props round', () => {
    const wrapper = mount(button, {
      props: { round: true }
    })
    expect(wrapper.classes().toString()).toContain('s-button--round')
  })

  it('mount props circle', () => {
    const wrapper = mount(button, {
      props: { circle: true }
    })
    expect(wrapper.classes().toString()).toContain('s-button--circle')
  })

  it('mount props loading', () => {
    const wrapper = mount(button, {
      props: { loading: true }
    })
    expect(wrapper.classes().toString()).toContain('s-button--loading')
  })

  it('mount props text', () => {
    const wrapper = mount(button, {
      props: { text: true }
    })
    expect(wrapper.classes().toString()).toContain('s-button--text')
  })

  it('mount props disabled', () => {
    const wrapper = mount(button, {
      props: { disabled: true }
    })
    expect(wrapper.classes().toString()).toContain('s-button--disabled')
  })
})
