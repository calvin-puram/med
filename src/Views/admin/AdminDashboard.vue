<template>
  <div class="dashboard">
    <BaseAdminSidebar />
    <AdminDashboardMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AdminDashboardMain from "@/components/adminComponents/AdminDashboardMain";
export default {
  computed: mapGetters(["menuIcons"]),
  components: {
    AdminDashboardMain,
  },
  methods: {
    ...mapActions(["toogleMenu"]),
  },
};
</script>

<style lang="scss" scoped></style>
