import { defineComponent } from 'vue'
import { dividerProps } from './props'
import { setClass, setDividerLineClass } from './src/set-class'
import './style/index.css'

export default defineComponent({
  name: 'SDivider',
  props: dividerProps,
  setup(props) {
    return () => (
      <div class={setClass(props)}>
        {props.titleText && !props.vertical && (
          <>
            <div class={setDividerLineClass(props.titlePlace, 'left')} />
            <span class="s-divider--text">{props.titleText}</span>
            <div class={setDividerLineClass(props.titlePlace, 'right')} />
          </>
        )}
      </div>
    )
  }
})
