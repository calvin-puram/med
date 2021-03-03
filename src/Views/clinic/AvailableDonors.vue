<template>
  <div class="dashboard">
    <BaseClinicSidebar />

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

<style lang="scss" scoped></style>
