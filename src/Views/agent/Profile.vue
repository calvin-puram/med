<template>
  <div class="dashboard">
    <BaseAgentSidebar />
    <ProfileMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProfileMain from "@/components/agentComponents/ProfileMain";
export default {
  computed: mapGetters(["menuIcons"]),
  components: {
    ProfileMain,
  },
  methods: {
    ...mapActions(["toogleMenu"]),
  },
};
</script>

<style lang="scss" scoped></style>
