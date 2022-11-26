import { defineComponent } from 'vue'
import { _name } from '.'
import { spaceProps } from './props'
import { renderSlots } from './src/render-slots'
import { setStyle } from './src/set-style'
import './style/index.css'

export default defineComponent({
  name: 'SSpace',
  props: spaceProps,
  setup(props, { slots }) {
    return () => (
      <div class={_name} style={setStyle(props)}>
        {renderSlots(slots)}
      </div>
    )
  }
})
