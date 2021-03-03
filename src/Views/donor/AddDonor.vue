<template>
  <div class="dashboard">
    <BaseDonorSidebar showProfile="agent" />
    <AddDonorMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AddDonorMain from "@/components/donorComponents/AddDonorMain";
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
