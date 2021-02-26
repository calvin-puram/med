]<template>
  <section class="ui-sidebar  sdbr--cllps">
    <div class=" ui-sidebar-primary">
      <div class="ui-sidebar-primary-header ui-text-center">
        <router-link to="/clinic/profile" class="ui-sidebar-primary-logo"
          ><img
            src="https://dms.medbarnagency.com/images/assets/icon@logo-c.svg"
            alt="Logo"
          />
          <p class="brand-dblue  fs-15 mt-1 mb-0">
            metro
          </p>
          <span class=" brand-green">Profile</span></router-link
        >
        <div class="pdr1 d-sm-none">
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
        <ul class="ui-sidebar-primary-links">
          <li>
            <router-link :to="home" class="ui-icon-animate side-active">
              <img
                src="https://dms.medbarnagency.com/images/assets/icon@home.svg"
                alt="home"
              />
            </router-link>
          </li>
          <li>
            <router-link to="/clinic/requests" class="ui-icon-animate ">
              <img
                src="https://dms.medbarnagency.com/images/assets/requests.svg"
                alt="message icon"
                width="45px"
                height="45px"
              />
            </router-link>
          </li>
          <li>
            <router-link to="/clinic/donors" class="ui-icon-animate ">
              <img
                src="https://dms.medbarnagency.com/images/assets/icon@donor.svg"
                alt="donors"
              />
            </router-link>
          </li>
          <li>
            <router-link to="/clinic/transactions" class="ui-icon-animate ">
              <img
                src="https://dms.medbarnagency.com/images/assets/icon@card.svg"
                alt="transactions"
              />
            </router-link>
          </li>
          <li>
            <router-link to="/clinic/notifications" class="ui-icon-animate ">
              <img
                src="https://dms.medbarnagency.com/images/assets/icon@bell.svg"
                alt="notifications"
              />
            </router-link>
          </li>
          <li>
            <router-link to="/clinic/users" class="ui-icon-animate ">
              <img
                src="https://dms.medbarnagency.com/images/assets/icon@user.svg"
                alt="users"
              />
            </router-link>
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
    home: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss">
@import "../design/";
</style>
