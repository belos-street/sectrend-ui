import { defineComponent, ref, Transition, watch, nextTick } from 'vue'
import { popContainerProps } from './props'
import './style/index.css'
import { useElementHover } from '@vueuse/core'
import type { PopArrow, PopContainerPropsPlacement } from './type'
import { n } from 'vitest/dist/index-6e18a03a'

export default defineComponent({
  name: 'SPopContainer',
  props: popContainerProps,
  setup(props, { slots }) {
    const popRef = ref<HTMLElement | null>(null)
    const isHovered = useElementHover(popRef)
    const popShowFlag = ref<boolean>(false)
    const popTranslate = ref('')
    const popContentRef = ref<HTMLElement | null>(null)
    const popArrow = ref<PopArrow>('top')

    /**
     * 处理Trigger的click事件
     */
    function handleTriggerClick() {
      if (props.trigger !== 'click') return
      popShowFlag.value = true
      nextTick(() => {
        setPopPlacement(props.placement)
      })
    }

    /**
     * placement位置计算处理和三角型
     */
    function setPopPlacement(placement: PopContainerPropsPlacement) {
      const clientWidth = popContentRef.value!.clientWidth
      const clientHeight = popContentRef.value!.clientHeight
      const popWidth = popRef.value!.clientWidth
      const popHeight = popRef.value!.clientHeight

      if (placement === 'top-start') {
        popTranslate.value = `translateY(${-100}%)`
        popArrow.value = 'top'
      } else if (placement === 'top') {
        popTranslate.value = `translateY(${-100}%) translateX(${(popWidth - clientWidth) / 2}px)`
        popArrow.value = 'top'
      } else if (placement === 'top-end') {
        console.log(popWidth - clientWidth)
        popTranslate.value = `translateY(${-100}%) translateX(${popWidth - clientWidth}px)`
        popArrow.value = 'top'
      } else if (placement === 'right-start') {
        popTranslate.value = `translateX(${popWidth}px)`
        popArrow.value = 'right'
      } else if (placement === 'right') {
        popTranslate.value = `translateX(${popWidth}px) translateY(${(popHeight - clientHeight) / 2}px)`
        popArrow.value = 'right'
      } else if (placement === 'right-end') {
        popTranslate.value = `translateX(${popWidth}px) translateY(${popHeight - clientHeight}px)`
        popArrow.value = 'right'
      } else if (placement === 'bottom-end') {
        popTranslate.value = `translateY(${popHeight}px) translateX(${popWidth - clientWidth}px)`
        popArrow.value = 'bottom'
      } else if (placement === 'bottom') {
        popTranslate.value = `translateY(${popHeight}px) translateX(${(popWidth - clientWidth) / 2}px)`
        popArrow.value = 'bottom'
      } else if (placement === 'bottom-start') {
        popTranslate.value = `translateY(${popHeight}px)`
        popArrow.value = 'bottom'
      } else if (placement === 'left-end') {
        popTranslate.value = `translateX(${-100}%)  translateY(${popHeight - clientHeight}px)`
        popArrow.value = 'left'
      } else if (placement === 'left') {
        popTranslate.value = `translateX(${-100}%) translateY(${(popHeight - clientHeight) / 2}px)`
        popArrow.value = 'left'
      } else if (placement === 'left-start') {
        popTranslate.value = `translateX(${-100}%)`
        popArrow.value = 'left'
      }
    }

    watch(isHovered, (newVal) => {
      if (props.trigger !== 'hover') return
      popShowFlag.value = newVal

      if (!newVal) return
      nextTick(() => {
        setPopPlacement(props.placement)
      })
    })

    return () => (
      <div class="s-pop-container" ref={popRef}>
        <div class="s-pop-content" ref={popContentRef}>
          <Transition name="pop--active">
            {popShowFlag.value && (
              <div class="s-popover" style={`transform: ${popTranslate.value}`}>
                {props.showArrow && <div class={`s-pop--arrow s-pop--arrow__${popArrow.value}`} />}
                <div class="s-popover-content">{slots.default && slots.default()}</div>
              </div>
            )}
          </Transition>
        </div>

        <div onClick={handleTriggerClick} class="s-pop-trigger--container">
          {slots.trigger && slots.trigger()}
        </div>
      </div>
    )
  }
})
