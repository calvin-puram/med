import Vue from "vue";
import Vuex from "vuex";
import utilsModule from "./modules/utils";
import authModule from "./modules/auth";
import clinicModule from "./modules/clinic";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    utilsModule,
    authModule,
    clinicModule,
  },
});
