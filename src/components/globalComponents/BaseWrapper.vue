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
            :profileName="profileName"
            :profileStatus="profileStatus"
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
                  <div class="inner-img" v-if="bg__img">
                    <img
                      src="../../assets/img/allbg.svg"
                      alt="a lady reading a book"
                      width="200px"
                      class="mt-5"
                    />
                  </div>
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
    profileName: {
      type: String,
      required: false,
    },
    profileStatus: {
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
  background: linear-gradient(rgba(242, 7, 226, 0.7), rgba(242, 7, 226, 0.6));
}

.inner-img {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 10vh;
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
