<template>
  <div class="bigtitle hline_top fade-in">
    Zoznam zapisnikov
  </div>
  <div class="jebo">
    <div class="zap_list">
      <div class="col_left">
        <div v-for="i in files_l" :key="i.id">
          <zapisnik-item :file="i.file" :name="i.name" :date="i.date" />
        </div>
      </div>
      <div class="col_right">
        <div v-for="i in files_r" :key="i.id">
          <zapisnik-item :file="i.file" :name="i.name" :date="i.date" />
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
</style>>

<script>
import zapisnik_raw from '/src/assets/zapisniky.json'
import ZapisnikItem from '../components/ZapisnikItem.vue'


export default {
  name: "Zapisnik",
  components: {
    ZapisnikItem
  },
  data() {
    return {
      files_r: zapisnik_raw,
      files_l: zapisnik_raw
    }
  },
  mounted() {
    this.files_r = []
    this.files_l = []
    for(let i in zapisnik_raw) {
      if (i&1) {
        this.files_r.push(zapisnik_raw[i]);
      } else {
        this.files_l.push(zapisnik_raw[i]);
      }
    }
    this.files_r.sort((a, b) => { return a.id - b.id });
    this.files_l.sort((a, b) => { return a.id - b.id });
  }
}
</script>