import popdialog from '../popdialog'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('popdialog test', () => {
  it('mount default slots', () => {
    const wrapper = mount(popdialog, {
      slots: { default: <></> }
    })
    //  expect(wrapper.element.innerHTML).toContain('txt')
  })
})
