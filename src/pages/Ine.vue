<template>
  <div class="documents">
    <div class="zap_list"> 
      <div class="bigtitle hline_bottom fade-in" :class="get_theme">
        Metodiky
      </div> 
      <div v-for="e in files_m" :key="e.id">
        <zapisnik-item :file="e.file" :name="e.name" :date="e.date" />   
      </div>
  </div>

  </div>
  <div class="documents">
    <div class="zap_list"> 
      <div class="bigtitle hline_bottom fade-in" :class="get_theme">
        Dokumentácie
      </div> 
      <div v-for="e in files_d" :key="e.id">
        <zapisnik-item :file="e.file" :name="e.name" :date="e.date" />   
      </div>
    </div>
  </div>
</template>

<style scoped>
.documents {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>>

<script>
import metodiky_raw from '/src/assets/metodiky.json'
import dokumentacie_raw from '/src/assets/dokumentacie.json'
import ZapisnikItem from '../components/ZapisnikItem.vue'

export default {
  name: "Metodiky",
  components: {
    ZapisnikItem
  },
  data() {
    return {
      files_m: metodiky_raw,
      files_d: dokumentacie_raw
    }
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