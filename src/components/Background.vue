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
  background: linear-gradient(0deg, rgba(34,193,195,1) 13%, rgba(45,126,253,1) 100%);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 0%;
	}
	50% {
		background-position: 100% 100%;
	}
	100% {
		background-position: 0% 0%;
	}
}
</style>