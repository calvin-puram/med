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
            title="Search Donors"
            :menuIcons="menuIcons"
            :toogleMenu="toogleMenu"
          />
          <section class="ui-body-content">
            <div class="ui-body-content-inner">
              <div class="ui-separate"></div>
              <div class="ui-content-header"></div>
              <div class="ui-dashboard-card">
                <div
                  class="ui-dashboard-card-body ui-full-bg-norm ui-rounded-small"
                >
                  <div class="ui-separate mb-1"></div>
                </div>
              </div>
              <section class="mt-2">
                <div class="ui-dashboard-card">
                  <div class="ui-dashboard-card-header">
                    <div>
                      <form class="d-flex align-items-center frm--card">
                        <input
                          type="text"
                          placeholder="Find a donor by name, phone etc"
                          class=" form-control ctrl--fnd"
                          id="searchRef"
                        />
                      </form>
                      <div class="advance-search mt-4">
                        <div
                          class="d-flex align-items-center justify-content-between advance__search-mobile"
                        >
                          <h6>Advance search</h6>
                          <button class="btn btn-primary onwhite btn__small  ">
                            Refresh Form
                          </button>
                        </div>
                        <form class="mt-5">
                          <div class="row ">
                            <div class="col-md-3 mb-3">
                              <select
                                id="filt-gender"
                                class="form-control advance"
                                ><option value="">Select Gender</option
                                ><option value="male">Male</option
                                ><option value="female">Female</option></select
                              >
                            </div>
                            <div class="col-md-3 mb-3">
                              <select
                                id="filt-ethnicity"
                                class="form-control advance "
                                ><option value="">Select Ethnicity</option
                                ><option value="Yoruba">Yoruba</option
                                ><option value="Igbo">Igbo</option
                                ><option value="Hausa">Hausa</option></select
                              >
                            </div>
                            <div class="col-md-3 mb-3">
                              <select
                                id="filt-donorType"
                                class="form-control advance "
                                ><option value="">Select Donor Type</option
                                ><option value="egg">Egg</option
                                ><option value="sperm">Sperm</option
                                ><option value="surrogate"
                                  >Surrogate</option
                                ></select
                              >
                            </div>
                            <div class="col-md-3 mb-3">
                              <select
                                id="filt-education"
                                class="form-control advance "
                                ><option value="">Select Education Level</option
                                ><option value="graduate">Graduate</option
                                ><option value="master">Masters</option
                                ><option value="PHD">PHD</option
                                ><option value="undergraduate"
                                  >Undergraduate</option
                                ><option value="High school">High school</option
                                ><option value="Basic">Basic</option
                                ><option value="Not educated"
                                  >Not educated</option
                                ></select
                              >
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-3 mb-3">
                              <select
                                id="filt-religion"
                                class="form-control advance "
                                ><option value="">Select Religion</option
                                ><option value="christian">Christian</option
                                ><option value="islam">Islam</option
                                ><option value="traditional">Traditional</option
                                ><option value="others">Others</option></select
                              >
                            </div>
                            <div class="col-md-3 mb-3">
                              <select
                                id="filt-height"
                                class="form-control advance "
                                ><option value="">Select Height</option
                                ><option value="Tall">Tall</option
                                ><option value="Medium">Medium</option
                                ><option value="Short">Short</option></select
                              >
                            </div>
                            <div class="col-md-3 mb-3">
                              <select
                                id="filt-complexion"
                                class="form-control advance "
                                ><option value="">Select Complexion</option
                                ><option value="Albino">Albino</option
                                ><option value="Black">Black</option
                                ><option value="Dark">Dark</option
                                ><option value="Yellow">Yellow</option
                                ><option value="Dark Brown">Dark Brown</option
                                ><option value="Fair">Fair</option
                                ><option value="Light">Light</option
                                ><option value="Light Brown">Light Brown</option
                                ><option value="Medium">Medium</option
                                ><option value="Medium Brown"
                                  >Medium Brown</option
                                ><option value="Olive">Olive</option
                                ><option value="Ruddy">Ruddy</option
                                ><option value="Sallow">Sallow</option
                                ><option value="Other">Other</option></select
                              >
                            </div>
                            <div class="col-md-3 mb-3">
                              <button
                                class="btn  bg-brand-green onwhite btn__small"
                              >
                                Filter
                              </button>
                            </div>
                          </div>
                        </form>
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

.btn__small {
  width: 200px !important;
}
.ui-full-bg-norm {
  @include ui-full-bg-norm("../../assets/img/fullsearchimg.svg");
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
}

@media screen and (max-width: 360px) {
  .advance__search-mobile {
    flex-direction: column;
  }

  .ui-separate {
    padding: 0 !important;
  }
}
</style>
