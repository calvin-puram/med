import Login from "@/views/Login";
import ForgotPassword from "@/views/ForgotPassword";
import Register from "@/views/Register";
import Donor from "@/views/Donor";
import Clinic from "@/views/Clinic";
import Agent from "@/views/Agent";
import ClinicDashboard from "@/views/Dashboard";

export default [
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
  {
    name: "ClinicDashboard",
    path: "/clinic/home",
    component: ClinicDashboard,
  },
];
