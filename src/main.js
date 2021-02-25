import Vue from "vue";
import App from "./App.vue";
import { router } from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
// import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

// automatic component registration
const requireComponent = require.context(
  ".",

  true,

  /_base-[A-Z]\w+\.(vue|js)$/
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

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
