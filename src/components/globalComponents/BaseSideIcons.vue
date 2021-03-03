]<template>
  <section class="ui-sidebar  sdbr--cllps">
    <div class=" ui-sidebar-primary1">
      <div class="ui-sidebar-primary-header ui-text-center">
        <!-- check for profile -->
        <router-link
          v-if="showProfile === 'agent'"
          to="/agent/profile"
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
          to="/donr/profile"
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
        <router-link v-else to="/clinic/profile" class="ui-sidebar-primary-logo"
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
        <div class="pr-1 d-sm-none">
          <div class="hmb--btn but1">
            <span class=" fs-20 onsilverlight ui-hide-mobile-only"
              ><i class="fas fa-bars"></i
            ></span>
          </div>
          <div class="hmm--btn but2">
            <span class=" fs-20 brand-lendlot-blue ui-show-mobile-only"
              ><i class="fas fa-bars"></i
            ></span>
          </div>
        </div>
      </div>
      <div class="ui-sidebar-primary-body">
        <ul
          class="ui-sidebar-primary-links"
          v-for="Icons in sidebarIcons"
          :key="Icons.title"
        >
          <li v-if="Icons.title === 'Home'">
            <router-link
              :to="Icons.to"
              class="ui-icon-animate side-active"
              title="Home"
            >
              <img
                src="https://dms.medbarnagency.com/images/assets/icon@home.svg"
                alt="home"
              />
            </router-link>
          </li>
          <!-- start agent -->
          <li v-if="Icons.title === 'Donors'">
            <router-link
              :to="Icons.to"
              class="ui-icon-animate side-active"
              title="Home"
            >
              <img
                src="https://dms.medbarnagency.com/images/assets/icon@donor.svg"
                alt="home"
              />
            </router-link>
          </li>
          <li v-if="Icons.title === 'AgentNoti'">
            <router-link
              :to="Icons.to"
              class="ui-icon-animate "
              title="Notifications"
            >
              <img
                src="https://dms.medbarnagency.com/images/assets/icon@bell.svg"
                alt="home"
              />
            </router-link>
          </li>
          <!-- end agent -->
          <li v-if="Icons.title === 'Requests'">
            <router-link
              :to="Icons.to"
              class="ui-icon-animate "
              title="Request"
            >
              <img
                src="https://dms.medbarnagency.com/images/assets/requests.svg"
                alt="message icon"
                width="26px"
                height="26px"
              />
            </router-link>
          </li>
          <li v-if="Icons.title === 'Visits'">
            <router-link :to="Icons.to" class="ui-icon-animate " title="Donors">
              <img
                src="https://dms.medbarnagency.com/images/assets/icon@donor.svg"
                alt="donors"
              />
            </router-link>
          </li>
          <li v-if="Icons.title === 'Transactions'">
            <router-link
              :to="Icons.to"
              class="ui-icon-animate "
              title="Transactions"
            >
              <img
                src="https://dms.medbarnagency.com/images/assets/icon@card.svg"
                alt="transactions"
              />
            </router-link>
          </li>
          <li v-if="Icons.title === 'Notifications'">
            <router-link
              :to="Icons.to"
              class="ui-icon-animate "
              title="Notifications"
            >
              <img
                src="https://dms.medbarnagency.com/images/assets/icon@bell.svg"
                alt="notifications"
              />
            </router-link>
          </li>
          <li v-if="Icons.title === 'Users'">
            <router-link :to="Icons.to" class="ui-icon-animate " title="Users">
              <img
                src="https://dms.medbarnagency.com/images/assets/icon@user.svg"
                alt="users"
              />
            </router-link>
          </li>
          <li style="cursor: pointer;" v-if="Icons.title === 'Logout'">
            <button
              class="ui-icon-animate btn-link"
              title="Logout"
              style="border: none; width: 100%; text-align: center; outline: none; padding: 0.45rem 1rem;"
            >
              <img
                src="https://dms.medbarnagency.com/images/assets/logout.png"
                alt="logout"
                style="height: 30px; width: 30px; margin-left: 8px; margin-right: 7px;"
              />
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
    showProfile: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../design/";
.ui-sidebar-primary {
  position: relative;
  display: inline-block;
  width: 100% !important;
  height: 100%;
  vertical-align: top;
  background-color: #ffffff;
  z-index: 1;
}

.ui-sidebar-primary-body {
  width: 100%;
  display: block;
  padding-top: 2.85rem;
  position: absolute;
  bottom: 10px;
  top: 190px;
  overflow: scroll;
  height: 500px;
}
</style>
