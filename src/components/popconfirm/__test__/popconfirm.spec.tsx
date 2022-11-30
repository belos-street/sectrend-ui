import popconfirm from '../popconfirm'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('popconfirm test', () => {
  it('mount default slots', () => {
    const wrapper = mount(popconfirm, {
      slots: { default: <></> }
    })
    expect(wrapper.element.innerHTML).toContain('txt')
  })
})