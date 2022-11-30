import { defineComponent, ref, Transition, watch, nextTick, onMounted } from 'vue'
import { popContainerProps } from './props'
import './style/index.css'
import { useElementHover, onClickOutside } from '@vueuse/core'
import type { PopContainerPropsPlacement } from './type'
// import { overflowDetection } from './src/overflow-detection'

export default defineComponent({
  name: 'SPopContainer',
  props: popContainerProps,
  setup(props, { slots }) {
    /**
     * @popRef s-pop-container的dom元素
     * @popTranslate s-pop-box的translate距离
     * @isHovered 监听s-pop-container是否hover
     * @popContentRef s-pop-content的dom元素
     * @popShowFlag 控制pop隐藏显示
     */
    const popRef = ref<HTMLElement | null>(null)
    const popTranslate = ref('')
    const isHovered = useElementHover(popRef)
    const popContentRef = ref<HTMLElement | null>(null)
    const popShowFlag = ref<boolean>(props.show)

    const popArrow = ref('')
    const popBoxFlex = ref('')

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

    onClickOutside(popRef, () => {
      if (props.trigger !== 'click') return
      popShowFlag.value = false
    })

    /**
     * 监听isHovered 为popShowFlag赋值
     */
    watch(isHovered, (newVal) => {
      if (props.trigger !== 'hover') return
      popShowFlag.value = newVal
      if (!newVal) return
      nextTick(() => {
        setPopPlacement(props.placement)
      })
    })

    /**
     * placement位置计算处理
     */
    function setPopPlacement(placement: PopContainerPropsPlacement) {
      const clientWidth = popContentRef.value!.clientWidth
      const clientHeight = popContentRef.value!.clientHeight
      const popWidth = popRef.value!.clientWidth
      const popHeight = popRef.value!.clientHeight

      /**
       * 溢出检测 --- 未完成 ---
       * 溢出取值：
       *  1.s-pop-content + 偏远量(popTranslate.value) = s-pop-box
       *  2. 根据s-pop-box距离浏览器的相对位置 和 浏览器的宽高来计算是否溢出
       *  3. 若溢出 取对立值
       *
       * 对立值 - 首位
       *  top-> bootm
       *  bottom-> top
       *  left -> right
       *  right -> left
       * exp: top-start -> bottom-start
       * placement = overflowDetection(placement,clientWidth,clientHeight,popWidth)
       */

      if (placement === 'top-start') {
        popTranslate.value = `translateY(${-100}%)`
      } else if (placement === 'top') {
        popTranslate.value = `translateY(${-100}%) translateX(${(popWidth - clientWidth) / 2}px);`
      } else if (placement === 'top-end') {
        popTranslate.value = `translateY(${-100}%) translateX(${popWidth - clientWidth}px)`
      } else if (placement === 'right-start') {
        popTranslate.value = `translateX(${popWidth}px)`
      } else if (placement === 'right') {
        popTranslate.value = `translateX(${popWidth}px) translateY(${(popHeight - clientHeight) / 2}px)`
      } else if (placement === 'right-end') {
        popTranslate.value = `translateX(${popWidth}px) translateY(${popHeight - clientHeight}px)`
      } else if (placement === 'bottom-end') {
        popTranslate.value = `translateY(${popHeight}px) translateX(${popWidth - clientWidth}px)`
      } else if (placement === 'bottom') {
        popTranslate.value = `translateY(${popHeight}px) translateX(${(popWidth - clientWidth) / 2}px)`
      } else if (placement === 'bottom-start') {
        popTranslate.value = `translateY(${popHeight}px)`
      } else if (placement === 'left-end') {
        popTranslate.value = `translateX(${-100}%)  translateY(${popHeight - clientHeight}px)`
      } else if (placement === 'left') {
        popTranslate.value = `translateX(${-100}%) translateY(${(popHeight - clientHeight) / 2}px)`
      } else if (placement === 'left-start') {
        popTranslate.value = `translateX(${-100}%)`
      }
    }

    /**
     * 处理三角形位置和s-pop-box
     */
    function setPopArrow() {
      const placement = props.placement
      if (placement === 'top-start') {
        popBoxFlex.value = `flex-direction: column-reverse;`
        popArrow.value = 's-pop--arrow__top__start'
      } else if (placement === 'top') {
        popBoxFlex.value = `flex-direction: column-reverse; align-items: center;`
        popArrow.value = 's-pop--arrow__top'
      } else if (placement === 'top-end') {
        popBoxFlex.value = 'flex-direction: column-reverse; align-items: flex-end;'
        popArrow.value = 's-pop--arrow__top__end'
      } else if (placement === 'right-start') {
        popBoxFlex.value = ''
        popArrow.value = 's-pop--arrow__right__start'
      } else if (placement === 'right') {
        popBoxFlex.value = 'align-items: center;'
        popArrow.value = 's-pop--arrow__right'
      } else if (placement === 'right-end') {
        popBoxFlex.value = 'align-items: flex-end;'
        popArrow.value = 's-pop--arrow__right__end'
      } else if (placement === 'bottom-end') {
        popBoxFlex.value = 'flex-direction: column; align-items: flex-end;'
        popArrow.value = 's-pop--arrow__bottom__end'
      } else if (placement === 'bottom') {
        popBoxFlex.value = 'flex-direction: column; align-items: center;'
        popArrow.value = 's-pop--arrow__bottom'
      } else if (placement === 'bottom-start') {
        popBoxFlex.value = 'flex-direction: column;'
        popArrow.value = 's-pop--arrow__bottom__start'
      } else if (placement === 'left-end') {
        popBoxFlex.value = 'flex-flow: row-reverse; align-items: flex-end;'
        popArrow.value = 's-pop--arrow__left__end'
      } else if (placement === 'left') {
        popBoxFlex.value = 'flex-flow: row-reverse; align-items: center;'
        popArrow.value = 's-pop--arrow__left'
      } else if (placement === 'left-start') {
        popBoxFlex.value = 'flex-flow: row-reverse;'
        popArrow.value = 's-pop--arrow__left__start'
      }
    }

    onMounted(() => {
      setPopArrow()
    })

    return () => (
      <div class="s-pop-container" ref={popRef}>
        <div class="s-pop-content" ref={popContentRef}>
          <Transition name="pop--active">
            {popShowFlag.value && (
              <div class="s-pop-box" style={`${popBoxFlex.value} transform: ${popTranslate.value}`}>
                <div class={`s-pop--arrow ${popArrow.value} ${props.showArrow ? '' : 's-pop--arrow__none'}`} />
                <div class={`${props.name} s-pop-box--content ${props.raw ? '' : 's-pop-box__no__raw'}`}>
                  {slots.default && slots.default()}
                </div>
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
