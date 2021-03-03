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
            title="Available Donors"
            :menuIcons="menuIcons"
            :toogleMenu="toogleMenu"
          />
          <section class="ui-body-content">
            <div class="ui-body-content-inner">
              <div class="ui-separate"></div>
              <div class="ui-content-header">
                <div class="ui-header-options">
                  <div class="ui-group-button">
                    <router-link
                      to="/clinic/home"
                      class="btn btn--xs bg-brand-bluemd onwhite "
                    >
                      Back
                    </router-link>
                  </div>
                </div>
              </div>
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
                          placeholder="Find a donor by name, phone, year of birth"
                          class=" form-control ctrl--fnd"
                          id="searchRef"
                        />
                      </form>
                    </div>
                    <div class="ui-card-header-options">
                      <div
                        class="ui-group-button d-flex align-items-center"
                      ></div>
                    </div>
                  </div>
                  <div class="ui-dashboard-card-body">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th class=" ui-capitalize fs-14">
                              Donor
                            </th>
                            <th class=" pb-1 ui-capitalize fs-14">
                              Age
                            </th>
                            <th class=" pb-1 ui-capitalize fs-14">
                              Complexion
                            </th>
                            <th class=" pb-1 ui-capitalize fs-14">
                              Ethnicity
                            </th>
                            <th class=" pb-1 ui-capitalize fs-14">
                              Religion
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="tr--lnk">
                            <td>
                              <span class="avatar avatar-blue">OI</span
                              ><span
                                class=" fs-14"
                                style="position: relative; top: -4px;"
                                >Oluwatobi Immanuel</span
                              >
                            </td>
                            <td class="">29 years</td>
                            <td class="">Dark Brown</td>
                            <td class="">Yoruba</td>
                            <td class="">christian</td>
                            <td>
                              <button
                                class="btn btn-sm bg-brand-green onwhite "
                              >
                                Add Donor
                              </button>
                            </td>
                          </tr>

                          <tr class="tr--lnk">
                            <td>
                              <span class="avatar avatar-blue">SD</span
                              ><span
                                class=" fs-14"
                                style="position: relative; top: -4px;"
                                >Shola Den</span
                              >
                            </td>
                            <td class="">31 years</td>
                            <td class="">Fair</td>
                            <td class="">Yoruba</td>
                            <td class="">christian</td>
                            <td>
                              <button
                                class="btn btn-sm bg-brand-green onwhite "
                              >
                                Add Donor
                              </button>
                            </td>
                          </tr>
                          <tr class="tr--lnk">
                            <td>
                              <span class="avatar avatar-blue">OT</span
                              ><span
                                class=" fs-14"
                                style="position: relative; top: -4px;"
                                >Onayemi Temitope</span
                              >
                            </td>
                            <td class="">21 years</td>
                            <td class="">Fair</td>
                            <td class="">Yoruba</td>
                            <td class="">christian</td>
                            <td>
                              <button
                                class="btn btn-sm bg-brand-green onwhite "
                              >
                                Add Donor
                              </button>
                            </td>
                          </tr>
                          <tr class="tr--lnk">
                            <td>
                              <span class="avatar avatar-blue">TE</span
                              ><span
                                class=" fs-14"
                                style="position: relative; top: -4px;"
                                >Tina Ehiaze</span
                              >
                            </td>
                            <td class="">30 years</td>
                            <td class="">Medium</td>
                            <td class="">Esan</td>
                            <td class="">christian</td>
                            <td>
                              <button
                                class="btn btn-sm bg-brand-green onwhite "
                              >
                                Add Donor
                              </button>
                            </td>
                          </tr>
                          <tr class="tr--lnk">
                            <td>
                              <span class="avatar avatar-blue">GS</span
                              ><span
                                class=" fs-14"
                                style="position: relative; top: -4px;"
                                >Grace Sadiku</span
                              >
                            </td>
                            <td class="">26 years</td>
                            <td class="">Dark</td>
                            <td class="">Yoruba</td>
                            <td class="">christian</td>
                            <td>
                              <button
                                class="btn btn-sm bg-brand-green onwhite "
                              >
                                Add Donor
                              </button>
                            </td>
                          </tr>
                          <tr class="tr--lnk">
                            <td>
                              <span class="avatar avatar-blue">OB</span
                              ><span
                                class=" fs-14"
                                style="position: relative; top: -4px;"
                                >Oluwaseun Banjo</span
                              >
                            </td>
                            <td class="">23 years</td>
                            <td class="">Dark</td>
                            <td class="">Yoruba</td>
                            <td class="">christian</td>
                            <td>
                              <button
                                class="btn btn-sm bg-brand-green onwhite "
                              >
                                Add Donor
                              </button>
                            </td>
                          </tr>
                          <tr class="tr--lnk">
                            <td>
                              <span class="avatar avatar-blue">OB</span
                              ><span
                                class=" fs-14"
                                style="position: relative; top: -4px;"
                                >Omowunmi Bamidele</span
                              >
                            </td>
                            <td class="">27 years</td>
                            <td class="">Dark</td>
                            <td class="">Yoruba</td>
                            <td class="">christian</td>
                            <td>
                              <button
                                class="btn btn-sm bg-brand-green onwhite "
                              >
                                Add Donor
                              </button>
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
                      ><button class="fs-14">
                        <i class="fas fa-chevron-right onwhite"></i>
                      </button>
                    </div>
                    <div class="ui-card-footer-options">
                      <p class="onmineshaft mb-0  fs-14">
                        Showing 1 of 6 pages
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
.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
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

@media screen and (max-width: 768px) {
  .ui-dashboard-body.sdbr--open {
    padding-left: 0px;
  }

  .frm--card .ctrl--fnd {
    width: 100%;
    margin-bottom: 1rem;
  }

  .ui-dashboard-card-header {
    display: block;
  }

  .avatar,
  .avatar-blue {
    display: none !important;
  }
}
</style>
