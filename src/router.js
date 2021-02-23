import Vue from "vue";
import VueRouter from "vue-router";

import Login from "@/Views/Login";
import ForgotPassword from "@/Views/ForgotPassword";
import Register from "@/Views/Register";
import Donor from "@/Views/Donor";
import Clinic from "@/Views/Clinic";
import Agent from "@/Views/Agent";

Vue.use(VueRouter);
export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      name: "home",
      path: "/",
      component: Login,
    },
    {
      name: "ForgotPassword",
      path: "/forgot_password",
      component: ForgotPassword,
    },
    {
      name: "Register",
      path: "/register",
      component: Register,
    },
    {
      name: "Donor",
      path: "/register/donor",
      component: Donor,
    },
    {
      name: "Clinic",
      path: "/register/clinic",
      component: Clinic,
    },
    {
      name: "Agent",
      path: "/register/agent",
      component: Agent,
    },
  ],
});
