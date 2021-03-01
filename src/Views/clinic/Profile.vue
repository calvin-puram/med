<template>
  <div class="dashboard">
    <BaseSidebar home="/clinic/home" v-if="!menuIcons" class="hideMobile" />

    <BaseSideIcons home="/clinic/home" v-else class="hideMobile" />
    <BaseSidebarMobile
      v-if="menuIcons"
      :toogleMenu="toogleMenu"
      home="/clinic/home"
      class="d-none mobileNav"
    />

    <ProfileMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProfileMain from "@/components/clinicComponents/ProfileMain";
export default {
  computed: mapGetters(["menuIcons"]),
  components: {
    ProfileMain,
  },

  methods: {
    ...mapActions(["toogleMenu"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../../design/";
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
