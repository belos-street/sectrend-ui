import { defineComponent, renderSlot } from 'vue'
import { breadcrumbItemProps } from './props'

import './style/index.css'

export default defineComponent({
  name: 'SBreadcrumbItem',
  props: breadcrumbItemProps,
  emits: ['click'],
  setup(props, { slots, emit }) {
    return () => (
      <div
        class={`s-breadcrumb-item${props.clickable ? ' s-breadcrumb-item--click' : ''}`}
        onClick={(e) => emit('click', e)}>
        {renderSlot(slots, 'default')}
      </div>
    )
  }
})
