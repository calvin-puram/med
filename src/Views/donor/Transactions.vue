<template>
  <div class="dashboard">
    <BaseDonorSidebar />
    <TransactionsMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TransactionsMain from "@/components/donorComponents/TransactionsMain";
export default {
  computed: mapGetters(["menuIcons"]),
  components: {
    TransactionsMain,
  },
  methods: {
    ...mapActions(["toogleMenu"]),
  },
};
</script>

<style lang="scss" scoped></style>
