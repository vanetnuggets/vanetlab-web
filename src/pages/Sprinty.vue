<template>
  <div class="title bigtitle hline_top fade-in" id="sprinty">
    Zoznam šprintov
  </div>
    <div class="sprint_list">
      <div v-for="(e, i) in sprints" :key="e.id">
        <div v-if="i % 2 == 0">
          <sprint-item :text="e.text" :name="e.name" :date="e.date" :type="'left'" />
        </div>
      <div v-else>
        <sprint-item :text="e.text" :name="e.name" :date="e.date" :type="'right'"/>
      </div>
    </div>  
  </div>
</template>
  
<style scoped>
  *,
*::before,
*::after {
  box-sizing: border-box;
}
  .sprint_list {
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 15px 0;
}
.sprint_list::after {
  content: '';
  position: absolute;
  width: 2px;
  background: #001d6e;
  top: 0;
  bottom: 10px;
  left: 50%;
  margin-left: -1px;
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
