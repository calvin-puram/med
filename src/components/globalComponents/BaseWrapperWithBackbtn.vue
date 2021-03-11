<template>
  <main>
    <div
      :class="
        menuIcons ? 'ui-dashboard-body ' : 'ui-dashboard-body sdbr--open  '
      "
    >
      <div>
        <div class="body">
          <BaseDashboardNav
            :title="dashboardName"
            :menuIcons="menuIcons"
            :toogleMenu="toogleMenu"
            :profile="profile"
            :notification="notification"
          />

          <section class="ui-body-content">
            <div class="ui-body-content-inner">
              <div class="ui-separate-small"></div>
              <div class="ui-content-header">
                <div class="ui-header-options">
                  <div class="ui-group-button">
                    <router-link
                      :to="link"
                      class="btn btn--sm bg-brand-bluemd onwhite "
                      >Back</router-link
                    >
                  </div>
                </div>
              </div>
              <slot></slot>
            </div>
          </section>
        </div>
      </div>
      <!-- footer -->
      <BaseDashboardFooter />
    </div>
  </main>
</template>

<script>
export default {
  props: {
    menuIcons: {
      type: Boolean,
      required: true,
    },
    toogleMenu: {
      type: Function,
      required: true,
    },
    dashboardName: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
      required: false,
    },
    notification: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../design";
.body {
  background: $color-body-bg;
}

@media screen and (max-width: 768px) {
  .ui-dashboard-body.sdbr--open {
    padding-left: 0px;
  }
}
</style>
