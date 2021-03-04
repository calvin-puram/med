<template>
  <main>
    <div
      :class="
        menuIcons ? 'ui-dashboard-body ' : 'ui-dashboard-body sdbr--open  '
      "
    >
      <div>
        <div class="body">
          <BaseDashboardNav
            title="Transactions"
            :menuIcons="menuIcons"
            :toogleMenu="toogleMenu"
          />
          <section class="ui-body-content">
            <div class="ui-body-content-inner">
              <div class="ui-separate"></div>
              <div class="row ">
                <div class="col-md-6"></div>
                <div class="col-md-6 ">
                  <div class="row mr-0 ml-0">
                    <div class="col-md-6">
                      <BaseDashboardTabs
                        color=" rgb(247, 105, 72)"
                        text="Request for Donation"
                        link="/clinic/add-user"
                      />
                    </div>
                    <div class="col-md-6">
                      <BaseDashboardTabs
                        color=" #06dca9"
                        text="Send Feedback"
                        link="/clinic/tips"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row spec--bx">
                <div class="col-md-6">
                  <div class="ui-dashboard-card">
                    <div
                      class="ui-dashboard-card-body ui-full-bg-norm ui-rounded-small"
                    >
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
            </div>
          </section>
        </div>
      </div>
      <!-- footer -->
      <BaseDashboardFooter />
    </div>
  </main>
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
};
</script>
<style lang="scss">
@import "../../design";
.body {
  background: #f5f8fd;
}
.text__h5 {
  color: rgb(51, 66, 97);
}

.ui-full-bg-norm {
  @include ui-full-bg-norm("../../assets/img/clinicHome1.svg");
}

@media screen and (max-width: 768px) {
  .ui-dashboard-card-header {
    display: block !important;
    .ui-card-title {
      margin-bottom: 1rem !important;
    }
  }

  .ui-dashboard-body.sdbr--open {
    padding-left: 0px !important;
  }

  .frm--card .ctrl--fnd {
    width: 100%;
  }

  .text__h5 {
    font-size: 1rem;
  }
}
</style>
