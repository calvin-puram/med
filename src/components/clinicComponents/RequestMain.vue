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
            title="Requests"
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
                      to="/clinic/home"
                      class="btn btn--xs bg-brand-bluemd onwhite "
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
  },
};
</script>
<style lang="scss">
.body {
  background: #f5f8fd;
}
.text__h5 {
  color: rgb(51, 66, 97);
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .ui-dashboard-card-header {
    display: block !important;
    .ui-card-title {
      margin-bottom: 1rem !important;
    }
  }

  .ui-dashboard-body.sdbr--open {
    padding-left: 0px !important;
  }

  .frm--card .ctrl--fnd {
    width: 100%;
  }

  .text__h5 {
    font-size: 1rem;
  }
}
</style>
