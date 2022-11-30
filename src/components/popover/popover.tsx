import { defineComponent, ref, watch } from 'vue'
import { popoverProps } from './props'

import popContainer from '../pop-container/pop-container'
import { _name } from '.'

export default defineComponent({
  name: 'SPopover',
  props: popoverProps,
  emits: ['update:show'],
  components: {
    popContainer
  },
  setup(props, { slots, emit }) {
    const popShow = ref(props.show)

    watch(
      () => props.show,
      (newVal) => {
        popShow.value = newVal
      }
    )

    watch(popShow, (newVal) => {
      emit('update:show', newVal)
    })

    return () => (
      <popContainer
        {...props}
        v-model:show={popShow.value}
        name={_name}
        v-slots={{
          trigger: () => slots.trigger && slots.trigger()
        }}>
        {slots.default && slots.default()}
      </popContainer>
    )
  }
})
