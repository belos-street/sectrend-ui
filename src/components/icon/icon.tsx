import { defineComponent, h } from 'vue'
import { iconProps } from './props'
import { setStyle } from './src/set-style'
export default defineComponent({
  name: 'SIcon',
  props: iconProps,
  setup(props, { slots }) {
    return () => (
      <i class="s-icon" style={setStyle(props)}>
        {props.icon ? <>{h(props.icon)}</> : <>{slots.default && slots.default()}</>}
      </i>
    )
  }
})
