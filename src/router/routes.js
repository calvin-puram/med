import Login from "@/Views/Login";
import ForgotPassword from "@/Views/ForgotPassword";
import Register from "@/Views/Register";
import Agent from "@/Views/Agent";

import ClinicDashboard from "@/Views/clinic/ClinicDashboard";
import Clinic from "@/Views/clinic/Clinic";
import ClinicAddUser from "@/Views/clinic/AddUser";
import Messages from "@/Views/clinic/Messages";
import AddMessage from "@/Views/clinic/AddMessage";
import Profile from "@/Views/clinic/Profile";

import Donor_step1 from "@/Views/donor/Donor_step1";
import Donor_step2 from "@/Views/donor/Donor_step2";
import Donor_step3 from "@/Views/donor/Donor_step3";
import Donor_step4 from "@/Views/donor/Donor_step4";
import Donor_step5 from "@/Views/donor/Donor_step5";

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

  {
    name: "Donor_step1",
    path: "/register/donor_step1",
    component: Donor_step1,
  },
  {
    name: "Donor_step2",
    path: "/register/donor_step2",
    component: Donor_step2,
  },
  {
    name: "Donor_step3",
    path: "/register/donor_step3",
    component: Donor_step3,
  },
  {
    name: "Donor_step4",
    path: "/register/donor_step4",
    component: Donor_step4,
  },
  {
    name: "Donor_step5",
    path: "/register/donor_step5",
    component: Donor_step5,
  },
];
