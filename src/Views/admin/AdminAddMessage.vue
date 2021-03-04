<template>
  <div class="dashboard">
    <BaseAdminSidebar />
    <AdminAddMessageMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AdminAddMessageMain from "@/components/adminComponents/AdminAddMessageMain";
export default {
  computed: mapGetters(["menuIcons"]),
  components: {
    AdminAddMessageMain,
  },
  methods: {
    ...mapActions(["toogleMenu"]),
  },
};
</script>

<style lang="scss" scoped></style>
