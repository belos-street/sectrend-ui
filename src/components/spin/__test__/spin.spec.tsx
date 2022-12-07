import spin from '../spin'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Star } from '@/icon'
import { Icon } from '@/components/icon'

describe('spin test', () => {
  it('mount default slots', () => {
    const wrapper = mount(spin, {
      slots: {
        default: (
          <table border="1" class="content">
            <tr>
              <th>Month</th>
              <th>Savings</th>
            </tr>
            <tr>
              <td>January</td>
              <td>$100</td>
            </tr>
            <tr>
              <td>September</td>
              <td>$90</td>
            </tr>
          </table>
        )
      }
    })
    expect(wrapper.element.innerHTML).toContain('<div class="s-spin--body" style="display: none;">')
  })

  it('mount description slots', () => {
    const wrapper = mount(spin, {
      slots: {
        default: (
          <table border="1" class="content">
            <tr>
              <th>Month</th>
              <th>Savings</th>
            </tr>
          </table>
        ),
        description: <>woshi description</>
      }
    })
    expect(wrapper.element.innerHTML).toContain('<div class="s-spin--description">woshi description</div>')
  })

  it('mount icon slots', () => {
    const wrapper = mount(spin, {
      slots: {
        default: (
          <table border="1" class="content">
            <tr>
              <th>Month</th>
              <th>Savings</th>
            </tr>
          </table>
        ),
        icon: <Icon spin icon={Star} />
      }
    })
    expect(wrapper.element.innerHTML).toContain('<path fill="currentColor" d="m512 747.84 228.16 119.936a')
  })
})
