import { defineComponent, renderSlot } from 'vue'
import { breadcrumbItemProps } from './props'

import './style/index.css'

export default defineComponent({
  name: 'SBreadcrumbItem',
  props: breadcrumbItemProps,
  emits: ['click'],
  setup(props, { slots, emit }) {
    const handleClick = (e: Event) => {
      emit('click', e)
      if (!props.href) return
      // window.location.href = props.href
      window.history.replaceState(null, '', props.href)
    }
    return () => (
      <div
        class={`s-breadcrumb-item${props.clickable && !props.isLast ? ' s-breadcrumb-item--click' : ''}`}
        onClick={(e) => !props.isLast && props.clickable && handleClick(e)}>
        {renderSlot(slots, 'default')}
      </div>
    )
  }
})
