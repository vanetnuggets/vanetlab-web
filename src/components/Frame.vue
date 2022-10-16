<template>
  <Transition>
  <div class="myframe">
    <div class="framehdr">
      <div class="exit_circle" @click="exit()">x</div>
    </div>
    <div class="framebody">
      <slot></slot>
    </div>
  </div>
  </Transition>
</template>


<script>

export default {
  name: "Frame",
  mounted() {

  },
  methods: {
    exit() {
      this.$store.commit('exit_page');
    }
  }
}
</script>