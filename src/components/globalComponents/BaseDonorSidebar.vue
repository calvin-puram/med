<template>
  <div>
    <BaseSidebar
      :sidebarIcons="sidebarIcons"
      v-if="!menuIcons"
      class="hideMobile"
      showProfile="/profile"
    />

    <BaseSideIcons
      :sidebarIcons="sidebarIcons"
      v-else
      class="hideMobile"
      showProfile="/profile"
    />
    <BaseSidebarMobile
      v-if="menuIcons"
      :toogleMenu="toogleMenu"
      :sidebarIcons="sidebarIcons"
      showProfile="/profile"
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
          to: "/home",
          title: "Home",
          img: "/img/homeicon.svg",
        },
        {
          to: "/clinics",
          title: "Clinics",
          img: "/img/hospital.svg",
        },
        {
          to: "/requests",
          title: "Requests",
          img: "/img/messageicon.svg",
        },
        {
          to: "/provider",
          title: "Provider",
          img: "/img/comments.svg",
        },
        {
          to: "transactions",
          title: "Transactions",
          img: "/img/wallet.svg",
        },
        {
          to: "/notifications",
          title: "Notifications",
          img: "/img/noty.svg",
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
