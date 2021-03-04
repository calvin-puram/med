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
            title="Feedbacks "
            :menuIcons="menuIcons"
            :toogleMenu="toogleMenu"
          />

          <section class="ui-body-content">
            <div class="ui-body-content-inner">
              <div class="ui-separate-small"></div>
              <div class="ui-content-header">
                <div class="ui-header-options">
                  <div class="ui-group-button">
                    <router-link
                      to="/provider/agents"
                      class="btn btn--sm bg-brand-bluemd onwhite "
                    >
                      Back
                    </router-link>
                  </div>
                </div>
              </div>
              <section class="mt-2">
                <div class="ui-dashboard-card">
                  <div class="ui-dashboard-card-header">
                    <div>
                      <form class="d-flex align-items-center frm--card">
                        <input
                          type="text"
                          placeholder="Find by name"
                          class=" form-control ctrl--fnd"
                          id="searchRef"
                        />
                      </form>
                    </div>
                  </div>
                  <div class="ui-dashboard-card">
                    <div class="ui-dashboard-card-body">
                      <h5 class="text__h5">
                        Requests from donors will show here
                      </h5>
                    </div>
                  </div>
                </div>
              </section>
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

  .ui-hide-mobile-only {
    display: none;
  }
}
</style>
