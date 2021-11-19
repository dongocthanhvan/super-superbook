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
    <loading :class="{ show: isLoading }" />
  </v-app>
</template>

<script>
import UnauthorizedHeader from "./components/UnauthorizedHeader.vue";
import Loading from "./components/Loading";
import { mapState } from "vuex";

export default {
  components: {
    UnauthorizedHeader,
    Loading,
  },
  name: "App",
  data() {
    return {
      disabledHeader: false,
      routeDisabledHeader: [
        "/login",
        "/signup"
      ]
    };
  },
  created() {
    if (this.routeDisabledHeader.includes(this.$route.path)) {
      this.disabledHeader = true;
    }
  },
  computed: {
    ...mapState(["isLoading"]),
  },
  watch: {
    "$route.path"(val) {
      !this.routeDisabledHeader.includes(val)
        ? (this.disabledHeader = false)
        : (this.disabledHeader = true);
    },
  },
};
</script>
