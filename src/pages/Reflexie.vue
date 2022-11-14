<template>
  <div class="documents">
    <div class="zap_list">
      <div v-for="e in files" :key="e.id">
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
import reflexie_raw from '/src/assets/reflexie.json'
import ZapisnikItem from '../components/ZapisnikItem.vue'

export default {
  name: "Reflexie",
  components: {
    ZapisnikItem
  },
  data() {
    return {
      files: reflexie_raw
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