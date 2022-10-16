import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAnimateOnScroll from 'vue-animate-onscroll'

import 'animate.css';
import './assets/main.scss'
import './assets/animation.scss'
import './assets/background.scss'

import store from './store/ui_elements'

const app = createApp(App)

app.use(store);

app.use(VueAnimateOnScroll)

app.use(router)

app.mount('#app')
