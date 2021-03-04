<template>
  <div class="dashboard">
    <BaseAdminSidebar />
    <TransactionMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TransactionMain from "@/components/adminComponents/TransactionMain";
export default {
  computed: mapGetters(["menuIcons"]),
  components: {
    TransactionMain,
  },
  methods: {
    ...mapActions(["toogleMenu"]),
  },
};
</script>

<style lang="scss" scoped></style>
