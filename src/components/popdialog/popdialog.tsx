import { defineComponent, ref, watch } from 'vue'
import { popdialogProps } from './props'
import { Popconfirm } from '../popconfirm'
import { Divider } from '../divider'
import CloseBtn from '../../common/close-btn'
import './style/index.css'

export default defineComponent({
  name: 'SPopdialog',
  props: popdialogProps,
  components: { Popconfirm, Divider, CloseBtn },
  emits: ['update:show'],
  setup(props, { slots, attrs, emit }) {
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
      <Popconfirm
        {...props}
        showIcon={false}
        v-model:show={popShow.value}
        {...attrs}
        v-slots={{
          trigger: () => slots.trigger && slots.trigger(),
          action: slots.action ? () => slots.action && slots.action() : null
        }}>
        <div class="s-popdialog-header">
          {slots.header ? (
            slots.header()
          ) : (
            <>
              <div class="s-popdialog-header--text">{props.title}</div>
              {props.closable && (
                <div class="s-popdialog-header--closable" onClick={() => (popShow.value = false)}>
                  <close-btn />
                </div>
              )}
            </>
          )}
        </div>

        <Divider class="s-popdialog-divider" />
        {slots.default && slots.default()}
      </Popconfirm>
    )
  }
})
