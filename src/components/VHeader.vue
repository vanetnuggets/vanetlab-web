<template>
  <div class="tab" @click="goto(1)">
    <a href="#about" :class="get_theme">O projekte</a>
  </div>
  <div class="tab" @click="goto(2)">
    <a href="#team" :class="get_theme">Náš tím</a>
  </div>
  <div class="tab logo" @click="gotosite('https://vanetlab.ml/')">
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
  .logo {
    cursor: url(/pointer_icon.svg) 1 1, auto;
  }
  .cursor {
    width: 10px;
    height: 10px;
  }

  /* .logo:hover {
    cursor: url(C:\Users\uplny\Desktop\vanetlab-web\src\assets\logo.svg), auto;
  } */
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
    },
    gotosite(producturl){
        window.open(
          producturl,
          '_blank'
        )
      },
  },
  computed: {
    get_theme() {
      return this.$store.getters.theme
    }
  }
}

</script>
