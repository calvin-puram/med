<template>
  <div class="dashboard">
    <BaseClinicSidebar />
    <RequestMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import RequestMain from "@/components/clinicComponents/RequestMain";
export default {
  computed: mapGetters(["menuIcons"]),
  components: {
    RequestMain,
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
