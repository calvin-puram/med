<template>
  <div class="dashboard">
    <BaseDonorSidebar />
    <NotificationsMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import NotificationsMain from "@/components/donorComponents/NotificationsMain";
export default {
  computed: mapGetters(["menuIcons"]),
  components: {
    NotificationsMain,
  },
  methods: {
    ...mapActions(["toogleMenu"]),
  },
};
</script>

<style lang="scss" scoped></style>
