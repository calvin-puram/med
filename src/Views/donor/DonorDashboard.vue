<template>
  <div class="dashboard">
    <BaseDonorSidebar showProfile="agent" />
    <DonorHomeMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DonorHomeMain from "@/components/donorComponents/DonorHomeMain";
export default {
  computed: mapGetters(["menuIcons"]),
  components: {
    DonorHomeMain,
  },
  methods: {
    ...mapActions(["toogleMenu"]),
  },
};
</script>

<style lang="scss" scoped></style>
