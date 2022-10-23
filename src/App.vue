<template>
  <Background />
  <router-view  />
  
  <header :class="get_theme">
    <VHeader />
  </header>

  <VFooter />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import VHeader from './components/VHeader.vue'
import VFooter from './components/VFooter.vue'
import HomeView from './views/HomeView.vue'
import Background from "./components/Background.vue"

import {} from 'vuex'

export default {
  name: "App",
  components: {
    VHeader, HomeView, Background, VFooter
  },
  computed: {
    fadein() {
      return this.$store.getters.fadein_els;
    },
    get_theme() {
    return this.$store.getters.theme
  }
  },
  date() {
    return {
      
    }
  },
  mounted() {
    document.addEventListener('scroll', this.test);
    this.$store.dispatch("handleScroll")
  },
  unmounted() {
    document.removeEventListener('scroll');
  },
  methods: {
    test() {
      this.$store.dispatch('handleScroll');
    }
  },
}
</script>