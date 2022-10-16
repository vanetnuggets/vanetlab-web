<template>
  <Background />
  <home-view  class="main" />
  
  <header>
    <VHeader />
  </header>

  <footer>
    <VFooter />
  </footer>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import VHeader from './components/VHeader.vue'
import VFooter from './components/VFooter.vue'
import HomeView from './views/HomeView.vue'
import Background from "./components/Background.vue"

let fadein_elements = []

const handleScroll = (evt) => {
  for (var i = 0; i < fadein_elements.length; i++) {
    var elem = fadein_elements[i]
    if (isElemVisible(elem)) {
      elem.style.opacity = '1'
      elem.style.transform = 'scale(1)'
    } else {
      elem.style.opacity = '0'
      elem.style.transform = 'scale(0)'
    }
  }
}

const isElemVisible = (el) => {
  var rect = el.getBoundingClientRect()
  var elemTop = rect.top + 100 // 200 = buffer
  var elemBottom = rect.bottom
  return elemTop < window.innerHeight && elemBottom >= 0
}

export default {
  name: "App",
  components: {
    VHeader, HomeView, Background, VFooter
  },
  date() {
    return {
      
    }
  },
  mounted() {
    fadein_elements = Array.from(document.getElementsByClassName('fade-in'))
    document.addEventListener('scroll', handleScroll)
    handleScroll()
  },
  unmounted() {
    document.removeEventListener('scroll')
  }
}
</script>