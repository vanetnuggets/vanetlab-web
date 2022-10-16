import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAnimateOnScroll from 'vue-animate-onscroll'

import 'animate.css';
import './assets/main.scss'
import './assets/animation.scss'
import './assets/background.scss'


const app = createApp(App)

app.use(VueAnimateOnScroll)

app.use(router)

app.mount('#app')
