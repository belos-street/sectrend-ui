import { defineComponent } from 'vue'
import { popdialogProps } from './props'
// import { setClass } from './src/set-class'
import { Popconfirm } from '../popconfirm'
import { Divider } from '../divider'
import { Icon } from '../icon'
import { Closable } from '../../icon'
import './style/index.css'

export default defineComponent({
  name: 'SPopdialog',
  props: popdialogProps,
  components: { Popconfirm, Divider, Icon },
  setup(props, { slots, attrs }) {
    return () => (
      <Popconfirm
        {...props}
        showIcon={false}
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
                <div class="s-popdialog-header--closable">
                  <Icon icon={Closable} />
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
