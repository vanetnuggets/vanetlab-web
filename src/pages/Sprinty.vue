<template>
  <div class="title bigtitle hline_top fade-in" :class="get_theme" id="sprinty">
    Zoznam šprintov
  </div>
    <div class="sprint_list" :class="get_theme">
      <div v-for="(e, i) in sprints" :key="e.id">
        <div v-if="i % 2 == 0">
          <sprint-item :text="e.text" :name="e.name" :date="e.date" :type="'left '+ get_theme" />
        </div>
      <div v-else>
        <sprint-item :text="e.text" :name="e.name" :date="e.date" :type="'right '+ get_theme"/>
      </div>
    </div>  
  </div>
</template>
  
<script>
  import sprints_raw from '/src/assets/sprinty.json'
  import SprintItem from '../components/SprintItem.vue'
  
  export default {
    name: "Sprinty",
    components: {
      SprintItem
    },
    data() {
      return {
        sprints: sprints_raw
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
