<template>
  <div>
    <BaseLoader v-if="getClinicLoading && getloading" />
    <BaseWrapper
      dashboardName="Donors"
      :menuIcons="menuIcons"
      :toogleMenu="toogleMenu"
      bg__img="bg__img"
      bg__color="primary-color"
      profile="/clinic/profile"
      notification="/clinic/notifications"
      :profileName="
        getClinicProfile.clinicName ? getClinicProfile.clinicName : ''
      "
      profileStatus="clinic"
    >
      <section class="mt-2">
        <div class="ui-dashboard-card">
          <div class="ui-dashboard-card-header">
            <div></div>
            <div class="ui-card-header-options">
              <div class="ui-group-button d-flex align-items-center">
                <div>
                  <router-link
                    class="btn btn--sm bg-brand-green onwhite "
                    to="/clinic/add-user"
                    >Add New</router-link
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="ui-dashboard-card-body">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th class=" pb-1 ui-capitalize fs-14">
                      Email
                    </th>
                    <th class=" pb-1 ui-capitalize fs-14">
                      Designation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="tr--lnk"
                    v-for="user in getClinicUsers"
                    :key="user.clinicUserID"
                  >
                    <td>
                      <span class=" fs-14">
                        {{ user.username ? user.username : "unknown" }}</span
                      >
                    </td>
                    <td class="">
                      {{ user.designation ? user.designation : "unknown" }}
                    </td>

                    <td>
                      <div class="delete--btn">
                        <i class="fas fa-trash text-danger brand-crism"></i>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="ui-dashboard-card-footer">
            <div class="ui-group-button npv--btn">
              <button class="fs-14" disabled="">
                <i class="fas fa-chevron-left onwhite"></i></button
              ><button class="fs-14" disabled="">
                <i class="fas fa-chevron-right onwhite"></i>
              </button>
            </div>
            <div class="ui-card-footer-options">
              <p class="onmineshaft mb-0  fs-14">
                Showing 1 of 1 pages
              </p>
            </div>
          </div>
        </div>
      </section>
    </BaseWrapper>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters([
    "getClinicProfile",
    "getClinicErr",
    "getClinicUsers",
    "getClinicLoading",
    "getloading",
  ]),
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
  async created() {
    await this.$store.dispatch("getClinicProfileIfAny");
    this.$store.dispatch("clinicUsers", this.getClinicProfile.clinicID);
  },
};
</script>
<style lang="scss" scoped>
.btn__small {
  width: 200px !important;
}

@media screen and (max-width: 768px) {
  .ui-dashboard-card-header {
    display: block !important;
    .ui-card-title {
      margin-bottom: 1rem !important;
    }
  }
}

@media screen and (max-width: 360px) {
  .advance__search-mobile {
    flex-direction: column;
  }

  .ui-separate {
    padding: 0 !important;
  }
}
</style>
