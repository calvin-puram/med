<template>
  <div>
    <BaseSidebar
      :sidebarIcons="sidebarIcons"
      v-if="!menuIcons"
      class="hideMobile"
    />

    <BaseSideIcons :sidebarIcons="sidebarIcons" v-else class="hideMobile" />
    <BaseSidebarMobile
      v-if="menuIcons"
      :toogleMenu="toogleMenu"
      :sidebarIcons="sidebarIcons"
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
          img: "https://dms.medbarnagency.com/images/assets/icon@home.svg",
        },
        {
          to: "/clinic/requests",
          title: "Requests",
          img: "https://dms.medbarnagency.com/images/assets/requests.svg",
        },
        {
          to: "/clinic/donors",
          title: "Visits",
          img: "https://dms.medbarnagency.com/images/assets/icon@donor.svg",
        },
        {
          to: "/clinic/transactions",
          title: "Transactions",
          img: "https://dms.medbarnagency.com/images/assets/icon@card.svg",
        },
        {
          to: "/clinic/notifications",
          title: "Notifications",
          img: "https://dms.medbarnagency.com/images/assets/icon@card.svg",
        },
        {
          to: "/clinic/users",
          title: "Users",
          img: "https://dms.medbarnagency.com/images/assets/icon@user.svg",
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
