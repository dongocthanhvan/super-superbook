import store from "../store";

// Router chỉ cho phép vào khi đã đăng nhập
const ifAuthenticated = (to, from, next) => {
  if (store.getters.isLogin === true) {
    next();
  } else {
    next({
      name: "Login",
    });
  }
};
const ifNotAuthenticated = (to, from, next) => {
  if (store.getters.isLogin === false) {
    next();
  } else {
    next({
      name: "/",
    });
  }
};
export { ifAuthenticated, ifNotAuthenticated };
