import { defineComponent } from 'vue'
import { buttonProps } from './props'

export default defineComponent({
  name: 'SButton',
  props: buttonProps,
  setup(props, { slots }) {
    return () => <button style={{ color: props.color }}>{slots.default && slots.default()}</button>
  }
})
