<template>
  <div class="dashboard">
    <BaseDonorSidebar />
    <DonorDashboardMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DonorDashboardMain from "@/components/donorComponents/DonorDashboardMain";
export default {
  computed: mapGetters(["menuIcons"]),
  components: {
    DonorDashboardMain,
  },
  methods: {
    ...mapActions(["toogleMenu"]),
  },
};
</script>

<style lang="scss" scoped></style>
