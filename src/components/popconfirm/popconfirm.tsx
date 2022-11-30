import { defineComponent, inject, ref } from 'vue'
import { popconfirmProps } from './props'
import { PopContainer } from '../pop-container'
import { Icon } from '../icon'
import { _name } from '.'
import { zhCN } from '../../locale'
import { configProviderLocaleKey } from '../config-provider/type'
import { setIconClass } from './src/set-class'
import { setIconType } from '../../common/icon-type'

import './style/index.css'
import '../../styles/icon-type.css'

export default defineComponent({
  name: 'SPopconfirm',
  props: popconfirmProps,
  components: {
    PopContainer
  },
  emits: ['confirm-click', 'cancel-click'],
  setup(props, { slots, emit }) {
    const lang = inject(configProviderLocaleKey, zhCN)
    const popShow = ref(props.show)
    return () => (
      <PopContainer
        {...props}
        name={_name}
        v-model={popShow}
        v-slots={{
          trigger: () => slots.trigger && slots.trigger()
        }}>
        <div class="s-popconfirm-container">
          {props.showIcon ? (
            slots.icon ? (
              <div class="s-popconfirm-icon">{slots.icon()}</div>
            ) : (
              <div class={setIconClass(props)}>{<Icon icon={setIconType(props.type)} />}</div>
            )
          ) : null}

          <div class="s-popconfirm-content">
            {slots.default && slots.default()}
            <div class="s-popconfirm-footer">
              {slots.action ? (
                slots.action()
              ) : (
                <>
                  <s-button
                    size="small"
                    onClick={(e: Event) => {
                      popShow.value = false
                      emit('cancel-click', e)
                    }}>
                    {props.cancelText ? props.cancelText : lang.cancel}
                  </s-button>
                  <s-button size="small" type="info" onClick={(e: Event) => emit('confirm-click', e)}>
                    {props.confirmText ? props.confirmText : lang.confirm}
                  </s-button>
                </>
              )}
            </div>
          </div>
        </div>
      </PopContainer>
    )
  }
})
