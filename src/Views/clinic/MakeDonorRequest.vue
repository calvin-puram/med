<template>
  <div class="dashboard">
    <BaseClinicSidebar />
    <MakeDonorRequestMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MakeDonorRequestMain from "@/components/clinicComponents/MakeDonorRequestMain";
export default {
  computed: mapGetters(["menuIcons"]),
  components: {
    MakeDonorRequestMain,
  },

  methods: {
    ...mapActions(["toogleMenu"]),
  },
};
</script>

<style lang="scss" scoped></style>
