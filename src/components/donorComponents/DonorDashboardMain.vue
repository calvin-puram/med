<template>
  <BaseWrapperWithDashboardTabs
    dashboardName="Dashboard"
    :menuIcons="menuIcons"
    :toogleMenu="toogleMenu"
    :tabsData="tabsData"
    profile="/profile"
    notification="/notifications"
  >
    <div class="row spec--bx">
      <div class="col-md-6">
        <div class="ui-dashboard-card">
          <div class="ui-dashboard-card-body ui-full-bg-norm ui-rounded-small">
            <h2 class=" brand-alblue fs-24 mt-1">
              Balance
            </h2>
            <h1 class=" fs-40">0</h1>
            <div>
              <p class=" mb-0">
                Bank: Example Microfinance Bank
              </p>
              <p>
                Acct Number: 7084830006
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="mt-2">
      <div class="ui-dashboard-card">
        <div class="ui-dashboard-card-header">
          <h3 class=" brand-dblue ui-card-title">
            Donation request status
          </h3>
          <div class="ui-card-header-options">
            <button class="btn btn--sm bg-brand-green onwhite ">
              Refresh
            </button>
          </div>
        </div>
        <div class="ui-dashboard-card-body">
          <div class="ui-wrapper">
            <div class="row mt-2 mb-2 ui-text-center">
              <div class="col-md-6 mx-auto">
                <p class=" oncorduroy">
                  You have not made any donation request recently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </BaseWrapperWithDashboardTabs>
</template>

<script>
export default {
  components: {},
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
  data() {
    return {
      tabsData: [
        {
          id: 1,
          color: "rgb(247, 105, 72)",
          text: "Request for Donation",
          link: "/clinic/add-user",
        },
        {
          id: 2,
          color: "#06dca9",
          text: "Send Feedback",
          link: "/clinic/tips",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../design";

.ui-full-bg-norm {
  @include ui-full-bg-norm("../../assets/img/clinicHome1.svg");
}
</style>
