<template>
  <div class="about fade-in">
    <div class="title">
    Co to je vanet ? 🚙<br>
    </div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Eros donec ac odio tempor orci dapibus ultrices. Dui accumsan sit amet nulla facilisi morbi. Dignissim sodales ut eu sem. Urna nec tincidunt 
    <br>
    <div class="title">
    A na co mi je vanet dobry ako?<br>
    </div>
    praesent semper feugiat nibh sed pulvinar. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Tellus molestie nunc non blandit massa enim nec. Purus in mollis nunc sed id semper risus in hendrerit. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Amet commodo nulla facilisi nullam vehicula ipsum. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Id interdum velit laoreet id donec ultrices tincidunt. 
    <div class="title">
      Dost dobre, dufam ze aj nabuduci tyzden donesies tortu dubak<br>
    </div>
    Purus viverra accumsan in nisl nisi scelerisque eu ultrices. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Et magnis dis parturient montes nascetur ridiculus mus mauris vitae. Vel orci porta non pulvinar neque laoreet suspendisse. Cras ornare arcu dui vivamus.

  </div>
</template>

<script>
export default {
  name: "About",
  mounted() {
    let fel = Array.from(document.getElementsByClassName('fade-in'))
    for (let e of fel) {
      this.$store.commit('add_fadein_el', e);
    }
    this.$store.dispatch("handleScroll");
  }
}
</script>