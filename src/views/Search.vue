<template>
  <div>
    <v-container>
      <v-row>
        <v-col align="center">
          <h3>Thể loại:</h3>
          <v-select clearable outlined :items="listCategory" v-model="filters.category" label="Standard"></v-select>
        </v-col>
        <v-col align="center">
          <h3>Quốc gia:</h3>
          <v-select clearable outlined label="Standard"></v-select>
        </v-col>
        <v-col align="center">
          <h3>Năm:</h3>
          <v-select clearable outlined label="Standard"></v-select>
        </v-col>
        <v-col align="center">
          <h3>Sắp xếp:</h3>
          <v-select clearable outlined  label="Standard"></v-select>
        </v-col>
      </v-row>
    </v-container>
    <div class="pa-2">
      <h2 class="flex justify-center">Kết quả</h2>
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
              <div class="text-center mt-2">
                <v-btn class="white--text caption" href="/shop" outlined
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
  name: 'Search',
  data() {
    return {
      listCategory: [
        '1',
        '2',
        '3',
      ],
      filters: {
        category: ''
      }
    }
  },
};
</script>

<style>
</style>