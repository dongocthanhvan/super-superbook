import axiosInstance from "../plugins/axios";
import { parseJwt } from "../helpers";
export default {
  state: {
    curUser: {},
  },
  getters: {
    isLogin: () => {
      let userObj = JSON.parse(localStorage.getItem("curUser"));
      if (userObj) {
        return true;
      } else {
        return false;
      }
    },
  },
  actions: {
    async handleSignUp({ commit }, data) {
      try {
        commit("SET_LOADING", true);
        return await axiosInstance.post("/users", data);
      } catch (error) {
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async handleLogin({ commit }, data) {
      try {
        commit("SET_LOADING", true);
        return await axiosInstance.post("/users/login", data);
      } catch (error) {
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async checkLogin({ commit }) {
      try {
        const access_token_vue = localStorage.getItem("access_vue_token");
        if (!!access_token_vue) {
          let { data, status } = await axiosInstance.get("users/me");
          if (status === 200) {
            commit("SET_LOGIN_INFO", data);
          }
        }
      } catch (error) {}
    },
    async handleLogout({ commit }) {
      commit("SET_LOGOUT");
    },
  },
  mutations: {
    SET_LOGIN_INFO(state, data) {
      state.curUser = data;
    },
    SET_CURRENT_USER(state, data) {
      state.curUser = data;
    },
    SET_LOGOUT(state) {
      localStorage.removeItem("access_vue_token");
      localStorage.removeItem(curUser);
    },
  },
};
