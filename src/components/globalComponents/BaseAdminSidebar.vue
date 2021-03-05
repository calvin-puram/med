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
          img: "/img/home.svg",
        },
        {
          to: "/provider/clinics",
          title: "Clinics",
          img: "/img/clinic.svg",
        },
        {
          to: "/provider/donors",
          title: "Donors",
          img: "/img/users.svg",
        },
        {
          to: "/provider/agents",
          title: "Agents",
          img: "/img/agent.svg",
        },
        {
          to: "/provider/enquiries",
          title: "Feedbacks",
          img: "/img/message.svg",
        },

        {
          to: "/provider/transactions",
          title: "Transactions",
          img: "/img/credit-card.svg",
        },
        {
          to: "/provider/tips",
          title: "Messages",
          img: "/img/message-circle.svg",
        },
        {
          to: "/provider/notifications",
          title: "Notifications",
          img: "/img/bell.svg",
        },

        {
          to: "logout",
          title: "Logout",
          img: "/img/log-out.svg",
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
