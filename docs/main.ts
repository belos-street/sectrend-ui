import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './index.vue'
import router from './router'

import './assets/main.css'
import SUI from '../src/entry'
// import SUI from 'sectrend-ui'

const app = createApp(App)
app.use(SUI)
app.use(createPinia())
app.use(router)

app.mount('#app')
