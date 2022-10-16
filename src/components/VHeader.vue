<template>
  <div class="tab" @click="goto(1)">
    O projekte
  </div>
  <div class="tab" @click="goto(2)">
    Nas tim
  </div>
  <div class="tab">
    VANETlab
  </div>
  <div class="tab" @click="goto(4)">
    Sprinty
  </div>
  <div class="tab" @click="goto(3)">
    Zapisniky
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