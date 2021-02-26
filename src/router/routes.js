import Login from "@/Views/Login";
import ForgotPassword from "@/Views/ForgotPassword";
import Register from "@/Views/Register";
import Donor from "@/Views/Donor";
import Agent from "@/Views/Agent";

import ClinicDashboard from "@/Views/clinic/ClinicDashboard";
import Clinic from "@/Views/clinic/Clinic";
import ClinicAddUser from "@/Views/clinic/AddUser";
import Messages from "@/Views/clinic/Messages";
import AddMessage from "@/Views/clinic/AddMessage";
import Profile from "@/Views/clinic/Profile";

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
    name: "Agent",
    path: "/register/agent",
    component: Agent,
  },
  {
    name: "Clinic",
    path: "/register/clinic",
    component: Clinic,
  },

  {
    name: "ClinicDashboard",
    path: "/clinic/home",
    component: ClinicDashboard,
  },
  {
    name: "ClinicAddUser",
    path: "/clinic/add-user",
    component: ClinicAddUser,
  },
  {
    name: "Messages",
    path: "/clinic/tips",
    component: Messages,
  },
  {
    name: "AddMessage",
    path: "/clinic/tips/add",
    component: AddMessage,
  },
  {
    name: "Profile",
    path: "/clinic/profile",
    component: Profile,
  },
];
