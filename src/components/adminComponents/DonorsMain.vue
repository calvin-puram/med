<template>
  <BaseWrapper
    dashboardName="Donors"
    :menuIcons="menuIcons"
    :toogleMenu="toogleMenu"
    bg__img="bg__img"
    bg__color="primary-color"
  >
    <section class="mt-2">
      <div class="ui-dashboard-card">
        <div class="ui-dashboard-card-header">
          <div>
            <form class="d-flex align-items-center frm--card">
              <input
                type="text"
                placeholder="Find a donor by name, phone,"
                class=" form-control ctrl--fnd"
                id="searchRef"
              />
            </form>
          </div>
          <div class="ui-card-header-options">
            <div class="ui-group-button d-flex align-items-center">
              <div class="mt-3 mt-sm-0">
                <router-link
                  class="btn btn--sm bg-brand-green onwhite  req"
                  to="/provider/donors/add"
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
                    Donor
                  </th>
                  <th class=" pb-1 ui-capitalize fs-14">
                    Age
                  </th>
                  <th class=" pb-1 ui-capitalize fs-14">
                    Phone number
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
                    <span class="avatar avatar-blue">JJ</span
                    ><span
                      class=" fs-14"
                      style="position: relative; top: -4px; margin-left: 6px;"
                      >john james</span
                    >
                  </td>
                  <td class="">20 years</td>
                  <td class="">08076567665</td>
                  <td class="">Olive</td>
                  <td class="">Hausa</td>
                  <td class="">christian</td>
                  <td>
                    <router-link
                      href="/provider/donors/details/603f901f5c0f69001120aa72"
                      ><img
                        src="@/assets/img/addusertodonor.svg"
                        alt="Details Icon"
                    /></router-link>
                  </td>
                </tr>
                <tr class="tr--lnk">
                  <td>
                    <span class="avatar avatar-blue">CJ</span
                    ><span
                      class=" fs-14"
                      style="position: relative; top: -4px; margin-left: 6px;"
                      >calvin james</span
                    >
                  </td>
                  <td class="">20 years</td>
                  <td class="">09087656765</td>
                  <td class="">Medium Brown</td>
                  <td class="">Hausa</td>
                  <td class="">christian</td>
                  <td>
                    <router-link
                      href="/provider/donors/details/603f901f5c0f69001120aa72"
                      ><img
                        src="@/assets/img/addusertodonor.svg"
                        alt="Details Icon"
                    /></router-link>
                  </td>
                </tr>
                <tr class="tr--lnk">
                  <td>
                    <span class="avatar avatar-blue">OI</span
                    ><span
                      class=" fs-14"
                      style="position: relative; top: -4px; margin-left: 6px;"
                      >Oluwatobi Immanuel</span
                    >
                  </td>
                  <td class="">29 years</td>
                  <td class="">08137031202</td>
                  <td class="">Dark Brown</td>
                  <td class="">Yoruba</td>
                  <td class="">christian</td>
                  <td>
                    <router-link
                      href="/provider/donors/details/603f901f5c0f69001120aa72"
                      ><img
                        src="@/assets/img/addusertodonor.svg"
                        alt="Details Icon"
                    /></router-link>
                  </td>
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
  </BaseWrapper>
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

<style lang="scss" scoped></style>
