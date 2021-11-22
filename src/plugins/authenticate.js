import store from '../store'

// Router chỉ cho phép vào khi đã đăng nhập
const ifAuthenticated = (to, from, next) => {
    if(store.getters.isLogin === true){
        next();
    } else {
        next({
            name: "Login"
        })
    }
}
export {
    ifAuthenticated
}