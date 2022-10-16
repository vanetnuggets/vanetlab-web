<template>
  <div class="zap_item fade-in" @click="onClick()">
    <div class="zap_image">
      <div v-if="downloading">
        <img src="/src/assets/loading.gif" width="48" height="48" />
      </div>
      <div v-else>
        <FileDocument :size=48 />
      </div>
    </div>

    <div class="text">
      {{ file }} <br>
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
      window.open(`/public/${this.file}`);
      setTimeout(() => {
        this.downloading = false;
      }, 1000);
    }
  }
}
</script>