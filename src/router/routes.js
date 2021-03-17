import Login from "@/Views/Login";
import ForgotPassword from "@/Views/ForgotPassword";
import ChooseProfiles from "@/Views/ChooseProfiles";
import Selection from "@/Views/Selection";
import SignupClinc from "@/Views/SignupClinic";
import SignupAgent from "@/Views/SignupAgent";

// CLINIC
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
//DONOR
import Donor_step1 from "@/Views/donor/Donor_step1";
import Donor_step2 from "@/Views/donor/Donor_step2";
import Donor_step3 from "@/Views/donor/Donor_step3";
import Donor_step4 from "@/Views/donor/Donor_step4";
import Donor_step5 from "@/Views/donor/Donor_step5";
import DonorDashboardMain from "@/Views/donor/DonorDashboard";
import DonorClinics from "@/Views/donor/Clinics";
import DonorRequests from "@/Views/donor/Requests";
import DonorTransactions from "@/Views/donor/Transactions";
import DonorNotifications from "@/Views/donor/Notifications";
// AGENT
import DonorDashboard from "@/Views/agent/DonorDashboard";
import AgentNotification from "@/Views/agent/AgentNotification";
import AgentProfile from "@/Views/agent/Profile";
import AddDonor from "@/Views/agent/AddDonor";
import Agent from "@/Views/agent/Agent";
// ADMIN
import AdminDashboard from "@/Views/admin/AdminDashboard";
import AdminAddClinic from "@/Views/admin/AdminAddClinic";
import Clinics from "@/Views/admin/Clinics";
import Donors from "@/Views/admin/Donors";
import AdminAddDonor from "@/Views/admin/AdminAddDonor";
import Agents from "@/Views/admin/Agents";
import Feedbacks from "@/Views/admin/Feedbacks";
import Transactions from "@/Views/admin/Transactions";
import AdminMessages from "@/Views/admin/Messages";
import AdminAddMessage from "@/Views/admin/AdminAddMessage";
import AdminNotifications from "@/Views/admin/Notification";
import AdminProfile from "@/Views/admin/Profile";

export default [
  {
    name: "home",
    path: "/",
    component: Login,
    meta: {
      requiresAuth: false,
    },
  },
  {
    name: "selection",
    path: "/select-account",
    component: Selection,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "signup-clinic",
    path: "/signup-clinic",
    component: SignupClinc,
    meta: {
      requiresAuth: false,
    },
  },
  {
    name: "signup-agent",
    path: "/signup-agent",
    component: SignupAgent,
    meta: {
      requiresAuth: false,
    },
  },
  {
    name: "ForgotPassword",
    path: "/forgot_password",
    component: ForgotPassword,
    meta: {
      requiresAuth: false,
    },
  },
  {
    name: "ChooseProfiles",
    path: "/add-profiles",
    component: ChooseProfiles,
    meta: {
      requiresAuth: false,
    },
  },

  {
    name: "Agent",
    path: "/register/agent",
    component: Agent,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "Clinic",
    path: "/register/clinic",
    component: Clinic,
    meta: {
      requiresAuth: true,
    },
  },

  {
    name: "ClinicDashboard",
    path: "/clinic/home",
    component: ClinicDashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "ClinicAddUser",
    path: "/clinic/add-user",
    component: ClinicAddUser,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "Messages",
    path: "/clinic/tips",
    component: Messages,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "AddMessage",
    path: "/clinic/tips/add",
    component: AddMessage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "Profile",
    path: "/clinic/profile",
    component: Profile,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "Request",
    path: "/clinic/requests",
    component: Request,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "Visits",
    path: "/clinic/donors",
    component: Visits,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "FullSearch",
    path: "/clinic/full-search",
    component: FullSearch,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "AvailableDonors",
    path: "/clinic/free",
    component: AvailableDonors,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "Transaction",
    path: "/clinic/transactions",
    component: Transaction,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "Notification",
    path: "/clinic/notifications",
    component: Notification,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "Users",
    path: "/clinic/users",
    component: Users,
    meta: {
      requiresAuth: true,
    },
  },

  {
    name: "Donor_step1",
    path: "/register/donor_step1",
    component: Donor_step1,
    meta: {
      requiresAuth: false,
    },
  },
  {
    name: "Donor_step2",
    path: "/register/donor_step2",
    component: Donor_step2,
    meta: {
      requiresAuth: false,
    },
  },
  {
    name: "Donor_step3",
    path: "/register/donor_step3",
    component: Donor_step3,
    meta: {
      requiresAuth: false,
    },
  },
  {
    name: "Donor_step4",
    path: "/register/donor_step4",
    component: Donor_step4,
    meta: {
      requiresAuth: false,
    },
  },
  {
    name: "Donor_step5",
    path: "/register/donor_step5",
    component: Donor_step5,
    meta: {
      requiresAuth: false,
    },
  },
  {
    name: "DonorDashboardMain",
    path: "/home",
    component: DonorDashboardMain,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "DonorClinics",
    path: "/clinics",
    component: DonorClinics,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "DonorRequests",
    path: "/requests",
    component: DonorRequests,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "DonorTransactions",
    path: "/transactions",
    component: DonorTransactions,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "DonorNotifications",
    path: "/notifications",
    component: DonorNotifications,
    meta: {
      requiresAuth: true,
    },
  },
  // AGENT
  {
    name: "DonorDashboard",
    path: "/agent/donors",
    component: DonorDashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "AgentNotification",
    path: "/agent/notifications",
    component: AgentNotification,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "AgentProfile",
    path: "/agent/profile",
    component: AgentProfile,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "AddDonor",
    path: "/agent/add-donor",
    component: AddDonor,
    meta: {
      requiresAuth: true,
    },
  },
  // ADMIN ROUTES
  {
    name: "AdminDashboard",
    path: "/provider/home",
    component: AdminDashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "AdminAddClinic",
    path: "/provider/clinics/add",
    component: AdminAddClinic,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "AdminClinics",
    path: "/provider/clinics",
    component: Clinics,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "AdminDonors",
    path: "/provider/donors",
    component: Donors,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "AdminAddDonor",
    path: "/provider/donors/add",
    component: AdminAddDonor,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "Agents",
    path: "/provider/agents",
    component: Agents,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "Feedbacks",
    path: "/provider/enquiries",
    component: Feedbacks,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "AdminTransactions",
    path: "/provider/transactions",
    component: Transactions,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "AdminMessages",
    path: "/provider/tips",
    component: AdminMessages,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "AdminAddMessage",
    path: "/provider/tips/add",
    component: AdminAddMessage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "AdminNotifications",
    path: "/provider/notifications",
    component: AdminNotifications,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "AdminProfile",
    path: "/provider/profile",
    component: AdminProfile,
    meta: {
      requiresAuth: true,
    },
  },
];
