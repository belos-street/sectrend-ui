import { defineComponent, Teleport, Transition, renderSlot, inject, ref, watch, computed } from 'vue'
import { drawerProps, validatorPlacement } from './props'
import { Divider } from '../divider'
import { Button as SButton } from '../button'

import { configProviderLocaleKey } from '../config-provider/type'
import { zhCN } from '../../locale'
import './style/index.css'
import type { DrawerHTMLAttr, DrawerPropsPlacement } from './type'

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

    const placementVal = computed<DrawerPropsPlacement>(() =>
      validatorPlacement(props.placement) ? props.placement : 'right'
    )

    const heightWidthVal = computed<DrawerHTMLAttr>(() => {
      const attr: DrawerHTMLAttr = {}
      if (props.height && (props.placement === 'bottom' || props.placement === 'top')) {
        attr.height = `${props.height}px`
      } else if (props.width && (props.placement === 'left' || props.placement === 'right')) {
        attr.width = `${props.width}px`
      }
      return attr
    })

    return () => (
      <Teleport to="body">
        <div class={`s-drawer-container s-drawer--placement__${placementVal.value}`}>
          <Transition name="s-drawer-mask">
            {props.show && <div class="s-drawer--mask" onClick={() => props.maskClose && handleAfterLeave()} />}
          </Transition>
          <Transition name={`s-drawer-${placementVal.value}`}>
            {props.show && (
              <div class="s-drawer" style={heightWidthVal.value}>
                <div class="s-drawer--header">{slots.header ? renderSlot(slots, 'header') : <>{props.title}</>}</div>
                <Divider class="s-drawer--divider" />
                <div class="s-drawer--content">{renderSlot(slots, 'default')}</div>
                <Divider class="s-drawer--divider" />
                {!props.noFooter && (
                  <div class="s-drawer--footer">
                    {slots.footer ? (
                      renderSlot(slots, 'footer')
                    ) : (
                      <>
                        <s-button onClick={() => handleAfterLeave()} size="small">
                          {props.cancelText ?? lang.cancel}
                        </s-button>
                        <s-button
                          size="small"
                          type="info"
                          loading={confirmLodingState.value}
                          onClick={() => handleConfirm()}>
                          {props.confirmText ?? lang.confirm}
                        </s-button>
                      </>
                    )}
                  </div>
                )}
              </div>
            )}
          </Transition>
        </div>
      </Teleport>
    )
  }
})
