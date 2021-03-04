<template>
  <div class="dashboard">
    <BaseAdminSidebar />
    <DonorsMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DonorsMain from "@/components/adminComponents/DonorsMain";
export default {
  computed: mapGetters(["menuIcons"]),
  components: {
    DonorsMain,
  },
  methods: {
    ...mapActions(["toogleMenu"]),
  },
};
</script>

<style lang="scss" scoped></style>
