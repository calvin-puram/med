<template>
  <BaseWrapperWithDashboardTabs
    dashboardName="Messages"
    :menuIcons="menuIcons"
    :toogleMenu="toogleMenu"
    bg__color="primary-color"
    profile="/provider/profile"
    notification="/provider/notifications"
  >
    <div class="row spec--bx">
      <div class="col-md-12">
        <div class="ui-dashboard-card">
          <div class="ui-dashboard-card-body ui-full-bg-norm ui-rounded-small">
            <div
              class="d-flex justify-content-between align-items-center onmobile-column"
            >
              <div class="total__balance-sec">
                <p class="total onwhite mb-0 fs-24 mt-1">
                  Total Balance
                </p>
                <h1 class=" fs-40 onwhite font-weight-bold">
                  <span class="naira">&#8358;</span>
                  0.00
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

              <img
                src="../../assets/img/transactionimg.svg"
                alt="transaction"
                height="200px"
                class="txt__balance-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="mt-2">
      <div class="ui-dashboard-card">
        <div
          class=" d-flex align-items-center justify-content-between txt__header onmobile-column"
        >
          <h4 class="history font-weight-bold">Transaction History</h4>
          <button class="btn btn--sm btn-color">
            <img src="@/assets/img/reload.svg" class="mr-3" alt="reload" />
            Refresh
          </button>
        </div>
        <div class="divider">
          <hr />
        </div>
        <div class="ui-dashboard-card-body">
          <div class="txt__showcase">
            <img src="@/assets/img/txt-showcase.svg" alt="mobile phones" />
            <p class="txt__history-text">
              Your transaction history will show here
            </p>
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

<style lang="scss">
@import "../../design";

.ui-full-bg-norm {
  background: linear-gradient(rgba(242, 7, 226, 0.7), rgba(242, 7, 226, 0.6));
}

.naira {
  position: relative;
  top: -1rem;
  right: -0.5rem;
  font-size: 14px;
}

.total {
  opacity: 0.7;
}

.btn-color {
  background: $onboarding-btn-dark !important;
  color: #fff !important;
  width: 100px;
  flex: 1;
  align-self: flex-end;
}

.history {
  flex: 3.5;
}

.txt__header {
  width: 90%;
  margin: auto;
  margin-top: 2rem;
}

.divider {
  width: 98%;
  margin: auto;
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

@media screen and (max-width: 768px) {
  .ui-dashboard-card-header {
    display: block !important;
    .ui-card-title {
      margin-bottom: 1rem !important;
    }
  }
}

@media screen and (max-width: 550px) {
  .onmobile-column {
    flex-direction: column;
    text-align: center;
  }

  .txt__balance-img {
    margin-right: 7rem;
  }

  .btn {
    width: 50% !important;
    margin: 1rem auto;
  }

  .txt__showcase {
    height: auto;
  }
}
</style>
