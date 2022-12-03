import { defineComponent } from 'vue'
import { Closable } from '../icon'
import { Icon } from '../components/icon'
import '../styles/close-btn.css'

export default defineComponent({
  components: { Icon },
  setup() {
    return () => (
      <div class="s-close-btn">
        <Icon icon={Closable} />
      </div>
    )
  }
})
