import popconfirm from '../popconfirm'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Star } from '../../../icon'
import { Icon } from '@/components/icon'

const infoSVG = '<path class="c" d="M142.286,29.143a80.014,80.014,0,0,0-'

describe('popconfirm test', () => {
  it('mount default slots', async () => {
    const wrapper = mount(popconfirm, {
      slots: { default: <>hello</>, trigger: <div>trigger</div> }
    })

    await wrapper.get('.s-pop-trigger--container').trigger('click')
    expect(wrapper.element.innerHTML).toContain('<div class="s-popconfirm-content">hello')
    expect(wrapper.element.innerHTML).toContain('<div>trigger</div>')

    //info icon svg
    expect(wrapper.element.innerHTML).toContain(infoSVG)
  })

  it('mount props type', async () => {
    let wrapper = mount(popconfirm, {
      slots: { default: <>hello</>, trigger: <div>trigger</div> },
      props: {
        type: 'success'
      }
    })

    await wrapper.get('.s-pop-trigger--container').trigger('click')
    //success icon svg
    expect(wrapper.element.innerHTML).toContain('<path class="c" d="M80,0a80,80,0,1,0,80,80A80,80,0,0,0,80,')

    wrapper = mount(popconfirm, {
      slots: { default: <>hello</>, trigger: <div>trigger</div> },
      props: {
        type: 'danger'
      }
    })
    await wrapper.get('.s-pop-trigger--container').trigger('click')
    //danger icon svg
    expect(wrapper.element.innerHTML).toContain('<path class="c" d="M100.274,20.529a80,80')

    wrapper = mount(popconfirm, {
      slots: { default: <>hello</>, trigger: <div>trigger</div> },
      props: {
        type: 'warn'
      }
    })
    await wrapper.get('.s-pop-trigger--container').trigger('click')
    //warn icon svg
    expect(wrapper.element.innerHTML).toContain('<path class="a" d="M80,0A80,80,0,1,1,0,80,80.235,80.235,0,0,1,80')
  })

  it('mount icon slots', async () => {
    const wrapper = mount(popconfirm, {
      slots: { default: <>hello</>, trigger: <div>trigger</div>, icon: <Icon icon={Star} /> }
    })

    await wrapper.get('.s-pop-trigger--container').trigger('click')
    //star icon svg
    expect(wrapper.element.innerHTML).toContain('<path fill="currentColor" d="m512 747.84 228.16 119.936a6.')
  })

  it('mount showIcon props', async () => {
    const wrapper = mount(popconfirm, {
      slots: {
        default: <>hello</>,
        trigger: <div>trigger</div>,
        icon: <Icon icon={Star} />
      },
      props: {
        showIcon: false
      }
    })

    await wrapper.get('.s-pop-trigger--container').trigger('click')
    expect(wrapper.element.innerHTML.search('class="s-popconfirm-icon')).toBe(-1)
  })

  it('mount action slots', async () => {
    const wrapper = mount(popconfirm, {
      slots: {
        default: <>hello</>,
        trigger: <div>trigger</div>,
        action: <div class="sssssss">success</div>
      }
    })

    await wrapper.get('.s-pop-trigger--container').trigger('click')
    expect(wrapper.element.innerHTML).toContain('<div class="sssssss">success</div>')
  })

  it('mount cancel-click emit', async () => {
    const wrapper = mount(popconfirm, {
      slots: {
        default: <>hello</>,
        trigger: <div>trigger</div>
      },
      props: { trigger: 'click' }
    })

    await wrapper.get('.s-pop-trigger--container').trigger('click')
    await wrapper.get('.s-button--type__default').trigger('click')
    expect(wrapper.element.innerHTML.search('<div class="s-popconfirm s-pop-box--content')).toBe(-1)
  })
})
