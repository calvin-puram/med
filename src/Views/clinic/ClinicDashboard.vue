<template>
  <div class="dashboard">
    <AddClinicProfilePopup v-if="getClinicProfile === null" />
    <ClinicHomeMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
    <BaseClinicSidebar />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ClinicHomeMain from "@/components/clinicComponents/ClinicHomeMain";
import AddClinicProfilePopup from "@/components/clinicComponents/AddClinicProfilePopup";
export default {
  computed: mapGetters(["menuIcons", "getClinicProfile", "getloading"]),
  components: {
    ClinicHomeMain,
    AddClinicProfilePopup,
  },
  methods: {
    ...mapActions(["toogleMenu"]),
  },
  beforeMount() {
    this.$store.dispatch("getClinicProfileIfAny");
  },
};
</script>

<style lang="scss" scoped></style>
