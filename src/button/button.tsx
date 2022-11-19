import { defineComponent, type PropType } from 'vue'

export type IColor = 'black' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'

export default defineComponent({
  name: 'SButton',
  props: {
    color: {
      type: String as PropType<IColor>,
      default: 'blue'
    }
  },
  setup(props, { slots }) {
    return () => <button style={{ color: props.color }}>{slots.default && slots.default()}</button>
  }
})
