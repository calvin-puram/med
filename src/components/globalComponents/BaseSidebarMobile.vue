]<template>
  <section class="ui-sidebar ssbar--open ">
    <div class="ui-sidebar-primary ssbar--open">
      <div class="ui-sidebar-primary-header ui-text-center">
        <div class="mobileHambuger" @click="toogleMenu">
          <i class="fas fa-bars  onsilverlight fs-20 mt-2  "></i>
        </div>
        <!-- check for profile -->
        <router-link :to="showProfile" class="ui-sidebar-primary-logo"
          ><img
            src="https://dms.medbarnagency.com/images/assets/icon@logo-c.svg"
            alt="Logo"
            width="50px"
          />
          <p class="brand-dblue  fs-15 mt-1 mb-0">
            metro
          </p>
          <span class=" brand-green" v-if="showProfile === '/clinic/profile'"
            >Profile</span
          ></router-link
        >
        <!-- end check for profile -->
      </div>
      <div class="ui-sidebar-primary-body ">
        <ul class="ui-sidebar-primary-links">
          <li
            @click="toogleMenu"
            v-for="Icons in sidebarIcons"
            :key="Icons.title"
          >
            <router-link :to="Icons.to" class="ui-icon-animate ">
              <img
                :src="Icons.img"
                :alt="Icons.title"
                :width="Icons.width ? Icons.width : ''"
                :height="Icons.width ? Icons.width : ''"
              /><span class="lnk--text brand-dblue  fs-16">{{
                Icons.title
              }}</span>
              <span
                v-if="Icons.title === 'Notifications'"
                class="lnk--text brand-orange ui-pull-right ml-3  fs-14"
                >1</span
              >
              <span
                v-if="Icons.title === 'Clinics'"
                class="lnk--text brand-orange ui-pull-right ml-3  fs-14"
                >18</span
              >
            </router-link>
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
    height: auto !important;
  }
}
</style>
