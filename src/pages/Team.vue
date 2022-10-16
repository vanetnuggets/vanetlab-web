<template>
  <div class="team">
    <div class="bigtitle hline_top fade-in">
      Nas tim
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
    this.team = []
    console.log(team_data)
    for (let idx in team_data) {
      let elem = team_data[idx];
      if (elem.id == 0) {
        this.veducko = elem;
        console.log(this.veducko)
      } else {
        this.team.push(elem);
      }
    }
    this.team.sort((a, b) => {return a.name - b.name})
  }
}
</script>