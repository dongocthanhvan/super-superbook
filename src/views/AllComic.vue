<template>
  <div>
    <div class="pa-2">
      <h2 class="flex justify-center">Tất cả</h2>
      <v-row class="pt-2">
        <v-col md="3"
          ><v-card outlined>
            <v-img
              :src="require('../assets/img/home/harry.jpg')"
              class="white--text align-center"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="390px"
            >
              <h1 class="text-center font-size">Lorem & Ipsum</h1>
              
              <div class="mt-2 text-center">
                <v-btn class="white--text caption" @click="goToDetail" outlined
                  >EXPLORE
                </v-btn>
              </div>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Books",
  methods: {
    goToDetail() {
      this.$router.push('/books/1')
    }
  },
};
</script>

<style>
</style>