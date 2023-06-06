<template>
<div class="foter" :class="get_theme">
    <div class="text" :class="get_theme">Team8@fiit.stu</div>
  </div>
  <div class="fotercontent" :class="get_theme">
    <div class="columns" style="align-items: center;">
      <div class="text" :class="get_theme">(c) Majstri kodu @ 2022 a kamoš Ranjit od ktoreho kopirujeme css ✌️</div>
      <div @mouseover="showTool" class="tooltip">
        <span v-show="tool" class="tooltiptext">{{ text }}</span>
      </div>
      <div class="row" style="justify-content: space-between; align-items: center; max-width: 265px; margin: auto; padding-top: 10px;">
        <Gmail class="icon" :class="get_theme" title="Copy" v-on:click="pop"></Gmail>
        <Facebook class="icon" :class="get_theme" v-on:click="gotosite('https://www.facebook.com/FIIT.STU')"></Facebook>
        <Twitter class="icon" :class="get_theme" v-on:click="gotosite('https://twitter.com/fiitstu?lang=en')"></Twitter>
        <Github class="icon" :class="get_theme" v-on:click="gotosite('https://github.com/vanetnuggets')"></Github>
        <Azure class="icon" :class="get_theme" v-on:click="gotosite('https://dev.azure.com/xmartinkao/TP-VANETlab')"></Azure>
        <Instagram class="icon" :class="get_theme" v-on:click="gotosite('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley')"></Instagram>
      </div>
    </div>
  </div>
  <div class="foter" :class="get_theme">
    <div class="text" :class="get_theme" style="background: url('tunnel.png'); background-size:100% 100%; padding: 20px;">
      <div class="text" :class="get_theme" style="margin-top: 2px;">
        Team8@fiit.stu
      </div>
    </div>
    <div class="ascii" :class="get_theme" style="scale:0.55; margin-top: 6px;">
      <p>{{text3}}</p>
      <p>{{text1}}</p>
      <p>{{text2}}</p>
    </div>
  </div>
</template>

<style lang="scss">
// .text {
//   // background-image: url('tunnel.png');
//   background: url('tunnel.png') no-repeat center center fixed;
//   background-size:100% 100%;
// }
.ascii{
  font: 6pt Georgia,sans-serif;
  font-family: monospace;
  color: #000;
  height: 100px;
  width: 300px;
  top: -27px;
  position: absolute;
  animation: example 25s infinite linear;
  &.samo {
    color: #fff;
  }
  p {
    margin: 0;
  }
}

@keyframes example {
  0% {left: -10%} 
  100% { left: 105% }
}

.tooltip {
  position: relative;
  width: 150px;
}

.tooltip .tooltiptext {
  background-color: black;
  opacity: 0.7;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  right: -4.8rem;
  top: -1rem;
  width: 70px;
}
</style>

<script>
  import Facebook from '../../node_modules/vue-material-design-icons/Facebook.vue'
  import Twitter from '../../node_modules/vue-material-design-icons/Twitter.vue'
  import Gmail from '../../node_modules/vue-material-design-icons/Gmail.vue'
  import Github from '../../node_modules/vue-material-design-icons/Github.vue'
  import Azure from '../../node_modules/vue-material-design-icons/MicrosoftAzure.vue'
  import Instagram from '../../node_modules/vue-material-design-icons/Instagram.vue'

  export default {
    name: "VFooter",
    data() {
      return {
        open: false,
        tool: false,
        text: "Copied!",
        text1: "&    ,--'---:---`--,",
        text2: " @& ==(o)-----(o)==J",
        text3: "        ,-----,  ",
      };
    },
    methods: {
      changeText() {
        if (this.text1 == "&    ,--'---:---`--,") {
          this.text1 = " &&  ,--'---:---`--,"
          this.text2 = "  & ==(o)-----(o)==J"
          this.text3 = "&       ,-----,    "
        }
        else {
          this.text1 = "&    ,--'---:---`--,"
          this.text2 = " @& ==(O)-----(O)==J"
          this.text3 = "        ,-----,    "
        }
        setTimeout(this.changeText, 500)
      },
      onClick() {
        this.open = !this.open;
      },
      gotosite(producturl){
        window.open(
          producturl,
          '_blank'
        )
      },
      copyEmail(txt) {
        navigator.clipboard.writeText(txt);
      },
      pop() {
        this.copyEmail('tp.team8.22@gmail.com')
        this.tool = true
        setTimeout(() => this.tool = false, 750)
      },
    },
    computed: {
      get_theme() {
        return this.$store.getters.theme
      }
    },
    beforeMount(){
      this.changeText()
    },
    components: { Facebook, Twitter, Gmail, Github, Azure, Instagram }
  }

</script>