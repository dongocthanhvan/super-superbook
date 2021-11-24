<template>
  <v-main style="margin-top: 100px">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center" dense>
        <v-col cols="12" sm="8" md="4" lg="4">
          <v-card elevation="0">
            <div
              class="banner-logo"
              @click="goToHome()"
              name="logo"
              title="logo"
              target="_blank"
            >
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
                  v-model="email"
                  @input="$v.email.$touch()"
                  :error-messages="emailErrors"
                  label="Enter your email"
                  name="email"
                  prepend-inner-icon="mdi-email"
                  type="email"
                  class="rounded-0"
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  @input="$v.password.$touch()"
                  :error-messages="passErrors"
                  label="Enter your password"
                  name="password"
                  prepend-inner-icon="mdi-lock"
                  type="password"
                  class="rounded-0"
                  outlined
                ></v-text-field>
                <v-btn
                  @click.prevent="handleLogin"
                  class="rounded-0"
                  color="#E50914"
                  x-large
                  block
                  dark
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
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  name: "Login",
  validations: {
    email: { required, email },
    password: { required },
  },
  data() {
    return { email: "", password: "" };
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password is required");
      return errors;
    },
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    async handleLogin() {
      if (this.$v.$touch()) {
        return;
      } else {
        const data = {
          email: this.email,
          password: this.password,
        };
        try {
          const res = await this.$store.dispatch("handleLogin", data);
          if (res.status === 200) {
            if (res.data.status === 400) {
              this.$notify({
                group: "foo",
                title: "Failed",
                type: "error",
                text: res.data.message,
              });
            } else {
              localStorage.setItem("access_vue_token", res.data.token);
              localStorage.setItem("curUser", JSON.stringify(res.data.user));
              const data = {
                user: res.data.user,
              };
              this.$store.commit("SET_LOGIN_INFO", data);
              window.location.href="/"
            }
            
          }
        } catch (error) {
          this.$notify({
            group: "foo",
            title: "Failed",
            type: "error",
            text: "Please try again",
          });
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.banner-logo {
  cursor: pointer;
}
</style>