<template>
  <div class="bg" :class="get_theme">
    <Car :id=1 my_class="vanet_wave frst" />
    <Car :id=2 my_class="vanet_wave scnd" />
    <Car :id=3 my_class="vanet_wave thrd up" />
    <Car :id=4 my_class="vanet_wave frth up" />
  </div>
</template>

<script>
import Car from './Car.vue'

export default {
  name: "Background",
  components: {
    Car
  },
  computed: {
    get_theme() {
      return this.$store.getters.theme
    }
  }
}
</script>

<style scoped>

</style>