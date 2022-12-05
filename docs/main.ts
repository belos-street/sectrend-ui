import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import SUI from '../src/entry' //引用方式1 全局引用
import NUI from 'naive-ui'
// import { SButton } from '../src/entry' //引用方式2 按需加载

const app = createApp(App)
app.use(SUI) //引用方式1 全局引用
app.use(NUI)
//app.component(SButton.name, SButton)  //引用方式2 按需加载
app.use(createPinia())
app.use(router)

app.mount('#app')
