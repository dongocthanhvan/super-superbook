import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import Search from "../views/Search.vue";
import AllComic from "../views/AllComic.vue";
import DetailBook from "../views/DetailBook.vue";
import ReadingBook from "../views/ReadingBook.vue";
import NotFound from "../components/Error.vue";
import { ifAuthenticated, ifNotAuthenticated } from "../plugins/authenticate";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: ifNotAuthenticated
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
    beforeEnter: ifNotAuthenticated
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/books",
    name: "Books",
    component: AllComic,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/books/:id",
    name: "Detail",
    component: DetailBook,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/books/:id/read",
    name: "Reading book",
    component: ReadingBook,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "*",
    name: "Not found",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
