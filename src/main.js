import Vue from "vue";
import VueRouter from "vue-router";
import routes from "src/router/router";
import store from "src/store";
import { routerMode } from "src/config/env";

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: routerMode,
  strict: process.env.NODE_ENV !== "production",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // 返回之前保存的滚动位置
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return { x: 0, y: to.meta.savedPosition || 0 };
    }
  },
});

new Vue({
  router,
  store,
}).$mount("#app");
