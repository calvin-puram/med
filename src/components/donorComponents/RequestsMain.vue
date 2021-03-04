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
                <div class="col-md-4"></div>
                <div class="col-md-8 ">
                  <div class="row mr-0 ml-0">
                    <div class="col-md-4">
                      <router-link
                        to="/clinics"
                        class="btn btn--sm bg-brand-bluemd onwhite "
                        >Back</router-link
                      >
                    </div>
                    <div class="col-md-4">
                      <BaseDashboardTabs
                        color=" rgb(247, 105, 72)"
                        text="Request for Donation"
                        link="/clinic/add-user"
                      />
                    </div>
                    <div class="col-md-4">
                      <BaseDashboardTabs
                        color=" #06dca9"
                        text="Send Feedback"
                        link="/clinic/tips"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <section class="mrgt2">
                <div class="ui-dashboard-card">
                  <div class="ui-dashboard-card-header"></div>
                  <div class="ui-dashboard-card">
                    <div class="ui-dashboard-card-body">
                      <h5 class="text__h5">
                        Your requests will show here
                      </h5>
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
  background: $color-body-bg;
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
