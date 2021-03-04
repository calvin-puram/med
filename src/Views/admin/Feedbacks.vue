<template>
  <div class="dashboard">
    <BaseAdminSidebar />
    <FeedbackMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import FeedbackMain from "@/components/adminComponents/FeedbackMain";
export default {
  computed: mapGetters(["menuIcons"]),
  components: {
    FeedbackMain,
  },
  methods: {
    ...mapActions(["toogleMenu"]),
  },
};
</script>

<style lang="scss" scoped></style>
