<template>
  <div>
    <BaseLoader v-if="getloading" />
    <BaseWrapper
      dashboardName="Requests"
      :menuIcons="menuIcons"
      :toogleMenu="toogleMenu"
      profile="/clinic/profile"
      notification="/clinic/notifications"
      :profileName="
        getClinicProfile.clinicName ? getClinicProfile.clinicName : ''
      "
      profileStatus="clinic"
    >
      <section class="mt-2">
        <BaseRequestComponent
          name="Request"
          text="your requests will show here"
          image="../../assets/img/reload.svg"
        />
      </section>
    </BaseWrapper>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    menuIcons: {
      type: Boolean,
      required: true,
    },
    toogleMenu: {
      type: Function,
      required: true,
    },
  },
  computed: mapGetters(["getClinicProfile", "getClinicLoading", "getloading"]),
  created() {
    this.$store.dispatch("getClinicProfileIfAny");
  },
};
</script>

<style lang="scss">
.text__h5 {
  color: rgb(51, 66, 97);
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .ui-dashboard-card-header {
    display: block !important;
    .ui-card-title {
      margin-bottom: 1rem !important;
    }
  }

  .frm--card .ctrl--fnd {
    width: 100%;
  }

  .text__h5 {
    font-size: 1rem;
  }
}
</style>
