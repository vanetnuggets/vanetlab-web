<template>
  <div class="about">
    <div class="fade-in" v-for="a in about" :key="a.id">
      <div class="title">
        {{ a.title }}
      </div>
      <div v-if="a.subtitle.length > 0 " class="subtitle"> 
        {{ a.subtitle }}  
      </div> 
      <div class="text">
        {{ a.text }}
      </div>
      <div class="space10"/>
      <div class="space10"/>
      <div class="space10"/>
    </div>
  </div>
</template>

<script>
import about_raw from '/src/assets/about.json'

export default {
  name: "About",
  mounted() {
    let fel = Array.from(document.getElementsByClassName('fade-in'))
    for (let e of fel) {
      this.$store.commit('add_fadein_el', e);
    }
    this.$store.dispatch("handleScroll");
  },
  data() {
    return {
      about: about_raw
    }
  }
}
</script>