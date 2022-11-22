import { defineComponent } from 'vue'
import { buttonProps } from './props'

export default defineComponent({
  name: 'SButton',
  emits: ['click'],
  props: buttonProps,
  setup(props, { slots, emit }) {
    return () => (
      <button style={{ color: props.color }} onClick={(evt: MouseEvent) => emit('click', evt)}>
        {slots.default && slots.default()}
      </button>
    )
  }
})
