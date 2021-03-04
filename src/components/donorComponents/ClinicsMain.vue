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
            title="Clinics"
            :menuIcons="menuIcons"
            :toogleMenu="toogleMenu"
          />
          <section class="ui-body-content">
            <div class="ui-body-content-inner">
              <div class="ui-separate"></div>
              <div class="ui-dashboard-card">
                <div
                  class="ui-dashboard-card-body ui-full-bg-norm ui-rounded-small"
                >
                  <div class="ui-separate mb-1"></div>
                </div>
              </div>
              <section class="mt-2">
                <div class="ui-dashboard-card">
                  <div class="ui-dashboard-card-body">
                    <div class="table-responsive "></div>
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
<style lang="scss" scoped>
@import "../../design";
.body {
  background: #f5f8fd;
}

.ui-hide {
  display: none !important;
}

.btn.ghost.ghost-green {
  border-color: #06dca9;
  color: #06dca9;
}

.btn {
  padding: 0.5rem 1.3rem;
  width: 150px !important;
  font-size: 16px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.ui-full-bg-norm {
  @include ui-full-bg-norm("../../assets/img/fullsearchimg.svg");
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
}

@media screen and (max-width: 360px) {
  .advance__search-mobile {
    flex-direction: column;
  }

  .ui-separate {
    padding: 0 !important;
  }

  .avatar,
  .avatar-blue {
    display: none !important;
  }
}
</style>
