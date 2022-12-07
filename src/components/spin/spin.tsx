import { defineComponent, renderSlot, Transition } from 'vue'
import { spinProps } from './props'
import { Icon } from '../icon'
import { Loading } from '../../icon'
import { setIconClass } from './src/set-class'
import './style/index.css'

export default defineComponent({
  name: 'SSpin',
  props: spinProps,
  components: { Transition, Icon },
  setup(props, { slots }) {
    return () => (
      <div class="s-spin">
        <div class="s-spin--content">{renderSlot(slots, 'default')}</div>
        <Transition name="s-spin">
          <div class="s-spin--body" v-show={!slots.default || (slots.default && props.show)}>
            <div class={setIconClass(props.size)}>
              {slots.icon ? (
                renderSlot(slots, 'icon')
              ) : (
                <>
                  <Icon spin icon={Loading} />
                </>
              )}
            </div>
            {slots.description && <div class="s-spin--description">{renderSlot(slots, 'description')}</div>}
          </div>
        </Transition>
      </div>
    )
  }
})
