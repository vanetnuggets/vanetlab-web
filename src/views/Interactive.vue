<template>
  <Frame v-show="show != 0 && showing">
    <div v-if="show == 1" >
      <About />
    </div>
    <div v-if="show == 2">
      <Team />
    </div>
    <div v-if="show == 3">
      <Zapisnik />
    </div>
  </Frame>
</template>

<script>
import About from "../pages/About.vue"
import Team from "../pages/Team.vue"
import Zapisnik from "../pages/Zapisnik.vue"
import Frame from "../components/Frame.vue"

export default {
  name: "Dev",
  computed: {
    show() {
      let t = this.$store.getters.show;
      return t
    },
    showing() {
      return this.$store.getters.showing;
    }
  },
  components: {
    About, Team, Zapisnik, Frame
  },
  mounted() {
    
  }
}
</script>