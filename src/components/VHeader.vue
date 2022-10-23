<template>
  <div class="tab" @click="goto(1)">
    <a href="#about">O projekte</a>
  </div>
  <div class="tab" @click="goto(2)">
    <a href="#team">Nas tim</a>
  </div>
  <div class="tab">
    <div class="container maintitle">
      VANETlab
    </div>
  </div>
  <div class="tab" @click="goto(4)">
    <a href="#sprinty">Sprinty</a>
  </div>
  <div class="tab hmm" @click="goto(3)">
    <a href="#zapisnik">Zapisnik</a>
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
  }
}

</script>
