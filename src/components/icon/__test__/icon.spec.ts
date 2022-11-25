import icon from '../icon'
import { Star } from '../../../icon'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('icon test', () => {
  it('mount default slots', () => {
    const wrapper = mount(icon, {
      slots: { default: Star }
    })
    expect(wrapper.element.innerHTML).toContain('svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg')
  })

  it('mount props size', () => {
    const size = 20
    const wrapper = mount(icon, {
      props: { size }
    })
    expect(wrapper.attributes().style).toBe(`font-size: ${size}px;`)
  })

  it('mount props color', () => {
    const color = 'red'
    const wrapper = mount(icon, {
      props: { color }
    })
    expect(wrapper.attributes().style).toBe(`color: ${color};`)
  })

  it('mount props rotate', () => {
    const rotate = 60
    const wrapper = mount(icon, {
      props: { rotate }
    })
    expect(wrapper.attributes().style).toBe(`transform: rotate(${rotate}deg);`)
  })

  it('mount props spin', () => {
    const wrapper = mount(icon, {
      props: { spin: true }
    })
    expect(wrapper.attributes().style).toContain(`s-icon-rotate-360 1s linear infinite`)
  })
})
