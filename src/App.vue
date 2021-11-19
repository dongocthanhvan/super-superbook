<template>
  <v-app id="inspire">
    <unauthorized-header v-if="!disabledHeader" />
    <v-main class="grey lighten-3">
      <v-container>
        <v-sheet min-height="70vh" rounded="lg">
          <router-view />
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import UnauthorizedHeader from "./components/UnauthorizedHeader.vue";
export default {
  components: {
    UnauthorizedHeader,
  },
  name: "App",
  data() {
    return {
      disabledHeader: false,
    };
  },
  created() {
    if (this.$route.path === "/login") {
      this.disabledHeader = true;
    }
  
  },
  watch: {
    "$route.fullPath"(val) {
      val !== "/login"
        ? (this.disabledHeader = false)
        : (this.disabledHeader = true);
    },
  },
};
</script>
