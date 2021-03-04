<template>
  <div class="dashboard">
    <BaseAdminSidebar />
    <AdminAddDonorMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AdminAddDonorMain from "@/components/adminComponents/AdminAddDonorMain";
export default {
  computed: mapGetters(["menuIcons"]),
  components: {
    AdminAddDonorMain,
  },
  methods: {
    ...mapActions(["toogleMenu"]),
  },
};
</script>

<style lang="scss" scoped></style>
