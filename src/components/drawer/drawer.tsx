import { defineComponent, Teleport, Transition, renderSlot, inject, ref, watch } from 'vue'
import { drawerProps } from './props'
import { Divider } from '../divider'
import { Button as SButton } from '../button'
import { setClass } from './src/set-class'

import { configProviderLocaleKey } from '../config-provider/type'
import { zhCN } from '../../locale'
import './style/index.css'

export default defineComponent({
  name: 'SDrawer',
  props: drawerProps,
  emits: ['update:show', 'after-leave', 'confirm-click'],
  components: { Divider, SButton },
  setup(props, { slots, emit }) {
    const lang = inject(configProviderLocaleKey, zhCN)
    const confirmLodingState = ref(false)
    const handleAfterLeave = () => {
      emit('after-leave', false)
      emit('update:show', false)
    }

    const handleConfirm = () => {
      confirmLodingState.value = true
      emit('confirm-click', (bool: boolean) => {
        confirmLodingState.value = bool
      })
    }

    watch(
      () => props.show,
      (newVal: boolean) => {
        if (newVal) return
        confirmLodingState.value = false
      }
    )

    return () => (
      <Teleport to="body">
        <div class="s-drawer-container">
          <Transition name="s-drawer-mask">
            {props.show && <div class="s-drawer--mask" onClick={() => props.maskClose && handleAfterLeave()} />}
          </Transition>
          <Transition name={`s-drawer-${props.placement}`}>
            {props.show && (
              <div class="s-drawer" style={`${props.width && `width:${props.width}px;`}`}>
                <div class="s-drawer--header">{props.title}</div>
                <Divider class="s-drawer--divider" />
                <div class="s-drawer--content">{renderSlot(slots, 'default')}</div>
                <Divider class="s-drawer--divider" />
                <div class="s-drawer--footer">
                  <s-button onClick={() => handleAfterLeave()} size="small">
                    {props.cancelText ?? lang.cancel}
                  </s-button>
                  <s-button size="small" type="info" loading={confirmLodingState.value} onClick={() => handleConfirm()}>
                    {props.confirmText ?? lang.confirm}
                  </s-button>
                </div>
              </div>
            )}
          </Transition>
        </div>
      </Teleport>
    )
  }
})
