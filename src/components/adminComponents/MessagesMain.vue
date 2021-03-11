<template>
  <BaseWrapper
    dashboardName="Messages"
    :menuIcons="menuIcons"
    :toogleMenu="toogleMenu"
    bg__color="primary-color"
  >
    <section class="mt-2">
      <div class="ui-dashboard-card">
        <div class="ui-dashboard-card-header">
          <div>
            <form class="d-flex align-items-center frm--card">
              <input
                type="text"
                placeholder="Find message by title"
                class=" form-control ctrl--fnd"
                id="searchRef"
              />
            </form>
          </div>
          <div class="ui-card-header-options">
            <div class="ui-group-button d-flex align-items-center">
              <div class="ui-group-button pl-1">
                <router-link
                  to="/provider/tips/add"
                  class="btn btn--sm bg-brand-green onwhite "
                  >Add Message</router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="ui-dashboard-card-body">
          <div class="text-center">
            <h5 class="text__h5">
              You currrently have no scheduled messages
            </h5>
          </div>
          <div class="table-responsive"></div>
        </div>
      </div>
    </section>
  </BaseWrapper>
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
@media screen and (max-width: 768px) {
  .frm--card .ctrl--fnd {
    margin-bottom: 1rem;
  }

  .ui-dashboard-card-header {
    display: block;
  }
}
</style>
