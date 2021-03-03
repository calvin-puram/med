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
                        color=" #06dca9"
                        text="Withdraw"
                        link="/clinic/add-user"
                      />
                    </div>
                    <div class="col-md-6">
                      <BaseDashboardTabs
                        color=" #082c77"
                        text="Send Money To A User"
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
                  <h5
                    class="text__h5"
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  >
                    Your transaction history will show here
                  </h5>
                </div>
              </div>
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
