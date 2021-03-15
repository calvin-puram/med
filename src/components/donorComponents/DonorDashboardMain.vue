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
          <div class="ui-dashboard-card-body bg-wrapper  ui-rounded-small">
            <div class="total__balance-sec">
              <p class="total onwhite mb-0 fs-24 mt-1">
                Total Balance
              </p>
              <h1 class=" fs-40 onwhite font-weight-bold">
                <span class="naira">&#8358;</span>
                2500.00
              </h1>
              <div class="mt-4">
                <p class=" onwhite mb-0">
                  Bank: Rubies Microfinance Bank
                </p>
                <p class="onwhite">
                  Acct Number: 7084830006
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="mt-2">
      <BaseRequestComponent
        name="Donation request status"
        text=" You have not made any donation request recently."
        image="../../assets/img/reload.svg"
      />
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
          color: "#8c0375",
          text: "Request for Donation",
          link: "/clinic/add-user",
        },
        {
          id: 2,
          color: "#707070",
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

.bg-wrapper {
  background: linear-gradient(rgba(242, 7, 226, 0.7), rgba(242, 7, 226, 0.6));
}
</style>
