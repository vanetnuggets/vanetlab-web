<template>
  <div class="fotercontent">
    Team8@fiit.stu <br>
    <br>
    (c) Majstri kodu @ 2022 a random ranjit od ktoreho kopirujem css ✌️ <br>
    email: tp.team8.22@gmail.com<br>
    github: https://github.com/vanetnuggets <br>
    </div>
  <div class="foter">
    Team8@fiit.stu
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