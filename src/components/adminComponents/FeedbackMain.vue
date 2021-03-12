<template>
  <BaseWrapperWithBackbtn
    dashboardName="Feedbacks"
    :menuIcons="menuIcons"
    :toogleMenu="toogleMenu"
    link="/provider/agents"
    profile="/provider/profile"
    notification="/provider/notifications"
  >
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
  </BaseWrapperWithBackbtn>
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

<style lang="scss" scoped></style>
