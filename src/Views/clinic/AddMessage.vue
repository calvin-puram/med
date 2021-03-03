<template>
  <div class="dashboard">
    <BaseClinicSidebar />

    <AddMessageMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AddMessageMain from "@/components/clinicComponents/AddMessageMain";
export default {
  computed: mapGetters(["menuIcons"]),
  components: {
    AddMessageMain,
  },

  methods: {
    ...mapActions(["toogleMenu"]),
  },
};
</script>

<style lang="scss" scoped></style>
