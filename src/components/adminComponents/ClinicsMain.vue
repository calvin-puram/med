<template>
  <BaseWrapper
    dashboardName="Clinics"
    :menuIcons="menuIcons"
    :toogleMenu="toogleMenu"
    bg__img="bg__img"
    bg__color="primary-color"
    profile="/provider/profile"
    notification="/provider/notifications"
  >
    <section class="mt-2">
      <div class="ui-dashboard-card">
        <div class="">
          <div
            class="d-flex align-items-center justify-content-between form-wrapper my-4 mx-4"
          >
            <form class=" frm--card form-search">
              <input
                type="text"
                placeholder="Find a clinic by name, email, phone, state, etc"
                class=" form-control ctrl--fnd"
                id="searchRef"
              />
            </form>

            <router-link
              class="btn btn--sm btn-color form-seperator onwhite align-self-center  req"
              to="/provider/clinics/add"
              >Add New</router-link
            >
          </div>
        </div>
        <div class="ui-dashboard-card-body">
          <div class="table-responsive ">
            <table class="table">
              <thead>
                <tr>
                  <th class=" ui-capitalize fs-14">
                    Clinic name
                  </th>
                  <th class=" pb-1 ui-capitalize fs-14">
                    Email
                  </th>
                  <th class=" pb-1 ui-capitalize fs-14">
                    Phone number
                  </th>
                  <th class=" pb-1 ui-capitalize fs-14">
                    Address
                  </th>
                  <th class="pb-1"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="tr--lnk">
                  <td class="">VIVA Clinic</td>
                  <td class="">
                    angelam@thebridgeclinic.com
                  </td>
                  <td class="">08104607746</td>
                  <td class="">
                    63, ODUDUWA CRESCENT, GRA, IKEJA, LAGOS
                  </td>
                  <td>
                    <router-link
                      to="/provider/clinics/details/603bd6b95c0f69001120aa0c"
                    >
                      <img
                        src="@/assets/img/addusertodonor.svg"
                        alt="Details Icon"
                    /></router-link>
                  </td>
                </tr>
                <tr class="tr--lnk">
                  <td class="">ohealth</td>
                  <td class="">
                    calvin@ohealth.com
                  </td>
                  <td class="">09056476765</td>
                  <td class="">cpuram1@gmail.com</td>
                  <td>
                    <router-link
                      to="/provider/clinics/details/603bd6b95c0f69001120aa0c"
                    >
                      <img
                        src="@/assets/img/addusertodonor.svg"
                        alt="Details Icon"
                    /></router-link>
                  </td>
                </tr>
                <tr class="tr--lnk">
                  <td class="">metro</td>
                  <td class="">cal@metro.com</td>
                  <td class="">09067549876</td>
                  <td class="">2, ada</td>
                  <td>
                    <router-link
                      to="/provider/clinics/details/603bd6b95c0f69001120aa0c"
                    >
                      <img
                        src="@/assets/img/addusertodonor.svg"
                        alt="Details Icon"
                    /></router-link>
                  </td>
                </tr>
                <tr class="tr--lnk">
                  <td class="">healty</td>
                  <td class="">heaty@gmail.com</td>
                  <td class="">09087776677</td>
                  <td class="">puram@gmail.com</td>
                  <td>
                    <router-link
                      to="/provider/clinics/details/603bd6b95c0f69001120aa0c"
                    >
                      <img
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

<style lang="scss" scoped>
.form--seperator {
  flex: 1;
}

.form-search {
  flex: 5;
}

@media screen and (max-width: 768px) {
  .form-wrapper {
    flex-direction: column;
  }

  .btn {
    width: 30% !important;
    margin: 1rem auto;
  }
}
</style>
