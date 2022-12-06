import { defineComponent, renderSlot } from 'vue'
import { breadcrumbItemProps } from './props'

import './style/index.css'

export default defineComponent({
  name: 'SBreadcrumbItem',
  props: breadcrumbItemProps,
  emits: ['click'],
  setup(props, { slots, emit }) {
    const handleClick = () => {
      emit('click', props.href ? props.href : '')
    }
    return () => (
      <div
        class={`s-breadcrumb-item${props.clickable && !props.isLast ? ' s-breadcrumb-item--click' : ''}`}
        onClick={() => !props.isLast && props.clickable && handleClick()}>
        {renderSlot(slots, 'default')}
      </div>
    )
  }
})
