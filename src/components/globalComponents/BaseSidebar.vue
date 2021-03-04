<template>
  <section class="ui-sidebar ssbar--open ">
    <div class="ui-sidebar-primary ssbar--open">
      <div class="ui-sidebar-primary-header ui-text-center">
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
          <li v-for="Icons in sidebarIcons" :key="Icons.title">
            <router-link
              class="ui-icon-animate"
              :title="Icons.title"
              :to="Icons.to"
              ><img
                :src="Icons.img"
                :alt="Icons.title"
                :width="Icons.width ? Icons.width : ''"
                :height="Icons.width ? Icons.width : ''"
              /><span class="lnk--text brand-dblue  fs-16">{{
                Icons.title
              }}</span
              ><span
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
    showProfile: {
      type: String,
      required: false,
    },
  },
};
</script>
<style lang="scss">
@import "../../design/";
@media screen and (max-width: 1024px) {
  .ui-sidebar-primary-body {
    top: 190px;
    height: 100%;
  }
}

@media (max-width: 789px) {
  .ui-sidebar {
    margin-left: 65px;
    width: 220px !important;
  }

  .ui-sidebar-primary-body {
    height: 700% !important;
  }
}

@media (max-width: 360px) {
  .ui-sidebar {
    margin-left: 65px;
    width: 220px !important;
    z-index: 2000;
  }

  .ui-sidebar-primary-body {
    height: 700% !important;
  }
}
</style>
