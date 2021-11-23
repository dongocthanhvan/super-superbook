export default {
  state: {
    users: {},
  },
  getters: {
    isLogin: () => {
      //   let userObj = parseJwt(state[CONFIG_ACCESS_TOKEN]);
      let userObj = {};
      if (userObj) {
        return true;
      } else {
        return false;
      }
    },
  },
  actions: {
    async handleSignUp(state, data) {
      console.log(state)
      console.log(data);
    },
  },
  mutations: {},
};
