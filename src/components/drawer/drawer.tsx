import { defineComponent, Teleport, Transition, renderSlot, inject } from 'vue'
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
  emits: ['update:show'],
  components: { Divider, SButton },
  setup(props, { slots, emit }) {
    const lang = inject(configProviderLocaleKey, zhCN)

    return () => (
      <Teleport to="body">
        <div class="s-drawer-container">
          <Transition name="s-drawer-mask">{props.show && <div class="s-drawer--mask" />}</Transition>
          <Transition name={`s-drawer-${props.placement}`}>
            {props.show && (
              <div class="s-drawer ">
                <div class="s-drawer--header">{props.title}</div>
                <Divider class="s-drawer--divider" />
                <div class="s-drawer--content">{renderSlot(slots, 'default')}</div>
                <Divider class="s-drawer--divider" />
                <div class="s-drawer--footer">
                  <s-button onClick={() => emit('update:show', false)} size="small">
                    {props.cancelText ?? lang.cancel}
                  </s-button>
                  <s-button size="small" type="info">
                    {props.confirmText ? props.confirmText : lang.confirm}
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
