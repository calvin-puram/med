<template>
  <div class="dashboard">
    <AddClinicProfilePopup />
    <ClinicHomeMain
      :menuIcons="menuIcons"
      :toogleMenu="toogleMenu"
      v-if="getClinicProfile !== null"
    />
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
};
</script>

<style lang="scss" scoped></style>
