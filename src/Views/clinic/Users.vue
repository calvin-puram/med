<template>
  <div class="dashboard">
    <BaseClinicSidebar />
    <UserMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import UserMain from "@/components/clinicComponents/UsersMain";
export default {
  computed: mapGetters(["menuIcons"]),
  components: {
    UserMain,
  },

  methods: {
    ...mapActions(["toogleMenu"]),
  },
};
</script>

<style lang="scss" scoped>

</style>
