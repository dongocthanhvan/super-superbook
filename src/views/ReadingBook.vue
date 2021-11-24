<template>
  <v-container class="mt-5">
    <v-row class="reading">
      <v-col cols="3" class="flex justify-start">
        <v-card class="w-2/3">
          <v-toolbar flat color="#e40a1a" dark>
            <div class="flex justify-center">Tác phẩm 1234</div>
          </v-toolbar>
          <div class="overflow-y-auto" style="height: 700px">
            <v-tabs vertical color="#e40a1a" class="">
              <v-tab
                v-for="chapter in listChapter"
                :key="chapter.id"
                @click="detailChapter(chapter.page)"
              >
                {{ chapter.name }}
              </v-tab>
            </v-tabs>
          </div>
        </v-card>
      </v-col>
      <v-col v-if="loading" cols="9" class="flex justify-center h-full">
        <div class="flex flex-col gap-1">
          <v-skeleton-loader
            v-for="item in 2"
            :key="item"
            class="w-full h-full"
            type="card"
          ></v-skeleton-loader>
        </div>
      </v-col>
      <v-col v-if="!loading" cols="9" class="flex justify-center h-full">
        <div class="flex flex-col gap-2">
          <div
            class="relative w-full overflow-auto border-2 border-red-300 rounded-md "
            style="height: 550px"
          >
            <img
              class="arrow-left"
              :class="{ 'disabled-arrow': disabledArrowPrev }"
              :src="arrowLeft"
              width="40"
              height="40"
              @click="prev()"
            />
            <img
              class="arrow-right"
              :class="{ 'disabled-arrow': disabledArrowNext }"
              :src="arrowRight"
              width="40"
              height="40"
              @click="next()"
            />
            <div class="w-full h-full p-11" v-html="content">12341</div>
          </div>
          <div class="flex justify-center">
            Page: &nbsp;<span class="font-bold"> {{ page }}</span>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
export default {
  name: "ReadingBook",
  data() {
    return {
      arrowLeft,
      arrowRight,
      listChapter: [
        { id: 1, name: "Chap I", page: 1 },
        { id: 2, name: "Chap II", page: 8 },
        { id: 2, name: "Chap II", page: 8 },
        { id: 2, name: "Chap II", page: 8 },
        { id: 2, name: "Chap II", page: 8 },
        { id: 2, name: "Chap II", page: 8 },
        { id: 2, name: "Chap II", page: 8 },
        { id: 2, name: "Chap II", page: 8 },
        { id: 2, name: "Chap II", page: 8 },
        { id: 2, name: "Chap II", page: 8 },
        { id: 2, name: "Chap II", page: 8 },
        { id: 2, name: "Chap II", page: 8 },
        { id: 2, name: "Chap II", page: 8 },
        { id: 2, name: "Chap II", page: 8 },
        { id: 2, name: "Chap II", page: 8 },
        { id: 2, name: "Chap II", page: 8 },
        { id: 2, name: "Chap II", page: 8 },
        { id: 2, name: "Chap II", page: 8 },
        { id: 2, name: "Chap II", page: 8 },
        { id: 2, name: "Chap II", page: 8 },
        { id: 2, name: "Chap II", page: 8 },
        { id: 2, name: "Chap II", page: 8 },
        { id: 2, name: "Chap II", page: 8 },
        { id: 2, name: "Chap II", page: 8 },
        { id: 2, name: "Chap II", page: 8 },
        { id: 2, name: "Chap II", page: 8 },
        { id: 2, name: "Chap II", page: 8 },
        { id: 2, name: "Chap II", page: 8 },
        { id: 2, name: "Chap II", page: 8 },
      ],
      content: "<h1>hello world 4</h1> <div> v 3r1 vr 31v 13r </div>",
      maxPage: 10,
      page: 1,
      loading: false,
    };
  },
  methods: {
    detailChapter(page) {
      this.$router.push({
        path: `/books/${this.$route.params.id}/read`,
        query: { page: page },
      });
    },
    prev() {
      let page = +this.$route.query.page;
      if (page === 1) {
        return;
      } else {
        this.$router.push({
          path: `/books/${this.$route.params.id}/read`,
          query: { page: page - 1 },
        });
      }
    },
    next() {
      let page = +this.$route.query.page;
      if (page === this.maxPage) {
        return;
      } else {
        this.$router.push({
          path: `/books/${this.$route.params.id}/read`,
          query: { page: page + 1 },
        });
      }
    },
  },
  watch: {
    "$route.query.page"(value) {
      this.page = value;
    },
  },
  computed: {
    disabledArrowPrev() {
      return +this.$route.query.page === 1;
    },
    disabledArrowNext() {
      return +this.$route.query.page === this.maxPage;
    },
  },
  created() {
    this.$router.push({
      path: `/books/${this.$route.params.id}/read`,
      query: { page: 1 },
    });
  },
};
</script>

<style lang="scss" scoped>
.reading {
  height: 83vh;
  width: 100%;
  overflow-y: hidden;
}
.arrow-left {
  position: absolute;
  left: 0%;
  top: 50%;
  cursor: pointer;
  transition: all 0.4s;
  border-radius: 50%;
  &:hover {
    border-radius: 50%;
    background: #c0c0c0;
  }
}
.arrow-right {
  position: absolute;
  right: 0%;
  top: 50%;
  cursor: pointer;
  transition: all 0.4s;
  border-radius: 50%;
  &:hover {
    border-radius: 50%;
    background: #c0c0c0;
  }
}
.disabled-arrow {
  cursor: not-allowed !important;
}
</style>