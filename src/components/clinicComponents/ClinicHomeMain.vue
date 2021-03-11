<template>
  <BaseWrapperWithDashboardTabs
    dashboardName="Dashboard"
    :menuIcons="menuIcons"
    :toogleMenu="toogleMenu"
    :tabsData="tabsData"
    profile="/clinic/profile"
    notification="/clinic/notifications"
  >
    <div class="row">
      <div class="col-md-6">
        <div class="ui-dashboard-card">
          <div class="ui-dashboard-card-body ui-full-bg-norm1 ui-rounded-small">
            <h2 class=" brand-alblue fs-24 mrgt1">
              Balance
            </h2>
            <h1 class=" fs-40">0</h1>
            <div>
              <p class=" mb-0">
                Bank: You have no bank yet
              </p>
              <p class="">
                Acct Number: You have no account number yet <br />
                <small
                  >Transfer money to this account number to fund your
                  account.</small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="ui-dashboard-card">
          <div class="ui-dashboard-card-body ui-full-bg-norm ui-rounded-small">
            <h2 class=" brand-alblue fs-24 mrgt1">
              Total Donors
            </h2>
            <h1 class=" fs-40">0</h1>
            <div>
              <p class=" mrgb0">
                0 Male / 0 Female
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ui card -->
    <section class="mt-2">
      <div class="ui-dashboard-card">
        <div class="ui-dashboard-card-header">
          <h1 class="ui-card-title brand-dblue ">
            0 new visits
          </h1>
          <div class="ui-card-header-options">
            <div>
              <form class="d-flex align-items-center frm--card">
                <input
                  type="text"
                  placeholder="Find by name"
                  class="font-quicksandregular form-control ctrl--fnd"
                  id="searchRef"
                />
              </form>
            </div>
          </div>
        </div>
        <div class="ui-dashboard-card-body">
          <h5 class="text-center text__h5">
            You don't have any visit yet
          </h5>
        </div>
      </div>
    </section>
  </BaseWrapperWithDashboardTabs>
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
  data() {
    return {
      tabsData: [
        {
          id: 1,
          color: "rgb(247, 105, 72)",
          text: "Search all donors",
          link: "/clinic/full-search",
        },
        {
          id: 2,
          color: " #06dca9",
          text: "Add User",
          link: "/clinic/add-user",
        },
        {
          id: 3,
          color: " #082c77",
          text: "Messages",
          link: "/clinic/tips",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../design";

.ui-full-bg-norm {
  @include ui-full-bg-norm("../../assets/img/clinicHome.svg");
}
.ui-full-bg-norm1 {
  @include ui-full-bg-norm("../../assets/img/clinicHome1.svg");
}

@media screen and (max-width: 768px) {
  .ui-dashboard-card-header {
    display: block !important;
    .ui-card-title {
      margin-bottom: 1rem !important;
    }
  }
}
</style>
