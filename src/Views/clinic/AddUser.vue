<template>
  <div class="dashboard">
    <BaseClinicSidebar />
    <AdduserMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AdduserMain from "@/components/clinicComponents/AdduserMain";
export default {
  computed: mapGetters(["menuIcons"]),
  components: {
    AdduserMain,
  },

  methods: {
    ...mapActions(["toogleMenu"]),
  },
};
</script>

<style lang="scss" scoped></style>
