<template>
  <div class="dashboard">
    <BaseAdminSidebar />
    <AdminAddClinicMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AdminAddClinicMain from "@/components/adminComponents/AdminAddClinicMain";
export default {
  computed: mapGetters(["menuIcons"]),
  components: {
    AdminAddClinicMain,
  },
  methods: {
    ...mapActions(["toogleMenu"]),
  },
};
</script>

<style lang="scss" scoped></style>
