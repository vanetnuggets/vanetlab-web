<script>
import About from "../pages/About.vue"
import Team from "../pages/Team.vue"
import Zapisnik from "../pages/Zapisnik.vue"
import Sprinty from "../pages/Sprinty.vue"
import Themetoggler from '../components/Themetoggler.vue'

export default {
  name: "Home",
  components: {
    About, Team, Sprinty, Zapisnik, Themetoggler
  },
  mounted() {
    let fel = Array.from(document.getElementsByClassName('fade-in'))
    for (let e of fel) {
      this.$store.commit('add_fadein_el', e);
    }
    this.$store.dispatch("handleScroll");
  },
  computed: {
    get_theme() {
      return this.$store.getters.theme
    }
  }
}

</script>

<style scoped>
.lft {
  position: fixed;
  bottom: 0px;
  left: 0px;
  margin: 2px;
  z-index: 5;
}
</style>>

<template>
  
  <div class="main" :class="get_theme">
    <About />
    <Team />
    <Sprinty />
    <Zapisnik />
  </div>
  <Themetoggler class="lft"/>
</template>
