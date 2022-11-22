<template>
  <div class="xd" :class="get_theme">
    <button :class="'btn opn '+get_theme" @click="toggle()" @mouseenter="show('help')" @mouseleave="show('')">🎨</button>
    <transition>
      <div v-show="opened" :class="get_theme">
        <button :class="'btn '+get_theme" @click="standard()" @mouseenter="show('s')" @mouseleave="show('')">🏖️</button>
        <button :class="'btn '+get_theme" @click="vojto()" @mouseenter="show('v')" @mouseleave="show('')">🏝️</button>
        <button :class="'btn '+get_theme" @click="samo()" @mouseenter="show('z')" @mouseleave="show('')">🌃</button>
      </div>
    </transition>
    <transition>
      <div v-if="text != ''" :class="'tooltip upsidedown ' + get_theme"> 
        {{ text }}  
      </div>
    </transition>
  </div>
  
</template>

<style scoped lang="scss">

.tooltip {
  position: absolute;
  right: -100px;
  left: 0px;
  bottom: 30px;
  background-color: white;
  padding: 5px;
  border-radius: 10px;
  max-width: 300px;
  box-shadow: rgba(8, 8, 48, 0.9) 10px 3px 10px;

  &.samo {
    background-color: var(--samo_tab_background);
    color: var(--samo_text);
  }
}
.btn {
  margin: 3px;
  padding: 0px;
  border-radius: 100%;
  border: none;
  background-color: white;
  color: navy;
  outline: 1px solid transparent;
  height: 20px;
    width: 22px;
  
  &.samo {
    background-color: var(--samo_tab_background);
    color: var(--samo_text);
  }

  &.opn {
    position: relative;
    font-size: 14px;
    height: 20px;
    width: 22px;
  }
}

.btn:hover {
  box-shadow: rgba(3, 4, 94, 0.4) 0px 0px 2px 2px;
  color: #03045E;
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
      text: "",
      info: "click this to show color themes"
    }
  },
  methods: {
    samo() {
      this.$store.commit('change_theme', 'samo');
    },
    vojto() {
      this.$store.commit('change_theme', 'vojto');
    },
    standard() {
      this.$store.commit('change_theme', '');
    },
    toggle() {
      this.opened = !this.opened;
      this.info = `click this to ${this.opened === false ? 'show':'hide'} color themes`
      this.text = this.info
    },
    show(s) {
      if (s == 'help') {
        this.text = this.info;
      } else if (s == 'z'){
        this.text = "night mode 🌛"
      } else if (s == 's') {
        this.text = 'standard color theme';
      } else if (s == 'v') {
        this.text = 'vojtov glass shit 🤮';
      } else 
        this.text = s;
    }
  },
  computed: {
    get_theme() {
      return this.$store.getters.theme
    }
  }
}

</script>