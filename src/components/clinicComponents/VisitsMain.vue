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
            title="Donors"
            :menuIcons="menuIcons"
            :toogleMenu="toogleMenu"
          />
          <section class="ui-body-content">
            <div class="ui-body-content-inner">
              <div class="ui-separate-small"></div>
              <div class="ui-content-header">
                <div class="ui-header-options">
                  <div class="row mr-0 ml-0">
                    <div class="mr-3">
                      <BaseDashboardTabs
                        color="#06dca9 "
                        text="Search all donors"
                        link="/clinic/full-search"
                      />
                    </div>
                    <div class="mr-3">
                      <BaseDashboardTabs
                        color=" #082c77"
                        text="Find Available donors"
                        link="/clinic/free"
                      />
                    </div>
                    <div class="mr-0">
                      <router-link
                        to="/clinic/home"
                        class="btn btn--xs bg-brand-bluemd onwhite "
                      >
                        Back
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
              <section class="mt-2">
                <div class="ui-dashboard-card ui-card-tabs">
                  <div>
                    <div class="ui-cardtab-links">
                      <ul class="nav nav-tabs fs-14">
                        <li role="presentation" class="active">
                          <a href="#all-cards" role="tab" data-toggle="tab"
                            >Visiting Donors</a
                          >
                        </li>
                        <li role="presentation" class=" ">
                          <a href="#add-cards" role="tab" data-toggle="tab"
                            >Your Donors</a
                          >
                        </li>
                      </ul>
                    </div>
                    <div class="ui-dashboard-card-body">
                      <div class="tab-content">
                        <div
                          role="tabpanel"
                          class="tab-pane active"
                          id="all-cards"
                        >
                          <form class="d-flex align-items-center frm--card">
                            <div class="pr-1">
                              <input
                                type="text"
                                placeholder="Find by phone, donation type, gender, complexion etc"
                                class=" form-control ctrl--fnd"
                                id="searchRef"
                              />
                            </div>
                          </form>
                          <div class="ui-dashboard-card-body">
                            <h5 class="text__h5">
                              You don't have any visit yet
                            </h5>
                          </div>
                        </div>
                        <div class="tab-pane" id="add-cards">
                          <div class="ui-dashboard-card">
                            <form class="d-flex align-items-center frm--card">
                              <div class="pdr1">
                                <input
                                  type="text"
                                  placeholder="Find by name"
                                  class=" form-control ctrl--fnd"
                                  id="searchRef"
                                />
                              </div>
                            </form>
                            <div class="ui-dashboard-card-body">
                              <h5 class="text__h5">
                                You don't have any visit yet
                              </h5>
                            </div>
                          </div>
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
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
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
