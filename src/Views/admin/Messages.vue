<template>
  <div class="dashboard">
    <BaseAdminSidebar />
    <MessagesMain :menuIcons="menuIcons" :toogleMenu="toogleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MessagesMain from "@/components/adminComponents/MessagesMain";
export default {
  computed: mapGetters(["menuIcons"]),
  components: {
    MessagesMain,
  },
  methods: {
    ...mapActions(["toogleMenu"]),
  },
};
</script>

<style lang="scss" scoped></style>
