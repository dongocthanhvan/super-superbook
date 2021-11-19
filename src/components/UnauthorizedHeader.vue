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
        :href="navItem.href"
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
      <v-btn outlined color="#E50914" href="/login" depressed class="ml-10">
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
        title: "Tìm kiếm",
        href: "/search",
      },
      {
        id: 2,
        title: "Tiểu thuyết",
        href: "/search",
      },
      {
        id: 3,
        title: "Truyện",
        href: "/search",
      },
      {
        id: 4,
        title: "Tất cả",
        href: "/search",
      },
    ],
  }),
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
