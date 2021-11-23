<template>
  <v-app-bar app color="white" flat>
    <div class="ml-10 logo-container">
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
        v-if="!curUser"
        outlined
        color="#E50914"
        @click="goToLogin()"
        depressed
        class="ml-10"
      >
        login
      </v-btn>
      <div v-else class="ml-10">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              Hi {{ curUser.fullName }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item link>
              <v-list-item-title>{{ items[0].title }}</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-title @click.prevent="handleLogout">{{  items[1].title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
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
        href: "/books",
      },
    ],
    items: [
      { id: 1, title: "Dashboard" },
      { id: 2, title: "Logout" },
    ],
    curUser: JSON.parse(localStorage.getItem("curUser")),
  }),
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
    goToNav(href) {
      this.$router.push(href);
    },
    handleLogout(){
      this.$store.dispatch('handleLogout');
      window.location.reload();
    }
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
