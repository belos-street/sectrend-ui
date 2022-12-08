import drawer from '../drawer'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('drawer test', () => {
  it('mount default slots', () => {
    const wrapper = mount(drawer, {
      slots: { default: <></> }
    })
    expect(wrapper.element.innerHTML).toContain('txt')
  })
})