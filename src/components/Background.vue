<template>
  <div class="bg bg-new">
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
  }
}
</script>

<style scoped>
.bg-new {
  background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(118,9,121,1) 29%, rgba(0,212,255,1) 100%);;
}
</style>