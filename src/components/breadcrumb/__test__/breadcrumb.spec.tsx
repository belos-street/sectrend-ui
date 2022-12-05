import breadcrumb from '../breadcrumb'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('breadcrumb test', () => {
  it('mount default slots', () => {
    const wrapper = mount(breadcrumb, {
      slots: { default: <></> }
    })
    expect(wrapper.element.innerHTML).toContain('txt')
  })
})