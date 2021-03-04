<template>
  <div class="dashboard">
    <BaseAdminSidebar />
    <ClinicsMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ClinicsMain from "@/components/adminComponents/ClinicsMain";
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
