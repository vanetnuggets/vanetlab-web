<script>
import About from "../pages/About.vue"
import Team from "../pages/Team.vue"
import Zapisnik from "../pages/Zapisnik.vue"


export default {
  name: "Home",
  components: {
    About, Team, Zapisnik
  }
}

</script>

<template>
  <div>
    <About />
    <Team />
    <Zapisnik />
  </div>
</template>
