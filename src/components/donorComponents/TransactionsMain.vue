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

              <section class="mrgt2">
                <div class="ui-dashboard-card">
                  <div class="ui-dashboard-card-header">
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
                            <th></th>
                            <th class=" pb-1 ui-capitalize fs-14">
                              Date
                            </th>
                            <th class=" pb-1 ui-capitalize fs-14">
                              Amount
                            </th>
                            <th class=" pb-1 ui-capitalize fs-14">
                              Description
                            </th>
                            <th class=" pb-1 ui-capitalize fs-14">
                              status
                            </th>
                            <th class=" pb-1 ui-capitalize fs-14">
                              Previous Balance
                            </th>
                            <th class=" pb-1 ui-capitalize fs-14">
                              New Balance
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="tr--lnk">
                            <td>
                              <label class="custom-control custom-checkbox"
                                ><input
                                  type="checkbox"
                                  class="custom-control-input"
                                  name="example-inline-checkbox1"
                                  value="option1"/><span
                                  class="custom-control-label "
                                ></span
                              ></label>
                            </td>
                            <td class="font-quicksandregular">23 Sep, 2019</td>
                            <td class="font-quicksandregular">0</td>
                            <td class="font-quicksandregular">
                              Cashback for purchase 80423
                            </td>
                            <td class="font-quicksandregular">completed</td>
                            <td class="font-quicksandregular">2350</td>
                            <td class="font-quicksandregular">2350</td>
                          </tr>
                          <tr class="tr--lnk">
                            <td>
                              <label class="custom-control custom-checkbox"
                                ><input
                                  type="checkbox"
                                  class="custom-control-input"
                                  name="example-inline-checkbox1"
                                  value="option1"/><span
                                  class="custom-control-label "
                                ></span
                              ></label>
                            </td>
                            <td class="font-quicksandregular">23 Sep, 2019</td>
                            <td class="font-quicksandregular">-950</td>
                            <td class="font-quicksandregular">
                              NGN950 - Donor IVF -
                              GDMS-BVN_VERIFICATION_FEE675662407/22283634758/1600891581778
                            </td>
                            <td class="font-quicksandregular">completed</td>
                            <td class="font-quicksandregular">3300</td>
                            <td class="font-quicksandregular">2350</td>
                          </tr>
                          <tr class="tr--lnk">
                            <td>
                              <label class="custom-control custom-checkbox"
                                ><input
                                  type="checkbox"
                                  class="custom-control-input"
                                  name="example-inline-checkbox1"
                                  value="option1"/><span
                                  class="custom-control-label "
                                ></span
                              ></label>
                            </td>
                            <td class="font-quicksandregular">23 Sep, 2019</td>
                            <td class="font-quicksandregular">0</td>
                            <td class="font-quicksandregular">
                              Cashback for purchase 80422
                            </td>
                            <td class="font-quicksandregular">completed</td>
                            <td class="font-quicksandregular">3300</td>
                            <td class="font-quicksandregular">3300</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="ui-dashboard-card-footer">
                    <div class="ui-group-button npv--btn">
                      <button disabled="" class="fs-14">
                        <i class="fas fa-chevron-left onwhite"></i></button
                      ><button disabled="" class="fs-14">
                        <i class="fas fa-chevron-right onwhite"></i>
                      </button>
                    </div>
                    <div class="ui-card-footer-options">
                      <p class="onmineshaft mb-0  fs-14">
                        Showing 1 0f 1 pages
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
