<template>
  <div>
    <BaseSidebar
      :sidebarIcons="sidebarIcons"
      v-if="!menuIcons"
      class="hideMobile"
      showProfile="/provider/profile"
    />

    <BaseSideIcons
      :sidebarIcons="sidebarIcons"
      v-else
      class="hideMobile"
      showProfile="/provider/profile"
    />
    <BaseSidebarMobile
      v-if="menuIcons"
      :toogleMenu="toogleMenu"
      :sidebarIcons="sidebarIcons"
      showProfile="/provider/profile"
      class="d-none mobileNav"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: mapGetters(["menuIcons"]),
  data() {
    return {
      sidebarIcons: [
        {
          to: "/provider/home",
          title: "Home",
          img: "https://dms.medbarnagency.com/images/assets/icon@home.svg",
        },
        {
          to: "/provider/clinics",
          title: "Clinics",
          img: "https://dms.medbarnagency.com/images/assets/icon@clinic.svg",
        },
        {
          to: "/provider/donors",
          title: "Donors",
          img: "https://dms.medbarnagency.com/images/assets/icon@donor.svg",
        },
        {
          to: "/provider/agents",
          title: "Agents",
          img: "https://dms.medbarnagency.com/images/assets/icon@agent-f.svg",
        },
        {
          to: "/provider/enquiries",
          title: "Feedbacks",
          img: "https://dms.medbarnagency.com/images/assets/requests.svg",
          width: "20px",
        },

        {
          to: "/provider/transactions",
          title: "Transactions",
          img: "https://dms.medbarnagency.com/images/assets/icon@card.svg",
        },
        {
          to: "/provider/tips",
          title: "Messages",
          img: "https://dms.medbarnagency.com/images/assets/icon@tip.svg",
        },
        {
          to: "/provider/notifications",
          title: "Notifications",
          img: "https://dms.medbarnagency.com/images/assets/icon@card.svg",
        },

        {
          to: "logout",
          title: "Logout",
          img: "https://dms.medbarnagency.com/images/assets/icon@user.svg",
        },
      ],
    };
  },
  methods: {
    ...mapActions(["toogleMenu"]),
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
  .hideMobile,
  .hideMedium {
    display: none !important;
  }

  .mobileNav {
    display: block !important;
  }
}
</style>
