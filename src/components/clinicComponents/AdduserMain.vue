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
            title="Add a new user to your clinic"
            :menuIcons="menuIcons"
            :toogleMenu="toogleMenu"
          />
          <section class="ui-body-content">
            <div class="ui-body-content-inner">
              <div class="ui-separate"></div>
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
                    <h3 class="ui-card-title brand-dblue ">
                      User details
                    </h3>
                    <div class="ui-card-header-options"></div>
                  </div>
                  <div class="ui-dashboard-card-body">
                    <form class="frm--cstm pt-3">
                      <div class="row">
                        <div class="col-md-7 mx-auto">
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="fs-14  brand-dblue"
                                  >First name</label
                                ><input
                                  type="text"
                                  class="form-control "
                                  placeholder="e.g. Jame"
                                  id="clinic-name"
                                />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="fs-14  brand-dblue"
                                  >Last name</label
                                ><input
                                  type="text"
                                  class="form-control "
                                  placeholder="e.g. Patrick"
                                  id="clinic-name"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="fs-14  brand-dblue"
                                  >Phone number</label
                                ><input
                                  type="text"
                                  class="form-control "
                                  placeholder="Phone number"
                                  id="phone-number"
                                  autocomplete="off"
                                />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="fs-14  brand-dblue"
                                  >Email address</label
                                ><input
                                  type="email"
                                  class="form-control "
                                  placeholder="Clinic email address"
                                  id="email"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="form-group mt-3 mb-2">
                            <div class="d-flex align-items-center">
                              <div class="ml-auto">
                                <button
                                  type="submit"
                                  class="btn bg-brand-green onwhite  btn-sm"
                                >
                                  ADD USER
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
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
.ui-full-bg-norm {
  @include ui-full-bg-norm("../../assets/img/adduser__bg.svg");
}

@media screen and (max-width: 768px) {
  .ui-dashboard-body.sdbr--open {
    padding-left: 0px;
  }
}
</style>
