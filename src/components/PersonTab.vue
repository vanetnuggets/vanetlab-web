<template>
  <div class="person-item fade-in">
    <div class="picture">
      <img :src="build_pic()" width="140" height="140" class="picture pic">
    </div>
    <div class="title" :class="get_theme">
      {{ name }} <br>
    </div>
    <div class="role" :class="get_theme">
      {{ role }} <br>
    </div>
    <div class="text" :class="get_theme">
        {{ desc }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonTab",
  props: {
    name: String,
    desc: String,
    role: String,
    pic: String
  },
  methods: {
    build_pic() {
      let full_uri = `${this.pic}`;
      return full_uri
    }
  },
  computed: {
    get_theme() {
      return this.$store.getters.theme
    }
  }
}
</script>