import Vue from "vue";
import App from "./App.vue";
import { router } from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import { BootstrapVue } from "bootstrap-vue";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import VueNoty from "vuejs-noty";
import "vuejs-noty/dist/vuejs-noty.css";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

// automatic component registration
const requireComponent = require.context(
  "./components",

  true,

  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );

  Vue.component(
    componentName,

    componentConfig.default || componentConfig
  );
});

NProgress.configure({ showSpinner: false });
Vue.use(VueNoty);
Vue.use(Loading);
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
