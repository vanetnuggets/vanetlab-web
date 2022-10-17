<template>
  <div class="person-item fade-in">
    <div class="picture">
      <img :src="build_pic()" width="140" height="140" class="picture">
    </div>
    <div class="title">
      {{ name }} <br>
    </div>
    <div class="role">
      {{ role }} <br>
    </div>
    <div class="text">
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
  }
}
</script>