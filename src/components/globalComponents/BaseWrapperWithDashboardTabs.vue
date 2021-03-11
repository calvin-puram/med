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
              <div class="ui-separate"></div>
              <div class="row ">
                <div class="col-md-6"></div>
                <div class="col-md-6 ">
                  <div class="row mr-0 ml-0">
                    <div
                      :class="tabsData.length === 3 ? 'col-md-4' : 'col-md-6'"
                      v-for="tabs in tabsData"
                      :key="tabs.id"
                    >
                      <BaseDashboardTabs
                        :color="tabs.color"
                        :text="tabs.text"
                        :link="tabs.link"
                      />
                    </div>
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
  components: {},
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
    tabsData: {
      type: Array,
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
  .text__h5 {
    font-size: 1rem;
  }

  .ui-dashboard-body.sdbr--open {
    padding-left: 0px !important;
  }
}
</style>
