<template>
  <div class="tab" @click="goto(1)">
    <a href="#about">O projekte</a>
  </div>
  <div class="tab" @click="goto(2)">
    <a href="#team">Nas tim</a>
  </div>
  <div class="tab">
    VANETlab
  </div>
  <div class="tab" @click="goto(4)">
    <a href="#sprinty">Sprinty</a>
  </div>
  <div class="tab hmm" @click="goto(3)">
    <a href="#zapisnik">Zapisnik</a>
  </div>
</template>

<script>

export default {
  name: "VHeader",
  methods: {
    goto(id) {
      this.$store.commit('exit_page');
      setTimeout(()=> {
        this.$store.commit('show_page', id);
      }, 400);
    }
  }
}

</script>
