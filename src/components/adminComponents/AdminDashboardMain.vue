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
            title="Dashboard "
            :menuIcons="menuIcons"
            :toogleMenu="toogleMenu"
          />

          <section class="ui-body-content">
            <div class="ui-body-content-inner">
              <div class="ui-separate"></div>
              <div class="ui-content-header">
                <div class="ui-header-options">
                  <div class="ui-group-button">
                    <div class="mt-3 mt-sm-0">
                      <router-link
                        class="btn btn--sm bg-brand-green onwhite  req"
                        to="/provider/clinics/add"
                        >Add New Clinic</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
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
                <div class="col-md-6">
                  <div class="ui-dashboard-card">
                    <div
                      class="ui-dashboard-card-body ui-full-bg-norm ui-rounded-small"
                    >
                      <h2
                        class="font-quicksandsemibold brand-alblue fs-24 mt-1"
                      >
                        Balance
                      </h2>
                      <h1 class=" fs-40">2350</h1>
                      <div>
                        <p class=" mb-0">
                          Bank:Rubies MFB
                        </p>
                        <p>
                          Acct Number: 7081570004 <br />
                          <small
                            >Transfer money to this account number to fund your
                            account.</small
                          >
                        </p>
                      </div>
                    </div>
                  </div>
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

.ui-full-bg-norm {
  @include ui-full-bg-norm("../../assets/img/clinicHome1.svg");
}

@media screen and (max-width: 768px) {
  .ui-dashboard-body.sdbr--open {
    padding-left: 0px;
  }
}
</style>
