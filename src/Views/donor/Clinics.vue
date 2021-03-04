<template>
  <div class="dashboard">
    <BaseDonorSidebar />
    <ClinicsMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ClinicsMain from "@/components/donorComponents/ClinicsMain";
export default {
  computed: mapGetters(["menuIcons"]),
  components: {
    ClinicsMain,
  },
  methods: {
    ...mapActions(["toogleMenu"]),
  },
};
</script>

<style lang="scss" scoped></style>
