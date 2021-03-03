<template>
  <div class="dashboard">
    <BaseClinicSidebar />

    <FullSearchMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import FullSearchMain from "@/components/clinicComponents/FullSearchMain";
export default {
  computed: mapGetters(["menuIcons"]),
  components: {
    FullSearchMain,
  },

  methods: {
    ...mapActions(["toogleMenu"]),
  },
};
</script>

<style lang="scss" scoped></style>
