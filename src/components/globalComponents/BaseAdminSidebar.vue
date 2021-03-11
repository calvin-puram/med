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
          img: "/img/homeicon.svg",
        },
        {
          to: "/provider/clinics",
          title: "Clinics",
          img: "/img/clinicicon.svg",
        },
        {
          to: "/provider/donors",
          title: "Donors",
          img: "/img/usersicon.svg",
        },
        {
          to: "/provider/agents",
          title: "Agents",
          img: "/img/usericon.svg",
        },
        {
          to: "/provider/enquiries",
          title: "Feedbacks",
          img: "/img/comments.svg",
        },

        {
          to: "/provider/transactions",
          title: "Transactions",
          img: "/img/wallet.svg",
        },
        {
          to: "/provider/tips",
          title: "Messages",
          img: "/img/Messageicon.svg",
        },

        {
          to: "logout",
          title: "Logout",
          img: "/img/logouticon.svg",
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
