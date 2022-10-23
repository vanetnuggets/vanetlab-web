<template>
  <div class="tab" @click="goto(1)">
    <a href="#about" :class="get_theme">O projekte</a>
  </div>
  <div class="tab" @click="goto(2)">
    <a href="#team" :class="get_theme">Nas tim</a>
  </div>
  <div class="tab">
    <div class="container maintitle" :class="get_theme">
      VANETlab
    </div>
  </div>
  <div class="tab" @click="goto(4)">
    <a href="#sprinty" :class="get_theme">Sprinty</a>
  </div>
  <div class="tab hmm" @click="goto(3)">
    <a href="#zapisnik" :class="get_theme">Zapisnik</a>
  </div>
</template>

<style scoped>

</style>

<script>
import Themetoggler from './Themetoggler.vue'

export default {
  name: "VHeader",
  components: {
    Themetoggler
  },
  methods: {
    goto(id) {
      this.$store.commit('exit_page');
      setTimeout(()=> {
        this.$store.commit('show_page', id);
      }, 400);
    }
  },
  computed: {
    get_theme() {
      return this.$store.getters.theme
    }
  }
}

</script>
