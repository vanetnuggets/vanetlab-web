<template>
    <div class="bigtitle hline_top fade-in" :class="get_theme" id="zapisnik">
        Dokumenty
    </div>
    <div>
        <button @click="change_document('Z')">ZAPISNKY</button>
        <button @click="change_document('M')">Metodiky</button>
        <button @click="change_document('R')">REFLEXE</button>
    </div>
    <Zapisnik v-if="type=='Z'"/>
    <Metodiky v-if="type=='M'"/>
    <Reflexie v-if="type=='R'"/>
</template>

<script>
import Zapisnik from '../pages/Zapisnik.vue'
import Reflexie from '../pages/Reflexie.vue'
import Metodiky from '../pages/Metodiky.vue'

export default {
  name: "Documents",
  components: {
    Zapisnik,
    Reflexie,
    Metodiky
  },
  data() {
    return {
      type: 'M'
    }
  },
  computed: {
    get_theme() {
      return this.$store.getters.theme
    }
  },
  methods: {
    change_document(to){
        this.type = to;
    }
  }
}
</script>