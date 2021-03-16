<template>
  <div class="dashboard">
    <AddAgentProfilePopup v-if="getAgentProfile === null" />
    <DonorHomeMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
    <BaseAgentSidebar />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DonorHomeMain from "@/components/agentComponents/DonorHomeMain";
import AddAgentProfilePopup from "@/components/agentComponents/AddAgentProfilePopup";
export default {
  computed: mapGetters(["menuIcons", "getAgentProfile", "getloading"]),
  components: {
    DonorHomeMain,
    AddAgentProfilePopup,
  },
  methods: {
    ...mapActions(["toogleMenu"]),
  },
  beforeMount() {
    this.$store.dispatch("getAgentProfileIfAny");
  },
};
</script>

<style lang="scss" scoped></style>
