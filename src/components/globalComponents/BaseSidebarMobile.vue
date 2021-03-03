]<template>
  <section class="ui-sidebar ssbar--open ">
    <div class="ui-sidebar-primary ssbar--open">
      <div class="ui-sidebar-primary-header ui-text-center">
        <div class="mobileHambuger" @click="toogleMenu">
          <i class="fas fa-bars  onsilverlight fs-20 mt-2  "></i>
        </div>
        <!-- check for profile -->
        <router-link
          v-if="showProfile === 'agent'"
          to="/agent/profile"
          @click="toogleMenu"
          class="ui-sidebar-primary-logo"
          ><img
            src="https://dms.medbarnagency.com/images/assets/icon@logo-c.svg"
            alt="Logo"
            width="50px"
          />
          <p class="brand-dblue  fs-15 mt-1 mb-0">
            James Mark
          </p>
        </router-link>
        <router-link
          v-else-if="showProfile === 'donor'"
          @click="toogleMenu"
          to="/donor/profile"
          class="ui-sidebar-primary-logo"
          ><img
            src="https://dms.medbarnagency.com/images/assets/icon@logo-c.svg"
            alt="Logo"
            width="50px"
          />
          <p class="brand-dblue  fs-15 mt-1 mb-0">
            James Mark
          </p>
        </router-link>
        <router-link
          v-else
          to="/clinic/profile"
          @click="toogleMenu"
          class="ui-sidebar-primary-logo"
          ><img
            src="https://dms.medbarnagency.com/images/assets/icon@logo-c.svg"
            alt="Logo"
            width="50px"
          />
          <p class="brand-dblue  fs-15 mt-1 mb-0">
            metro
          </p>
          <span class=" brand-green">Profile</span></router-link
        >
        <!-- end check for profile -->
      </div>
      <div class="ui-sidebar-primary-body ">
        <ul
          class="ui-sidebar-primary-links"
          v-for="Icons in sidebarIcons"
          :key="Icons.title"
        >
          <li @click="toogleMenu" v-if="Icons.title === 'Home'">
            <router-link :to="Icons.to" class="ui-icon-animate side-active">
              <img
                src="https://dms.medbarnagency.com/images/assets/icon@home.svg"
                alt="home"
              /><span class="lnk--text brand-dblue  fs-16">Home</span>
            </router-link>
          </li>
          <!-- agent -->
          <li @click="toogleMenu" v-if="Icons.title === 'Donors'">
            <router-link :to="Icons.to" class="ui-icon-animate side-active">
              <img
                src="https://dms.medbarnagency.com/images/assets/icon@donor.svg"
                alt="home"
              /><span class="lnk--text brand-dblue  fs-16">Donors</span>
            </router-link>
          </li>
          <li @click="toogleMenu" v-if="Icons.title === 'AgentNoti'">
            <router-link :to="Icons.to" class="ui-icon-animate side-active">
              <img
                src="https://dms.medbarnagency.com/images/assets/icon@bell.svg"
                alt="home"
              /><span class="lnk--text brand-dblue  fs-16">Notifications</span
              ><span class="lnk--text brand-orange ui-pull-right ml-3  fs-14"
                >1</span
              >
            </router-link>
          </li>
          <!-- end agent -->
          <li @click="toogleMenu" v-if="Icons.title === 'Requests'">
            <router-link class="ui-icon-animate" title="Requests" :to="Icons.to"
              ><img
                src="https://dms.medbarnagency.com/images/assets/requests.svg"
                alt="requests"
                style="width: 20px; margin-right: 13px; margin-left: 13px;"
              /><span class="lnk--text brand-dblue  fs-16"
                >Requests</span
              ></router-link
            >
          </li>
          <li @click="toogleMenu" v-if="Icons.title === 'Visits'">
            <router-link class="ui-icon-animate" title="Visits" :to="Icons.to"
              ><img
                src="https://dms.medbarnagency.com/images/assets/icon@donor.svg"
                alt="visits"
              /><span class="lnk--text brand-dblue  fs-16"
                >Visits</span
              ></router-link
            >
          </li>
          <li @click="toogleMenu" v-if="Icons.title === 'Transactions'">
            <router-link
              class="ui-icon-animate"
              title="Transactions"
              :to="Icons.to"
              ><img
                src="https://dms.medbarnagency.com/images/assets/icon@card.svg"
                alt="transactions"
              /><span class="lnk--text brand-dblue  fs-16"
                >Transactions</span
              ></router-link
            >
          </li>
          <li @click="toogleMenu" v-if="Icons.title === 'Notifications'">
            <router-link
              class="ui-icon-animate"
              title="Notifications"
              :to="Icons.to"
              ><img
                src="https://dms.medbarnagency.com/images/assets/icon@bell.svg"
                alt="notifications"
              /><span class="lnk--text brand-dblue  fs-16">Notifications</span
              ><span class="lnk--text brand-orange ui-pull-right ml-3  fs-14"
                >1</span
              ></router-link
            >
          </li>
          <li v-if="Icons.title === 'Users'">
            <router-link class="ui-icon-animate" title="Users" :to="Icons.to"
              ><img
                src="https://dms.medbarnagency.com/images/assets/icon@user.svg"
                alt="users"
              /><span class="lnk--text brand-dblue  fs-16"
                >Users</span
              ></router-link
            >
          </li>
          <li style="cursor: pointer;" v-if="Icons.title === 'Logout'">
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
    sidebarIcons: {
      type: Array,
      required: true,
    },
    toogleMenu: {
      type: Function,
      required: true,
    },
    showProfile: {
      type: String,
      required: false,
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
