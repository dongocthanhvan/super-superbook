<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center" dense>
        <v-col cols="12" sm="8" md="4" lg="4">
          <v-card elevation="0">
            <div class="banner-logo" @click="goToHome()" name="logo" title="logo" target="_blank">
              <v-img
                src="@/assets/logo.png"
                alt="Fedorae Education Log"
                contain
                height="200"
              ></v-img>
            </div>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Enter your email"
                  name="email"
                  prepend-inner-icon="mdi-email"
                  type="email"
                  class="rounded-0"
                  outlined
                ></v-text-field>
                <v-text-field
                  label="Enter your password"
                  name="password"
                  prepend-inner-icon="mdi-lock"
                  type="password"
                  class="rounded-0"
                  outlined
                ></v-text-field>
                <v-btn class="rounded-0" color="#E50914" x-large block dark
                  >Login</v-btn
                >
                <v-card-actions class="text--secondary">
                  <!-- <v-checkbox color="#E50914" label="Remember me"></v-checkbox> -->
                  <v-spacer></v-spacer>
                  No account?
                  <router-link class="ml-3" :to="{ name: 'SignUp' }"
                    >Sign Up</router-link
                  >
                  <!-- <a href="#" class="pl-2" style="color: #000000">Sign Up</a> -->
                </v-card-actions>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
export default {
  name: 'Login',
  methods: {
    goToHome() {
      this.$router.push('/')
    }
  },
};
</script>

<style lang="scss" scoped>
.banner-logo{
  cursor: pointer;
}
</style>