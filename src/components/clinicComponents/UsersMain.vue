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
                    <div></div>
                    <div class="ui-card-header-options">
                      <div class="ui-group-button d-flex align-items-center">
                        <div>
                          <router-link
                            class="btn btn--sm bg-brand-green onwhite "
                            to="/clinic/add-user"
                            >Add New</router-link
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="ui-dashboard-card-body">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th class=" ui-capitalize fs-14">
                              Name
                            </th>
                            <th class=" pdb1 ui-capitalize fs-14">
                              Email
                            </th>
                            <th class=" pdb1 ui-capitalize fs-14">
                              Phone number
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="tr--lnk">
                            <td>
                              <span class="avatar avatar-blue">JJ</span
                              ><span class=" fs-14">james john</span>
                            </td>
                            <td class="">
                              chastity@healtwise.com
                            </td>
                            <td class="">09013165980</td>
                            <td>
                              <div class="delete--btn">
                                <i
                                  class="fas fa-trash text-danger brand-crism"
                                ></i>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="ui-dashboard-card-footer">
                    <div class="ui-group-button npv--btn">
                      <button class="fs-14" disabled="">
                        <i class="fas fa-chevron-left onwhite"></i></button
                      ><button class="fs-14" disabled="">
                        <i class="fas fa-chevron-right onwhite"></i>
                      </button>
                    </div>
                    <div class="ui-card-footer-options">
                      <p class="onmineshaft mb-0  fs-14">
                        Showing 1 of 1 pages
                      </p>
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
<style lang="scss" scoped>
@import "../../design";
.body {
  background: #f5f8fd;
}

.btn__small {
  width: 200px !important;
}

.avatar-blue {
  background-color: #c8d9f1;
  color: #467fcf;
}

.avatar {
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  margin-top: 0.5rem;
  line-height: 2rem;
  border-radius: 50%;
  display: inline-block;
  background: #ced4da no-repeat center/cover;
  position: relative;
  text-align: center;
  color: #868e96;
  font-weight: 600;
  vertical-align: bottom;
  font-size: 0.875rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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

  .avatar,
  .avatar-blue {
    display: none !important;
  }
}
</style>
