]<template>
  <section class="ui-sidebar ssbar--open ">
    <div class="ui-sidebar-primary ssbar--open">
      <div class="ui-sidebar-primary-header ui-text-center">
        <div class="mobileHambuger" @click="toogleMenu">
          <i class="fas fa-bars  onsilverlight fs-20 mt-2  "></i>
        </div>
        <router-link
          @click="toogleMenu"
          to="/clinic/profile"
          class="ui-sidebar-primary-logo"
          ><img
            src="https://dms.medbarnagency.com/images/assets/icon@logo-c.svg"
            alt="Logo"
          />
          <p class="brand-dblue  fs-15 mt-1 mb-0">
            metro
          </p>
          <span class=" brand-green">Profile</span></router-link
        >
      </div>
      <div class="ui-sidebar-primary-body ">
        <ul class="ui-sidebar-primary-links">
          <li @click="toogleMenu">
            <router-link :to="home" class="ui-icon-animate side-active">
              <img
                src="https://dms.medbarnagency.com/images/assets/icon@home.svg"
                alt="home"
              /><span class="lnk--text brand-dblue  fs-16">Home</span>
            </router-link>
          </li>
          <li @click="toogleMenu">
            <router-link
              class="ui-icon-animate"
              title="Requests"
              to="/clinic/requests"
              ><img
                src="https://dms.medbarnagency.com/images/assets/requests.svg"
                alt="requests"
                style="width: 20px; margin-right: 13px; margin-left: 13px;"
              /><span class="lnk--text brand-dblue  fs-16"
                >Requests</span
              ></router-link
            >
          </li>
          <li @click="toogleMenu">
            <router-link
              class="ui-icon-animate"
              title="Visits"
              to="/clinic/donors"
              ><img
                src="https://dms.medbarnagency.com/images/assets/icon@donor.svg"
                alt="visits"
              /><span class="lnk--text brand-dblue  fs-16"
                >Visits</span
              ></router-link
            >
          </li>
          <li @click="toogleMenu">
            <router-link
              class="ui-icon-animate"
              title="Transactions"
              to="/clinic/transactions"
              ><img
                src="https://dms.medbarnagency.com/images/assets/icon@card.svg"
                alt="transactions"
              /><span class="lnk--text brand-dblue  fs-16"
                >Transactions</span
              ></router-link
            >
          </li>
          <li @click="toogleMenu">
            <router-link
              class="ui-icon-animate"
              title="Notifications"
              to="/clinic/notifications"
              ><img
                src="https://dms.medbarnagency.com/images/assets/icon@bell.svg"
                alt="notifications"
              /><span class="lnk--text brand-dblue  fs-16">Notifications</span
              ><span class="lnk--text brand-orange ui-pull-right ml-3  fs-14"
                >0</span
              ></router-link
            >
          </li>
          <li>
            <router-link
              class="ui-icon-animate"
              title="Users"
              to="/clinic/users"
              ><img
                src="https://dms.medbarnagency.com/images/assets/icon@user.svg"
                alt="users"
              /><span class="lnk--text brand-dblue  fs-16"
                >Users</span
              ></router-link
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
</template>
<script>
export default {
  props: {
    home: {
      type: String,
      required: false,
    },
    toogleMenu: {
      type: Function,
      required: true,
    },
  },
};
</script>
<style lang="scss">
@import "../../design/";
.mobileHambuger {
  position: relative;
  top: 0;
  right: 0;
  text-align: end;
}
@media screen and (max-width: 1024px) {
  .ui-sidebar-primary-body {
    top: 190px;
    height: 100%;
  }
}

@media (max-width: 789px) {
  .ui-sidebar {
    margin-left: 65px;
    text-align: auto;
    width: 220px !important;
  }

  .ui-sidebar-primary-body {
    height: 700% !important;
  }
}
</style>
