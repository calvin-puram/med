<template>
  <BaseWrapper
    dashboardName="Donors"
    :menuIcons="menuIcons"
    :toogleMenu="toogleMenu"
    profile="/provider/profile"
    notification="/provider/notifications"
  >
    <div class="pt-1 pb-2 ovw--bx">
      <div class="row">
        <div class="col-6 col-sm-4 col-lg-3">
          <div class="ui-dashboard-card bg-box-blue">
            <div class="ui-dashboard-card-body ui-text-center">
              <div class="h1 mb-0 ">66</div>
              <small class="">Total Donors</small>
            </div>
          </div>
        </div>
        <div class="col-6 col-sm-4 col-lg-3">
          <div class="ui-dashboard-card bg-box-teal">
            <div class="ui-dashboard-card-body ui-text-center">
              <div class="h1 mb-0 ">18</div>
              <small class="">Clinics</small>
            </div>
          </div>
        </div>
        <div class="col-6 col-sm-4 col-lg-3">
          <div class="ui-dashboard-card bg-box-yellow">
            <div class="ui-dashboard-card-body ui-text-center">
              <div class="h1 mb-0 ">2</div>
              <small>New Donors </small>
            </div>
          </div>
        </div>
        <div class="col-6 col-sm-4 col-lg-3">
          <div class="ui-dashboard-card bg-box-orange">
            <div class="ui-dashboard-card-body ui-text-center">
              <div class="h1 mb-0 ">11</div>
              <small>Verified Clinics</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row spec--bx">
      <div class="col-md-6 ">
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
  </BaseWrapper>
</template>

<script>
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
};
</script>

<style lang="scss" scoped>
@import "../../design";
.bg-wrapper {
  background: linear-gradient(rgba(242, 7, 226, 0.7), rgba(242, 7, 226, 0.6));
}
</style>
