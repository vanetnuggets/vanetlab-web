<template>
    <div class="bigtitle hline_top fade-in" :class="get_theme" id="zapisnik">
        Dokumenty
    </div>
    <div style="width:100%; margin-top:15px;">
      <div class="wrapper">
        <button @click="change_document('Z')" :class="isActive('Z') + get_theme">Zápisníky</button>
        <button @click="change_document('M')" :class="isActive('M') + get_theme">Metodiky</button>
        <button @click="change_document('R')" :class="isActive('R') + get_theme">Reflexie</button>
      </div>
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
    },
    isActive(selected) {
    if (this.type == selected)
      return "active "
    return ""
    }
  }
}
</script>

<style lang="scss">
.active {
  background: #bababa;
  &.samo {
    background: var(--samo_sprint_line);
    color: var(--samo_title);
  }
  &.vojto {
    background: purple;
    color: var(--samo_title);
  }
}

.wrapper{
  display: flex;
  width: 100%;
  margin: 0 auto;
}

button {
  cursor: pointer;
  height: 35px;
  width: 33%;
  margin: 5px 2%;
  border-radius: 5px;
  
  font-size: 14pt;
  color: #001d6e;
  &.samo{
    background: rgba(255,255,255,0.1);
    color: var(--samo_text);
  }
  &.vojto {
    background: #ff80ff;
    color: var(--samo_title);
    z-index: 2;
  }
}

@media (max-width: 720px) {
  .wrapper {
    display: grid;
  }
  button {
    width: 100%;
    margin: 5px 0;
  }
}
</style>