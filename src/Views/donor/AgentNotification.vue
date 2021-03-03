<template>
  <div class="dashboard">
    <BaseDonorSidebar showProfile="agent" />
    <NotificationMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import NotificationMain from "@/components/donorComponents/NotificationMain";
export default {
  computed: mapGetters(["menuIcons"]),
  components: {
    NotificationMain,
  },
  methods: {
    ...mapActions(["toogleMenu"]),
  },
};
</script>

<style lang="scss" scoped></style>
