<template>
  <BaseWrapperWithDashboardTabs
    dashboardName="Transactions"
    :menuIcons="menuIcons"
    :toogleMenu="toogleMenu"
    :tabsData="tabsData"
    profile="/clinic/profile"
    notification="/clinic/notifications"
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
                Bank: Rubies Microfinance Bank
              </p>
              <p>
                Acct Number: 7084830006
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ui-dashboard-card">
      <div class="ui-dashboard-card-body">
        <h5 class="text__h5">
          Your transaction history will show here
        </h5>
      </div>
    </div>
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
          color: "#06dca9",
          text: "Withdraw",
          link: "not link",
        },
        {
          id: 2,
          color: " #082c77",
          text: "Send Money To A User",
          link: "not link",
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
