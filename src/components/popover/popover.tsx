import { defineComponent } from 'vue'
import { popoverProps } from './props'
//import { setClass } from './src/set-class'
export default defineComponent({
  name: 'SPopover',
  props: popoverProps,
  setup(props, { slots }) {
    return () => <>{slots.default && slots.default()}</>
  }
})
