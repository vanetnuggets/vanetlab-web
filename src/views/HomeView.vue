<script>
import About from "../pages/About.vue"
import Team from "../pages/Team.vue"
import Zapisnik from "../pages/Zapisnik.vue"

export default {
  name: "Home",
  components: {
    About, Team, Zapisnik
  },
  mounted() {
    let fel = Array.from(document.getElementsByClassName('fade-in'))
    for (let e of fel) {
      this.$store.commit('add_fadein_el', e);
    }
    this.$store.dispatch("handleScroll");
  },
  created() {
    document.title = "VANETnuggets";
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
    <Zapisnik />
  </div>
</template>
