<template>
  <Background />
  <router-view  />
  
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

import {} from 'vuex'

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
  computed: {
    fadein() {
      return this.$store.getters.fadein_els;
    }
  },
  date() {
    return {
      
    }
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  unmounted() {
    document.removeEventListener('scroll')
  },
  methods: {
    handleScroll(event) {
      for (var i = 0; i < this.fadein.length; i++) {
        var elem = this.fadein[i]
        if (isElemVisible(elem)) {
          elem.style.opacity = '1'
          elem.style.transform = 'scale(1)'
        } else {
          elem.style.opacity = '0'
          elem.style.transform = 'scale(0)'
        }
      }
    }
  }
}
</script>