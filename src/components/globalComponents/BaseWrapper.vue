<template>
  <main>
    <div
      :class="
        menuIcons ? 'ui-dashboard-body ' : 'ui-dashboard-body sdbr--open  '
      "
    >
      <div>
        <div :class="bg__color ? 'body' : ''">
          <BaseDashboardNav
            :title="dashboardName"
            :menuIcons="menuIcons"
            :toogleMenu="toogleMenu"
            :profile="profile"
            :notification="notification"
          />

          <section class="ui-body-content">
            <div class="ui-body-content-inner">
              <div class="ui-separate"></div>
              <div :class="bg__img ? 'ui-dashboard-card' : ''">
                <div
                  :class="
                    bg__img
                      ? 'ui-full-bg-norm ui-dashboard-card-body  ui-rounded-small'
                      : ''
                  "
                >
                  <div :class="bg__img ? 'ui-separate mb-1' : ''"></div>
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
    bg__img: {
      type: String,
      default: "",
    },
    bg__color: {
      type: String,
      required: false,
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

.ui-full-bg-norm {
  @include ui-full-bg-norm("../../assets/img/fullsearchimg.svg");
}

@media screen and (max-width: 768px) {
  .ui-dashboard-body.sdbr--open {
    padding-left: 0px;
  }

  .ui-hide-mobile-only {
    display: none;
  }
}
</style>
