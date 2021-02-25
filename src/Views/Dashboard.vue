<template>
  <div class="dashboard">
    <section class="ui-sidebar ssbar--open">
      <div class="ui-sidebar-primary ssbar--open">
        <div class="ui-sidebar-primary-header ui-text-center">
          <a class="ui-sidebar-primary-logo" href="/clinic/profile"
            ><img
              src="https://dms.medbarnagency.com/images/assets/icon@logo-c.svg"
              alt="Logo"
              style="width: 80px; height: 80px;"
            />
            <p class="brand-dblue font-quicksandsemibold fs-15 mrgt1 mrgb0">
              metro
            </p>
            <span class="font-quicksandmedium brand-green">Profile</span></a
          >
          <div class="pdr1 d-sm-none">
            <div class="hmb--btn but1">
              <span class="fe fe-menu fs-20 onsilverlight ui-hide-mobile-only"
                ><i class="fas fa-bars"></i
              ></span>
            </div>
            <div class="hmm--btn but2">
              <span
                class="fe fe-menu fs-20 brand-lendlot-blue ui-show-mobile-only"
                ><i class="fas fa-bars"></i
              ></span>
            </div>
          </div>
        </div>
        <div class="ui-sidebar-primary-body">
          <ul class="ui-sidebar-primary-links">
            <li>
              <a
                aria-current="page"
                class="ui-icon-animate side-active"
                title="Home"
                href="/clinic/home"
                ><img
                  src="https://dms.medbarnagency.com/images/assets/icon@home.svg"
                  alt="home"
                /><span
                  class="lnk--text brand-dblue font-quicksandsemibold fs-16"
                  >Home</span
                ></a
              >
            </li>
            <li>
              <a
                class="ui-icon-animate"
                title="Requests"
                href="/clinic/requests"
                style="padding-top: 15px; padding-bottom: 15px;"
                ><img
                  src="https://dms.medbarnagency.com/images/assets/requests.svg"
                  alt="requests"
                  style="width: 20px; margin-right: 13px; margin-left: 13px;"
                /><span
                  class="lnk--text brand-dblue font-quicksandsemibold fs-16"
                  >Requests</span
                ></a
              >
            </li>
            <li>
              <a class="ui-icon-animate" title="Visits" href="/clinic/donors"
                ><img
                  src="https://dms.medbarnagency.com/images/assets/icon@donor.svg"
                  alt="visits"
                /><span
                  class="lnk--text brand-dblue font-quicksandsemibold fs-16"
                  >Visits</span
                ></a
              >
            </li>
            <li>
              <a
                class="ui-icon-animate"
                title="Transactions"
                href="/clinic/transactions"
                ><img
                  src="https://dms.medbarnagency.com/images/assets/icon@card.svg"
                  alt="transactions"
                /><span
                  class="lnk--text brand-dblue font-quicksandsemibold fs-16"
                  >Transactions</span
                ></a
              >
            </li>
            <li>
              <a
                class="ui-icon-animate"
                title="Notifications"
                href="/clinic/notifications"
                ><img
                  src="https://dms.medbarnagency.com/images/assets/icon@bell.svg"
                  alt="notifications"
                /><span
                  class="lnk--text brand-dblue font-quicksandsemibold fs-16"
                  >Notifications</span
                ><span
                  class="lnk--text brand-orange ui-pull-right font-quicksandsemibold fs-14"
                  >0</span
                ></a
              >
            </li>
            <li>
              <a class="ui-icon-animate" title="Users" href="/clinic/users"
                ><img
                  src="https://dms.medbarnagency.com/images/assets/icon@user.svg"
                  alt="users"
                /><span class="lnk--text brand-dblue  fs-16">Users</span></a
              >
            </li>
            <li style="cursor: pointer;">
              <button
                class="ui-icon-animate btn-link"
                title="Logout"
                style="border: none; width: 100%; text-align: left; outline: none; padding: 0.45rem 1rem;"
              >
                <img
                  src="https://dms.medbarnagency.com/images/assets/logout.png"
                  alt="logout"
                  style="height: 30px; width: 30px; margin-left: 8px; margin-right: 7px;"
                /><span class="lnk--text brand-dblue  fs-16">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <main class="ui-dashboard-body sdbr--open">
      <div>
        <div>
          <div class="body">
            <div class="ui-topbar">
              <div class="ui-topbar-inner">
                <div class="d-flex align-items-center">
                  <div class="pdr1">
                    <div class="hmb--btn but1">
                      <i
                        class="fas fa-bars mr-5 onsilverlight fs-20 ui-hide-mobile-only"
                      ></i>
                    </div>
                  </div>
                  <div>
                    <p class="mb-0">
                      <button class="d-sm-none mr-4">
                        <span
                          class="fe fe-menu fs-20 onsilverlight"
                        ></span></button
                      ><span
                        class="mb-0 font-quicksandsemibold brand-dblue fs-20"
                        >Dashboard</span
                      ><span class="font-quicksandlight onsilverlight fs-20"
                        >&nbsp;&nbsp; | &nbsp;&nbsp;</span
                      >
                    </p>
                  </div>
                  <div class="ui-topbar-options"></div>
                </div>
              </div>
            </div>
            <section class="ui-body-content">
              <div class="ui-body-content-inner">
                <div class="ui-separate"></div>
                <div class="row spec--bx">
                  <div class="col-md-8 text-right">
                    <button
                      class="btn onwhite font-quicksandmedium"
                      style="background-color: rgb(247, 105, 72); border-color: rgb(247, 105, 72);"
                    >
                      Search all donors
                    </button>
                  </div>
                  <div class="col-6 col-md-2 text-right">
                    <button
                      class="btn btn-block bg-brand-green onwhite font-quicksandmedium mb-4"
                    >
                      Add User
                    </button>
                  </div>
                  <div class="col-6 col-md-2 text-right">
                    <button
                      class="btn btn-block btn--xs bg-brand-alblue onwhite font-quicksandmedium"
                    >
                      Messages
                    </button>
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
        <footer
          class="text-right"
          style="padding-top: 30px; padding-bottom: 30px; padding-right: 40px;"
        >
          <a
            href="mailto: info@medbarnagency.com"
            style="color: rgb(5, 219, 169); font-size: 18px;"
            ><img
              alt="..."
              src="https://dms.medbarnagency.com/images/assets/tech-support.png"
              style="width: 30px; height: 30px; margin-right: 10px;"
            />Contact Provider</a
          >
        </footer>
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../design/";
.text__h5 {
  color: rgb(51, 66, 97);
}

.onsilverlight {
  color: #7cafa0;
}
</style>
