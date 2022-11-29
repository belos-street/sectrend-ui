import { defineComponent } from 'vue'
import { popoverProps } from './props'
import { setClass } from './src/set-class'
import './style/index.css'

import popContainer from '../pop-container/pop-container'

export default defineComponent({
  name: 'SPopover',
  props: popoverProps,
  setup(props, { slots }) {
    return () => <>{slots.default && slots.default()}</>
  }
})
