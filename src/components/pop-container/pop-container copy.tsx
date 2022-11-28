import { defineComponent, Teleport, ref, watch, Transition } from 'vue'
import { popContainerProps } from './props'
import './style/index.css'
import { useMouseInElement } from '@vueuse/core'
import type { PopContainerPropsPlacement } from './type'

export default defineComponent({
  name: 'SPopContainer',
  props: popContainerProps,
  setup(props, { slots }) {
    const triggerRef = ref<HTMLElement | null>(null)
    const {
      elementPositionX: triggerX,
      elementPositionY: triggerY,
      isOutside: triggerIsOutside,
      x,
      y,
      elementHeight,
      elementWidth
    } = useMouseInElement(triggerRef)

    const popEleRef = ref(null)
    const { elementPositionX: popX, elementPositionY: popY, isOutside: popIsOutside } = useMouseInElement(popEleRef)

    const popShowFlag = ref<boolean>(false)

    const popTranslate = ref('')

    watch(triggerIsOutside, (newVal) => {
      handleTriggerHover(newVal)
    })

    /**
     * 处理Trigger的hover事件
     * @isOutside triggerIsOutside的值 是否移除trigger区域
     */
    function handleTriggerHover(isOutside: boolean) {
      if (props.trigger !== 'hover') return
      if (!isOutside) {
        popShowFlag.value = true
        setPopPlacement(props.placement)
      } else {
        //popShowFlag.value = false
        //   console.log(popIsOutside.value)
      }
    }

    /**
     * 处理Trigger的click事件
     */
    function handleTriggerClick() {
      if (props.trigger !== 'click') return
      popShowFlag.value = true
      setPopPlacement(props.placement)
    }

    /**
     * placement位置计算处理
     */
    function setPopPlacement(placement: PopContainerPropsPlacement) {
      const clientWidth = triggerRef.value!.clientWidth
      const clientHeight = triggerRef.value!.clientHeight
      if (placement === 'top-start') {
        popTranslate.value = `translateY(${-100}%)`
      } else if (placement === 'top') {
        popTranslate.value = `translateY(${-100}%) translateX(${-50}%) translateX(${clientWidth * 0.5}px)`
      } else if (placement === 'top-end') {
        popTranslate.value = `translateY(${-100}%) translateX(${-100}%) translateX(${clientWidth}px)`
      } else if (placement === 'right-start') {
        popTranslate.value = `translateX(${clientWidth}px)`
      } else if (placement === 'right') {
        popTranslate.value = `translateX(${clientWidth}px) translateY(${-clientHeight * 0.5}px)`
      } else if (placement === 'right-end') {
        popTranslate.value = `translateX(${clientWidth}px) translateY(${-clientHeight}px)`
      } else if (placement === 'bottom-end') {
        popTranslate.value = `translateY(${clientHeight}px) translateX(${-100}%) translateX(${clientWidth}px)`
      } else if (placement === 'bottom') {
        popTranslate.value = `translateY(${clientHeight}px) translateX(${-50}%) translateX(${clientWidth * 0.5}px)`
      } else if (placement === 'bottom-start') {
        popTranslate.value = `translateY(${clientHeight}px)`
      } else if (placement === 'left-end') {
        popTranslate.value = `translateX(${-100}%) translateY(${-clientHeight}px)`
      } else if (placement === 'left') {
        popTranslate.value = `translateX(${-100}%) translateY(${-clientHeight * 0.5}px)`
      } else if (placement === 'left-start') {
        popTranslate.value = `translateX(${-100}%)`
      }
    }

    watch(popIsOutside, (newVal) => {
      console.log(newVal, 'popIsOutside', popShowFlag.value)
      //  handleMouseLeaveEle()
      // if(newVal)
    })

    function handleMouseLeaveEle() {
      console.log(popIsOutside.value, triggerIsOutside.value)
      //if (popIsOutside.value && triggerIsOutside.value) popShowFlag.value = false
    }

    // watch(
    //   () => [x.value, y.value],
    //   ([newX, newY]) => {
    //     console.log(newX, elementWidth.value, newY, elementHeight.value)
    //   }
    // )

    return () => (
      <>
        <Teleport to="body">
          <div class="s-pop-container">
            <div
              ref={popEleRef}
              class="s-pop-content"
              style={`transform: translateX(${triggerX.value}px) translateY(${triggerY.value}px) ${popTranslate.value}`}>
              <Transition name="pop--active">
                {popShowFlag.value && <div class="s-popover">{slots.default && slots.default()}</div>}
              </Transition>
            </div>
          </div>
        </Teleport>
        <div ref={triggerRef} onClick={handleTriggerClick} class="s-pop-trigger--container">
          {slots.trigger && slots.trigger()}
        </div>
      </>
    )
  }
})
