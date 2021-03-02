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
    <VisitsMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import VisitsMain from "@/components/clinicComponents/VisitsMain";
export default {
  computed: mapGetters(["menuIcons"]),
  components: {
    VisitsMain,
  },

  methods: {
    ...mapActions(["toogleMenu"]),
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
  .hideMobile {
    display: none !important;
  }

  .mobileNav {
    display: block !important;
  }
}
</style>
