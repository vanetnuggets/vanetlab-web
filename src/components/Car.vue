<template>
  <div :class="my_class" @click="showMe()">
    <div class="vanet_circle frst" ></div>
    <div class="vanet_circle scnd" ></div>
    <div class="vanet_circle thrd" ></div>
    <div class="vanet_circle frth" ></div>
      <div class="car">
      <div class="pneumatika tl"></div>
      <div class="pneumatika tr"></div>
      <div class="pneumatika bl"></div>
      <div class="pneumatika br"></div>
      <div class="car-body"></div>
      <div class="car-window"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "car",
  props: {
    my_class: String,
    id: Number
  },
  methods: {
    showMe() {
      this.$store.commit('exit_page');
      setTimeout(() => {
        this.$store.commit('show_page', this.id);
      }, 400)
    }
  }
}
</script>