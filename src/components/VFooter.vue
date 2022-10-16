<template>
  <div class="foter" @mouseover="onClick()" @mouseleave="onClick()">
    (c) Majstri kodu @ 2022 a random ranjit od ktoreho kopirujem css ✌️ <br>
  </div>
</template>

<script>

export default {
  name: "VFooter",
  data() {
    return {
      open: false
    }
  },
  methods: {
    onClick() {
      this.open = !this.open;
    }
  }
}

</script>