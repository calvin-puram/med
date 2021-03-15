<template>
  <div>
    <BaseLoader v-if="getloading" />
    <BaseWrapperWithDashboardTabs
      dashboardName="Dashboard"
      :menuIcons="menuIcons"
      :toogleMenu="toogleMenu"
      :tabsData="tabsData"
      profile="/clinic/profile"
      notification="/clinic/notifications"
      :profileName="getClinicProfile.clinicName"
      profileStatus="clinic"
    >
      <div class="row">
        <div class="col-md-6">
          <div class="ui-dashboard-card">
            <div
              class="ui-dashboard-card-body bg-wrapper total__balance-wrapper ui-rounded-small"
            >
              <div class="total__balance-sec">
                <p class="total onwhite mb-0 fs-24 mt-1">
                  Total Balance
                </p>
                <h1 class=" fs-40 onwhite font-weight-bold">
                  <span class="naira">&#8358;</span>
                  2000.00
                </h1>
                <div class="mt-4">
                  <p class=" onwhite mb-0">
                    Bank: Net Microfinance Bank
                  </p>
                  <p class="onwhite">
                    Acct Number: 7084830006
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="ui-dashboard-card">
            <div
              class="ui-dashboard-card-body bg-wrapper total__balance-wrapper ui-rounded-small"
            >
              <h2 class=" onwhite fs-24 mt-1">
                Total Donors
              </h2>
              <h1 class=" fs-40 onwhite">0</h1>
              <div>
                <p class="  onwhite">
                  0 Male / 0 Female
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ui card -->
      <section class="mt-2">
        <div class="ui-dashboard-card">
          <div
            class="d-flex align-items-center justify-content-between  my-4 mx-4"
          >
            <h4
              class="ui-card-title normal-text align-self-center form-seperator"
            >
              0 new visits
            </h4>

            <div>
              <form class="form-wrapper frm--card">
                <input
                  type="text"
                  placeholder="Find by name"
                  class=" form-control ctrl--fnd"
                  id="searchRef"
                />
              </form>
            </div>
          </div>
          <div class="divider-1">
            <hr />
          </div>
          <div class="ui-dashboard-card-body">
            <div class="txt__showcase">
              <img src="@/assets/img/allbg.svg" alt="mobile phones" />
              <p class="txt__history-text">
                Your message history will show here
              </p>
            </div>
          </div>
        </div>
      </section>
    </BaseWrapperWithDashboardTabs>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["getClinicProfile", "getloading"]),
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
  created() {
    this.$store.dispatch("getClinicProfileIfAny");
  },
};
</script>

<style lang="scss" scoped>
@import "../../design";

.bg-wrapper {
  background: linear-gradient(rgba(242, 7, 226, 0.7), rgba(242, 7, 226, 0.6));
}

.total__balance-wrapper {
  height: 30vh;
}

.form--seperator {
  flex: 1;
}

.divider-1 {
  width: 98%;
  margin: auto;
  margin-top: -1rem;
}

.txt__showcase {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  margin-bottom: 4rem;
}

.txt__history-text {
  padding-top: 3rem;
}

.form-search {
  flex: 5;
}

@media screen and (max-width: 768px) {
  .ui-dashboard-card-header {
    display: block !important;
    .ui-card-title {
      margin-bottom: 1rem !important;
    }
  }

  .form-wrapper {
    flex-direction: column;
  }

  .btn {
    width: 30% !important;
    margin: 1rem auto;
  }
}
@media screen and (max-width: 550px) {
  .txt__showcase {
    height: auto;
  }
}
</style>
