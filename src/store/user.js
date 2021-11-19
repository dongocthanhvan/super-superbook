export default {
  state: {
    users: {},
  },
  getters: {
    isLogin: (state) => {
      //   let userObj = parseJwt(state[CONFIG_ACCESS_TOKEN]);
      let userObj = null;
      if (userObj) {
        return true;
      } else {
        return false;
      }
    },
  },
  actions: {},
  mutations: {},
};
