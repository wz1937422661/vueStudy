import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
// 全局路由守卫(也叫做路由守卫和路由拦截)
// router.beforeEach((to, from, next) => {
//   console.log(to);
//   console.log(from);
//   // console.log(next);
//   next();
// });

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
