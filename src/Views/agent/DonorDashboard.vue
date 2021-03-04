<template>
  <div class="dashboard">
    <BaseAgentSidebar />
    <DonorHomeMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DonorHomeMain from "@/components/agentComponents/DonorHomeMain";
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
