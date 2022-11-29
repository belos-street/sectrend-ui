import { defineComponent } from 'vue'
import { popoverProps } from './props'

import popContainer from '../pop-container/pop-container'

export default defineComponent({
  name: 'SPopover',
  props: popoverProps,
  components: {
    popContainer
  },
  setup(props, { slots }) {
    return () => (
      <pop-container
        {...props}
        v-slots={{
          trigger: () => slots.trigger && slots.trigger()
        }}>
        {slots.default && slots.default()}
      </pop-container>
    )
  }
})
