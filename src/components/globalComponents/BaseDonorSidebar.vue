<template>
  <div>
    <BaseSidebar
      :sidebarIcons="sidebarIcons"
      v-if="!menuIcons"
      class="hideMobile"
      showProfile="/donor/profile"
    />

    <BaseSideIcons
      :sidebarIcons="sidebarIcons"
      showProfile="/donor/profile"
      v-else
      class="hideMobile"
    />
    <BaseSidebarMobile
      v-if="menuIcons"
      :toogleMenu="toogleMenu"
      :sidebarIcons="sidebarIcons"
      showProfile="/donor/profile"
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
          img: "https://dms.medbarnagency.com/images/assets/icon@donor.svg",
        },
        {
          to: "/agent/notifications",
          title: "AgentNoti",
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
