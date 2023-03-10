import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'
import router from './router'

import '@unocss/reset/tailwind.css'
import './styles/main.scss'
import 'uno.css'
import 'animate.css'

const app = createApp(App)

app.use(autoAnimatePlugin)
app.use(router)
app.mount('#app')
