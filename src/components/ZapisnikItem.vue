<template>
  <div class="zap_item fade-in" @click="onClick()">
    <div class="zap_image" :class="get_theme">
      <div v-if="downloading">
        <img src="/src/assets/loading.gif" width="48" height="48" />
      </div>
      <div v-else>
        <FileDocument :size=48 />
      </div>
    </div>

    <div class="text" :class="get_theme">
      {{ name }} <br>
      <div class="desc">
        {{ date }}
      </div>
    </div>
  </div>
</template>


<script>
import FileDocument from "icons/FileDocument.vue"

export default {
  name: "ZapisnikItem",
  props: {
    name: String,
    file: String,
    date: String
  },
  data() {
    return {
      downloading: false
    }
  },
  components: {
    FileDocument
  },
  methods: {
    async onClick() {
      this.downloading = true;
      window.open(`/${this.file}`);
      setTimeout(() => {
        this.downloading = false;
      }, 1000);
    }
  },
  computed: {
    get_theme() {
      return this.$store.getters.theme
    }
  }
}
</script>