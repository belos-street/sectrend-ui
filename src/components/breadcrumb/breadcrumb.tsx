import { defineComponent, ref, h } from 'vue'
import { extractSlotsList } from './src/extract-slots-list'
import { breadcrumbProps } from './props'
import { setClass } from './src/set-class'
import BreadcrumbItem from './breadcrumb-item'
import './style/index.css'

export default defineComponent({
  name: 'SBreadcrumb',
  props: breadcrumbProps,
  components: { BreadcrumbItem },
  setup(props, { slots }) {
    const itemList = ref(slots.default && extractSlotsList(slots.default()))
    return () => (
      <nav class={setClass()}>
        {itemList.value?.map((item, index) => (
          <div
            class={`s-breadcrumb-item--container${
              index === itemList.value!.length - 1 ? ' s-breadcrumb-item--container__last' : ''
            }`}>
            {h(item, {
              isLast: index === itemList.value!.length - 1
            })}
            <span class="s-breadcrumb-item--separator"> {props.separator} </span>
          </div>
        ))}
      </nav>
    )
  }
})
