import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// @ts-ignore
import VueApexCharts from 'vue3-apexcharts'
import ElementPlus from 'element-plus'

import './assets/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueApexCharts)
app.use(ElementPlus)

app.mount('#app')
