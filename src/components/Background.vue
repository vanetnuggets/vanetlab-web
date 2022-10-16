<template>
  <div class="bg">
    <Car my_class="vanet_wave frst" />
    <Car my_class="vanet_wave scnd" />
    <Car my_class="vanet_wave thrd up" />
    <Car my_class="vanet_wave frth up" />
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