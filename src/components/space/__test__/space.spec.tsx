import space from '../space'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('space test', () => {
  it('mount default slots', () => {
    const wrapper = mount(space, {
      slots: {
        default: (
          <>
            <span>1</span>
            <span>1</span>
            <div>
              <span>2</span>
              <span>2</span>
            </div>
          </>
        )
      }
    })

    expect(wrapper.element.innerHTML.match(/s-space--item/g)?.length).toBe(3)
  })

  it('mount props align', () => {
    const wrapper = mount(space, {
      props: { align: 'center' }
    })
    expect(wrapper.attributes().style).toContain(`align-items: center`)
  })

  it('mount props vertical', () => {
    const wrapper = mount(space, {
      props: { vertical: true }
    })
    expect(wrapper.attributes().style).toContain(`flex-flow: column`)
  })

  it('mount props justify', () => {
    const wrapper = mount(space, {
      props: { justify: 'space-evenly' }
    })
    expect(wrapper.attributes().style).toContain(`justify-content: space-evenly`)
  })

  it('mount props size1', () => {
    const size = 8
    const wrapper = mount(space, {
      props: { size }
    })
    expect(wrapper.attributes().style).toContain(`gap: ${size}px`)
  })
})
