import breadcrumb from '../breadcrumb'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Item from '../breadcrumb-item'

describe('breadcrumb test', () => {
  it('mount default slots', () => {
    const wrapper = mount(breadcrumb, {
      slots: {
        default: (
          <>
            <Item>11</Item>
            <Item>22</Item>
            <Item>33</Item>
          </>
        )
      }
    })

    expect(wrapper.element.innerHTML).toContain('<div class="s-breadcrumb-item">11</div>')
    expect(wrapper.element.innerHTML).toContain(
      '<div class="s-breadcrumb-item--container s-breadcrumb-item--container__last"><div class="s-breadcrumb-item">33</div>'
    )
  })

  it('mount separator props', () => {
    const wrapper = mount(breadcrumb, {
      slots: {
        default: (
          <>
            <Item>11</Item>
            <Item>22</Item>
            <Item>33</Item>
          </>
        )
      },
      props: {
        separator: 'A'
      }
    })

    expect(wrapper.element.innerHTML).toContain('<span class="s-breadcrumb-item--separator"> A </span>')
  })
})
