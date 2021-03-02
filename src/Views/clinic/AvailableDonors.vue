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

    <AvailableDonorsMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AvailableDonorsMain from "@/components/clinicComponents/AvailableDonorsMain";
export default {
  computed: mapGetters(["menuIcons"]),
  components: {
    AvailableDonorsMain,
  },

  methods: {
    ...mapActions(["toogleMenu"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../../design/";
@media (max-width: 768px) {
  .hideMobile {
    display: none !important;
  }

  .mobileNav {
    display: block !important;
  }
}
</style>
