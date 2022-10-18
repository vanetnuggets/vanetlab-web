<template>
    <div class="bigtitle hline_top fade-in" id="sprinty">
      Zoznam šprintov
    </div>
    <div class="jebo">
      <div class="sprint_list">
        <div v-for="(e, i) in sprints" :key="e.id">
            <div v-if="i % 2 == 0">
                <sprint-item :text="e.text" :name="e.name" :type="'left'" />
            </div>
            <div v-else>
                <sprint-item :text="e.text" :name="e.name" />
            </div>
          </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .jebo {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .sprint_list{
    width: 80%;
  }
  </style>>
  
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
    }
  }
  </script>