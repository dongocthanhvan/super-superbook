<template>
  <v-main style="margin-top: 15px">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center" dense>
        <v-col cols="12" sm="8" md="4" lg="4">
          <v-card elevation="0">
            <div
              @click="goToHome()"
              name="Fedorae Education"
              title="Fedorae Education"
              class="banner-logo"
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
                  v-model="name"
                  @input="$v.name.$touch()"
                  :error-messages="nameErrors"
                  label="Enter your name"
                  name="name"
                  required
                  prepend-inner-icon="mdi-account"
                  type="text"
                  class="rounded-0"
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  @input="$v.email.$touch()"
                  :error-messages="emailErrors"
                  label="Enter your email"
                  name="email"
                  prepend-inner-icon="mdi-email"
                  type="email"
                  required
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
                <v-text-field
                  v-model="password2"
                  @input="$v.password2.$touch()"
                  :error-messages="passErrors2"
                  label="Re-enter password"
                  name="password"
                  prepend-inner-icon="mdi-lock-outline"
                  type="password"
                  class="rounded-0"
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="phoneNumber"
                  @input="$v.phoneNumber.$touch()"
                  :error-messages="phoneErrors"
                  label="Phone number"
                  name="phone number"
                  type="string"
                  class="rounded-0"
                  outlined
                ></v-text-field>
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="dayOfBirth"
                      @input="$v.dayOfBirth.$touch()"
                      :error-messages="birthErrors"
                      label="Date of birth"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="dayOfBirth"
                    @input="menu2 = false"
                  ></v-date-picker>
                </v-menu>
                <v-btn
                  @click="handleSignUp"
                  class="rounded-0"
                  color="#E50914"
                  x-large
                  block
                  dark
                  >Sign UP</v-btn
                >
                <v-card-actions class="text--secondary">
                  <v-spacer></v-spacer>
                  Already have an account?
                  <router-link class="ml-3" :to="{ name: 'Login' }"
                    >Sign In</router-link
                  >
                  <!-- <a href="#" class="pl-2" style="color: #000000">Sign In</a> -->
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
import dayjs from "dayjs";
import { required, maxLength, email } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(20) },
    email: { required, email },
    password: { required },
    password2: { required },
    phoneNumber: { required },
    dayOfBirth: { required },
  },
  name: "Login",
  data() {
    return {
      name: null,
      email: null,
      password: null,
      password2: null,
      phoneNumber: null,
      dayOfBirth: null,
      menu2: false,
    };
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
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
    passErrors2() {
      const errors = [];
      if (!this.$v.password2.$dirty) return errors;
      !this.$v.password2.required && errors.push("Re-Password is required");
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v.phoneNumber.$dirty) return errors;
      !this.$v.phoneNumber.required && errors.push("Phone number is required");
      return errors;
    },
    birthErrors() {
      const errors = [];
      if (!this.$v.dayOfBirth.$dirty) return errors;
      !this.$v.dayOfBirth.required && errors.push("Date of birth is required");
      return errors;
    },
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    handleSignUp() {
      if (this.$v.$touch()) {
        return;
      } else {
        this.dayOfBirth = dayjs(this.dayOfBirth).format("DD/MM/YYYY");
        console.log(this.dayOfBirth);
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