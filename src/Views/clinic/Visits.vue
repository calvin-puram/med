<template>
  <div class="dashboard">
    <BaseClinicSidebar />
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

<style lang="scss" scoped></style>
