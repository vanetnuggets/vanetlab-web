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
  }
}

</script>

<template>
  <div class="main glass">
    <About />
    <Team />
    <Zapisnik />
  </div>
</template>

<style scoped>
  .glass {
    background: white;
    opacity: 0.85;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(86, 147, 195, 1);
  }
</style>

<style>
html{
  scroll-behavior: smooth;
}

</style>
