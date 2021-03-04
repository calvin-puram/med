<template>
  <div class="dashboard">
    <BaseDonorSidebar />
    <RequestsMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import RequestsMain from "@/components/donorComponents/RequestsMain";
export default {
  computed: mapGetters(["menuIcons"]),
  components: {
    RequestsMain,
  },
  methods: {
    ...mapActions(["toogleMenu"]),
  },
};
</script>

<style lang="scss" scoped></style>
