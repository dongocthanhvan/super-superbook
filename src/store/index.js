import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// import post from './modulePost'
import user from "./user";
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    isLoading: false,
  },
  actions: {
    setLoading({ commit }, isLoading = false) {
      commit("SET_LOADING", isLoading);
    },
  },
  mutations: {
    SET_LOADING: (state, loading = false) => {
      state.isLoading = loading;
    },
  },
  modules: {
    user,
  },
});

export default store;
