<template>
  <div class="team" id="team">
    <div class="bigtitle hline_top fade-in" :class="get_theme">
      Náš tím
    </div>
    
    <div class="row">
      <person-tab :name="veducko.name" :desc="veducko.description" :pic="veducko.picture" :role="veducko.role"></person-tab>
    </div>
    <div v-for="p in team" :key="p.id">
      <person-tab :name="p.name" :desc="p.description" :pic="p.picture" :role="p.role"></person-tab>
    </div>
  </div>
</template>

<script>
import PersonTab from "../components/PersonTab.vue"
import team_data from "../assets/team_data.json"

export default {
  name: "Team",
  components: {
    PersonTab
  },
  data() {
    return {
      team: team_data,
      veducko: team_data[0]
    }
  },
  mounted() {
    this.team = [];
    for (let idx in team_data) {
      let elem = team_data[idx];
      if (elem.id == 0) {
        this.veducko = elem;
      } else {
        this.team.push(elem);
      }
    }
    let fel = Array.from(document.getElementsByClassName('fade-in'))
    for (let e of fel) {
      this.$store.commit('add_fadein_el', e);
    }
    this.$store.dispatch("handleScroll");
    this.team.sort((a, b) => {return a.name - b.name})
  },
  computed: {
    get_theme() {
      return this.$store.getters.theme
    }
  }
}
</script>