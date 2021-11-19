<template>
  <v-app-bar app color="white" flat>
    <div class="logo-container ml-10">
      <router-link to="/">
        <v-img contain id="logo" :src="require('../../src/assets/logo.svg')" />
      </router-link>
    </div>
    <v-container class="py-0 fill-height">
      <v-btn
        v-for="navItem in navItems"
        :key="navItem.id"
        @click="goToNav(navItem.href)"
        text
      >
        {{ navItem.title }}
      </v-btn>

      <v-spacer></v-spacer>

      <v-responsive max-width="260">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive>
      <v-btn
        outlined
        color="#E50914"
        @click="goToLogin()"
        depressed
        class="ml-10"
      >
        login
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "UnauthorizedHeader",
  data: () => ({
    navItems: [
      {
        id: 1,
        title: "Sách",
        href: "/search",
      },
      {
        id: 2,
        title: "Tất cả",
        href: "/all",
      },
    ],
  }),
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
    goToNav(href) {
      this.$router.push(href);
    },
  },
};
</script>

<style>
#logo {
  width: 200px;
}

.container a:hover {
  background-color: red;
}
</style>
