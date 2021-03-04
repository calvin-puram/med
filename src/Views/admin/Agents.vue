<template>
  <div class="dashboard">
    <BaseAdminSidebar />
    <AgentsMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AgentsMain from "@/components/adminComponents/AgentsMain";
export default {
  computed: mapGetters(["menuIcons"]),
  components: {
    AgentsMain,
  },
  methods: {
    ...mapActions(["toogleMenu"]),
  },
};
</script>

<style lang="scss" scoped></style>
