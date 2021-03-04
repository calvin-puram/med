]<template>
  <section class="ui-sidebar  sdbr--cllps">
    <div class=" ui-sidebar-primary1">
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
          <li>
            <router-link
              :to="Icons.to"
              class="ui-icon-animate "
              :title="Icons.title"
            >
              <img
                :src="Icons.img"
                alt="Icons.title"
                :style="{ width: Icons.width ? Icons.width : '' }"
              />
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
