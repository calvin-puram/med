<template>
  <div class="dashboard">
    <Sidebar home="/clinic/home" v-if="!menuIcons" />
    <SideIcons home="/clinic/home" v-else class="d-md-none mobile" />
    <main v-if="menuIcons" class="ui-dashboard-body ">
      <div>
        <div>
          <div class="body">
            <DashboardNav
              title="Dashboard"
              :meniIcons="menuIcons"
              :toogleMenu="toogleMenu"
            />
            <section class="ui-body-content">
              <div class="ui-body-content-inner">
                <div class="ui-separate"></div>
                <div class="row spec--bx">
                  <div class="col-md-8 text-right">
                    <BaseDashboardTabs
                      color="rgb(247, 105, 72)"
                      text="Search all donors"
                      link="/clinic/full-search"
                    />
                  </div>
                  <div class="col-6 col-md-2 text-right">
                    <BaseDashboardTabs
                      color=" #06dca9"
                      text="Add User"
                      others="btn-block"
                      link="/clinic/add-user"
                    />
                  </div>
                  <div class="col-6 col-md-2 text-right">
                    <BaseDashboardTabs
                      color=" #082c77"
                      text="Messages"
                      others="btn-block"
                      link="/clinic/tips"
                    />
                  </div>
                  <div class="col-md-6">
                    <div class="ui-dashboard-card">
                      <div
                        class="ui-dashboard-card-body ui-full-bg-norm ui-rounded-small"
                        style='background-image: url("https://dms.medbarnagency.com/images/assets/img@bal-bg.svg");'
                      >
                        <h2
                          class="font-quicksandsemibold brand-alblue fs-24 mrgt1"
                        >
                          Balance
                        </h2>
                        <h1 class="font-quicksandsemibold fs-40">0</h1>
                        <div>
                          <p class="font-quicksandmedium mrgb0">
                            Bank: You have no bank yet
                          </p>
                          <p class="font-quicksandmedium">
                            Acct Number: You have no account number yet <br />
                            <small
                              >Transfer money to this account number to fund
                              your account.</small
                            >
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="ui-dashboard-card">
                      <div
                        class="ui-dashboard-card-body ui-full-bg-norm ui-rounded-small"
                        style='background-image: url("https://dms.medbarnagency.com/images/assets/img@don-bg.svg");'
                      >
                        <h2
                          class="font-quicksandsemibold brand-alblue fs-24 mrgt1"
                        >
                          Total Donors
                        </h2>
                        <h1 class="font-quicksandsemibold fs-40">0</h1>
                        <div>
                          <p class="font-quicksandmedium mrgb0">
                            0 Male / 0 Female
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- ui card -->
                <section class="mrgt2">
                  <div class="ui-dashboard-card">
                    <div class="ui-dashboard-card-header">
                      <h1
                        class="ui-card-title brand-dblue font-quicksandmedium"
                      >
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
              </div>
            </section>
          </div>
        </div>
        <!-- footer -->
        <DashboardFooter />
      </div>
    </main>
    <main v-else class="ui-dashboard-body sdbr--open">
      <div>
        <div>
          <div class="body">
            <DashboardNav
              title="Dashboard"
              :meniIcons="menuIcons"
              :toogleMenu="toogleMenu"
            />
            <section class="ui-body-content">
              <div class="ui-body-content-inner">
                <div class="ui-separate"></div>
                <div class="row spec--bx">
                  <div class="col-md-8 text-right">
                    <BaseDashboardTabs
                      color="rgb(247, 105, 72)"
                      text="Search all donors"
                      link="/clinic/full-search"
                    />
                  </div>
                  <div class="col-6 col-md-2 text-right">
                    <BaseDashboardTabs
                      color=" #06dca9"
                      text="Add User"
                      others="btn-block"
                      link="/clinic/add-user"
                    />
                  </div>
                  <div class="col-6 col-md-2 text-right">
                    <BaseDashboardTabs
                      color=" #082c77"
                      text="Messages"
                      others="btn-block"
                      link="/clinic/tips"
                    />
                  </div>
                  <div class="col-md-6">
                    <div class="ui-dashboard-card">
                      <div
                        class="ui-dashboard-card-body ui-full-bg-norm ui-rounded-small"
                        style='background-image: url("https://dms.medbarnagency.com/images/assets/img@bal-bg.svg");'
                      >
                        <h2
                          class="font-quicksandsemibold brand-alblue fs-24 mrgt1"
                        >
                          Balance
                        </h2>
                        <h1 class="font-quicksandsemibold fs-40">0</h1>
                        <div>
                          <p class="font-quicksandmedium mrgb0">
                            Bank: You have no bank yet
                          </p>
                          <p class="font-quicksandmedium">
                            Acct Number: You have no account number yet <br />
                            <small
                              >Transfer money to this account number to fund
                              your account.</small
                            >
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="ui-dashboard-card">
                      <div
                        class="ui-dashboard-card-body ui-full-bg-norm ui-rounded-small"
                        style='background-image: url("https://dms.medbarnagency.com/images/assets/img@don-bg.svg");'
                      >
                        <h2
                          class="font-quicksandsemibold brand-alblue fs-24 mrgt1"
                        >
                          Total Donors
                        </h2>
                        <h1 class="font-quicksandsemibold fs-40">0</h1>
                        <div>
                          <p class="font-quicksandmedium mrgb0">
                            0 Male / 0 Female
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- ui card -->
                <section class="mrgt2">
                  <div class="ui-dashboard-card">
                    <div class="ui-dashboard-card-header">
                      <h1
                        class="ui-card-title brand-dblue font-quicksandmedium"
                      >
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
              </div>
            </section>
          </div>
        </div>
        <!-- footer -->
        <DashboardFooter />
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import DashboardNav from "@/components/DashboardNav";
import DashboardFooter from "@/components/DashboardFooter";
import SideIcons from "@/components/SideIcons";
export default {
  components: {
    Sidebar,
    DashboardNav,
    DashboardFooter,
    SideIcons,
  },
  data() {
    return {
      menuIcons: false,
    };
  },
  methods: {
    toogleMenu() {
      this.menuIcons = !this.menuIcons;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../design/";
.body {
  background: #f5f8fd;
}
.text__h5 {
  color: rgb(51, 66, 97);
}

.onsilverlight {
  color: #7cafa0;
}

.sideWidth {
  padding-left: 0px;
}

@media (max-width: 600px) {
  .mobile {
    display: none;
  }
}
</style>
