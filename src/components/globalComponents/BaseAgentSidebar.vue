<template>
  <div>
    <BaseSidebar
      :sidebarIcons="sidebarIcons"
      v-if="!menuIcons"
      class="hideMobile"
      showProfile="/agent/profile"
    />

    <BaseSideIcons
      :sidebarIcons="sidebarIcons"
      showProfile="/agent/profile"
      v-else
      class="hideMobile"
    />
    <BaseSidebarMobile
      v-if="menuIcons"
      :toogleMenu="toogleMenu"
      :sidebarIcons="sidebarIcons"
      showProfile="/agent/profile"
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
          to: "/agent/donors",
          title: "Donors",
          img: "/img/usericon.svg",
        },
        {
          to: "/agent/notifications",
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
