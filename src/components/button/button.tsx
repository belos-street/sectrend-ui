import { defineComponent } from 'vue'
import { _name } from './index'
import { buttonProps } from './props'
import { setClass } from './src/set-class'
import { Loading } from '../../icon'
import './style/index.css'

export default defineComponent({
  name: 'SButton',
  emits: ['click'],
  props: buttonProps,
  setup(props, { slots, emit }) {
    return () => (
      <button
        class={setClass(props)}
        disabled={props.disabled || props.loading}
        onClick={(evt: MouseEvent) => emit('click', evt)}>
        {props.loading && (
          <i class={`${_name}--loading s-button--icon s-button--icon__loading`}>
            <Loading />
          </i>
        )}
        {!props.loading && slots.icon && <div class="s-button--icon">{slots.icon()}</div>}
        <span>{slots.default && slots.default()}</span>
      </button>
    )
  }
})
