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
import Request from "@/Views/clinic/Request";
import Visits from "@/Views/clinic/Visits";
import FullSearch from "@/Views/clinic/FullSearch";
import AvailableDonors from "@/Views/clinic/AvailableDonors";
import Transaction from "@/Views/clinic/Transaction";
import Notification from "@/Views/clinic/Notification";
import Users from "@/Views/clinic/Users";

import Donor_step1 from "@/Views/donor/Donor_step1";
import Donor_step2 from "@/Views/donor/Donor_step2";
import Donor_step3 from "@/Views/donor/Donor_step3";
import Donor_step4 from "@/Views/donor/Donor_step4";
import Donor_step5 from "@/Views/donor/Donor_step5";
import DonorDashboard from "@/Views/donor/DonorDashboard";
import AgentNotification from "@/Views/donor/AgentNotification";
import AgentProfile from "@/Views/donor/Profile";
import AddDonor from "@/Views/donor/AddDonor";

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
    name: "Request",
    path: "/clinic/requests",
    component: Request,
  },
  {
    name: "Visits",
    path: "/clinic/donors",
    component: Visits,
  },
  {
    name: "FullSearch",
    path: "/clinic/full-search",
    component: FullSearch,
  },
  {
    name: "AvailableDonors",
    path: "/clinic/free",
    component: AvailableDonors,
  },
  {
    name: "Transaction",
    path: "/clinic/transactions",
    component: Transaction,
  },
  {
    name: "Notification",
    path: "/clinic/notifications",
    component: Notification,
  },
  {
    name: "Users",
    path: "/clinic/users",
    component: Users,
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
  {
    name: "DonorDashboard",
    path: "/agent/donors",
    component: DonorDashboard,
  },
  {
    name: "AgentNotification",
    path: "/agent/notifications",
    component: AgentNotification,
  },
  {
    name: "AgentProfile",
    path: "/agent/profile",
    component: AgentProfile,
  },
  {
    name: "AddDonor",
    path: "/agent/add-donor",
    component: AddDonor,
  },
];
