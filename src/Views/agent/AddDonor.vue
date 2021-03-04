<template>
  <div class="dashboard">
    <BaseAgentSidebar />
    <AddDonorMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AddDonorMain from "@/components/agentComponents/AddDonorMain";
export default {
  computed: mapGetters(["menuIcons"]),
  components: {
    AddDonorMain,
  },
  methods: {
    ...mapActions(["toogleMenu"]),
  },
};
</script>

<style lang="scss" scoped></style>
