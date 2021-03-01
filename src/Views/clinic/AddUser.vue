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

    <AddUserMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AddUserMain from "@/components/clinicComponents/AdduserMain";
export default {
  computed: mapGetters(["menuIcons"]),
  components: {
    AddUserMain,
  },

  methods: {
    ...mapActions(["toogleMenu"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../../design";
@media screen and (max-width: 768px) {
  .hideMobile,
  .hideMedium {
    display: none !important;
  }
  .mobileNav {
    display: block !important;
  }
}
</style>
