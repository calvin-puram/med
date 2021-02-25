import Vue from "vue";
import App from "./App.vue";
import { router } from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
// import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import registerGlobalComponents from "./components/_globals";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
