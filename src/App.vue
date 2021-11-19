<template>
  <v-app id="inspire">
    <unauthorized-header />
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
};
</script>
