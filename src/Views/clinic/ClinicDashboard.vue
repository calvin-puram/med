<template>
  <div class="dashboard">
    <BaseClinicSidebar />
    <ClinicHomeMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ClinicHomeMain from "@/components/clinicComponents/ClinicHomeMain";
export default {
  computed: mapGetters(["menuIcons"]),
  components: {
    ClinicHomeMain,
  },
  methods: {
    ...mapActions(["toogleMenu"]),
  },
};
</script>

<style lang="scss" scoped></style>
