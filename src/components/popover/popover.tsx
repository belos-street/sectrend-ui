import { defineComponent } from 'vue'
import { popoverProps } from './props'

import popContainer from '../pop-container/pop-container'
import { _name } from '.'

export default defineComponent({
  name: 'SPopover',
  props: popoverProps,
  components: {
    popContainer
  },
  setup(props, { slots }) {
    return () => (
      <popContainer
        {...props}
        name={_name}
        v-slots={{
          trigger: () => slots.trigger && slots.trigger()
        }}>
        {slots.default && slots.default()}
      </popContainer>
    )
  }
})
