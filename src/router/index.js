import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "../store/index";
import NProgress from "nprogress";

Vue.use(VueRouter);
export const router = new VueRouter({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  } else {
    next();
  }
  if (!store.getters["getAuthData"].token) {
    const token = localStorage.getItem("token");
    const refreshToken = localStorage.getItem("refreshToken");
    if (token) {
      const data = {
        token,
        refreshToken,
      };
      store.commit("saveTokenData", data);
    }
  }

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters["isTokenActive"]) {
      next("/");
    } else {
      next();
    }
  } else if (to.matched.some((record) => !record.meta.requiresAuth)) {
    if (store.getters["isTokenActive"]) {
      next("/select-account");
    } else {
      next();
    }
  } else {
    next();
  }
});

router.afterEach((to, from) => {
  NProgress.done();
});
