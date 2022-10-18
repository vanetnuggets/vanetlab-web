<script>
import About from "../pages/About.vue"
import Team from "../pages/Team.vue"
import Zapisnik from "../pages/Zapisnik.vue"
import Sprinty from "../pages/Sprinty.vue"

export default {
  name: "Home",
  components: {
    About, Team, Sprinty, Zapisnik
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

<template>
  <div class="main" :class="get_theme">
    <About />
    <Team />
    <Sprinty />
    <Zapisnik />
  </div>
</template>
