<template>
<div class="foter">
    Team8@fiit.stu
  </div>
  <div class="fotercontent">
    <div class="columns" style="align-items: center;">
      (c) Majstri kodu @ 2022 a random ranjit od ktoreho kopirujem css ✌️
      <div @mouseover="showTool" class="tooltip">
        <span v-show="tool" class="tooltiptext">{{ text }}</span>
      </div>
      <div class="row" style="justify-content: space-between; align-items: center; max-width: 265px; margin: auto; padding-top: 10px;">
        <Gmail style="cursor: pointer" title="Copy" v-on:click="pop"></Gmail>
        <Facebook style="cursor: pointer" v-on:click="gotosite('https://www.facebook.com/FIIT.STU')"></Facebook>
        <Twitter style="cursor: pointer" v-on:click="gotosite('https://twitter.com/fiitstu?lang=en')"></Twitter>
        <Github style="cursor: pointer" v-on:click="gotosite('https://github.com/vanetnuggets')"></Github>
        <Azure style="cursor: pointer" v-on:click="gotosite('https://dev.azure.com/xmartinkao/TP-VANETlab')"></Azure>
        <Instagram style="cursor: pointer" v-on:click="gotosite('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley')"></Instagram>
      </div>
    </div>
  </div>
  <div class="foter">
    Team8@fiit.stu
  </div>
</template>

<style>
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  width: 120px;
  background-color: black;
  opacity: 0.5;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  right: 19.3rem;
  top: -0.4rem;
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
      text: "Copied!"
    };
  },
  methods: {
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
  components: { Facebook, Twitter, Gmail, Github, Azure, Instagram }
}

</script>