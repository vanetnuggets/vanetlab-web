<template>
<div class="foter">
    Team8@fiit.stu
  </div>
  <div class="fotercontent">
    <div class="columns" style="align-items: center;">
      (c) Majstri kodu @ 2022 a random ranjit od ktoreho kopirujem css ✌️
      <div class="row" style="justify-content: space-between; align-items: center; max-width: 600px; margin-top: 10px;">
        <Gmail style="cursor: pointer" title="Copy" v-on:click="test('tp.team8.22@gmail.com')"></Gmail>
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
            open: false
        };
    },
    methods: {
        onClick() {
          this.open = !this.open;
        },
        gotosite(producturl){
          window.open(
            producturl,
            '_blank' // <- This is what makes it open in a new window.
          )
        },
        test(txt) {
          navigator.clipboard.writeText(txt);
        }
    },
    components: { Facebook, Twitter, Gmail, Github, Azure, Instagram }
}

</script>