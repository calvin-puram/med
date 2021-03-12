<template>
  <div>
    <BaseSidebar
      :sidebarIcons="sidebarIcons"
      v-if="!menuIcons"
      class="hideMobile"
      showProfile="/clinic/profile"
    />

    <BaseSideIcons
      :sidebarIcons="sidebarIcons"
      v-else
      class="hideMobile"
      showProfile="/clinic/profile"
    />
    <BaseSidebarMobile
      v-if="menuIcons"
      :toogleMenu="toogleMenu"
      :sidebarIcons="sidebarIcons"
      showProfile="/clinic/profile"
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
          to: "/clinic/home",
          title: "Home",
          img: "/img/homeicon.svg",
        },
        {
          to: "/clinic/requests",
          title: "Requests",
          img: "/img/messageicon.svg",
        },
        {
          to: "/clinic/donors",
          title: "Visits",
          img: "/img/usersicon.svg",
        },
        {
          to: "/clinic/notifications",
          title: "Notifications",
          img: "/img/noty.svg",
        },
        {
          to: "/clinic/transactions",
          title: "Transactions",
          img: "/img/wallet1.svg",
        },

        {
          to: "/clinic/users",
          title: "Users",
          img: "/img/usericon.svg",
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
