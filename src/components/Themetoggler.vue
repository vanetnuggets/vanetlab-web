<template>
  <div class="xd">
    <button class="btn opn" @click="toggle()" @mouseenter="show('help')" @mouseleave="show('')">🎨</button>
    <div v-show="opened">
      <button class="btn" @click="standard()" @mouseenter="show('s')" @mouseleave="show('')">S</button>
      <button class="btn" @click="vojto()" @mouseenter="show('v')" @mouseleave="show('')">V</button>
    </div>

    <div v-if="text != ''" class="tooltip">
      {{ text }}  
    </div>
  </div>
  
</template>

<style scoped lang="scss">

.tooltip {
  position: absolute;
  left: 10px;
  top: 30px;
  background-color: white;
  padding: 5px;
  border-radius: 10px;
  max-width: 300px;
}

.xd {
  position: absolute;
  display: flex;
  border-radius: 20px;
  background-color: lightblue;
  
}

.btn {
  margin: 3px;
  border-radius: 100%;
  border: none;
  background-color: white;
  color: navy;
  height: 20px;
    width: 22px;

  &.opn {
    position: relative;
    font-size: 14px;
    height: 20px;
    width: 22px;
    padding-left: 2px;
  }
}

.btn:hover {
  background-color: blueviolet;
  transition: 0.3s;
  cursor: pointer;
}

</style>

<script>

export default {
  name: "Themetoggler",
  data() {
    return {
      opened: false,
      text: ""
    }
  },
  methods: {
    vojto() {
      console.log('V');
      this.$store.commit('change_theme', 'vojto');
    },
    standard() {
      this.$store.commit('change_theme', '');
    },
    toggle() {
      this.opened = !this.opened;
    },
    show(s) {
      if (s == 'help') {
        this.text = "click to show/hide color themes";
      } else if (s == 's') {
        this.text = 'standard color theme';
      } else if (s == 'v') {
        this.text = 'vojtov glass shit 🤮';
      } else 
        this.text = s;
    }
  }
}

</script>