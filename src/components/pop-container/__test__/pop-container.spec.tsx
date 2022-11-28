import pop-container from '../pop-container'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('pop-container test', () => {
  it('mount default slots', () => {
    const wrapper = mount(pop-container, {
      slots: { default: <></> }
    })
    expect(wrapper.element.innerHTML).toContain('txt')
  })
})