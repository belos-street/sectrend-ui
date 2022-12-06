import spin from '../spin'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('spin test', () => {
  it('mount default slots', () => {
    const wrapper = mount(spin, {
      slots: {
        default: (
          <>
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
          </>
        )
      }
    })
    expect(wrapper.element.innerHTML).toContain('txt')
  })
})
