<template>
  <div class="ui-topbar ">
    <div class="ui-topbar-inner">
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <div class="mobileHambuger mr-3 d-none" @click="toogleMenu">
            <img
              src="@/assets/img/bar.svg"
              alt="mobile hamburger"
              width="20px"
              height="20px"
            />
          </div>
          <p class="mb-0">
            <span class="normal-text-bold font-weight-bold fs-20">{{
              title
            }}</span>
          </p>
        </div>
        <div>
          <ul class="ui-topbar-options mb-0">
            <li><img src="@/assets/img/search.svg" alt="search" /></li>
            <li class="ui-notification">
              <router-link :to="notification">
                <img
                  src="@/assets/img/notice-active.svg"
                  alt="bell icon"
                  width="25px"
                />
                <span class="ui-noty">2</span>
              </router-link>
            </li>
            <li class="profile">
              <router-link :to="profile">
                <div class="d-flex align-items-center">
                  <div class="ui-profile-name ">
                    <p class="normal-text-bold font-weight-bold m-0 fs-12">
                      Abdulbaki
                    </p>
                    <p class="normal-text m-0 fs-12">Donor</p>
                  </div>
                  <img
                    src="@/assets/img/user-4.jpg"
                    alt="Avatar"
                    class="ui-avatar-profile"
                  />
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      required: false,
    },
    meniIcons: {
      type: Boolean,
      required: false,
    },
    toogleMenu: {
      type: Function,
      required: true,
    },
    profile: {
      type: String,
      required: true,
    },
    notification: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.click {
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .mobileHambuger {
    display: flex !important;
  }

  .ui-notification,
  .profile {
    display: none;
  }
}
</style>
