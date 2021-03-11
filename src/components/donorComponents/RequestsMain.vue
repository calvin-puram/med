<template>
  <BaseWrapperWithDashboardTabs
    dashboardName="Transactions"
    :menuIcons="menuIcons"
    :toogleMenu="toogleMenu"
    :tabsData="tabsData"
    profile="/profile"
    notification="/notifications"
  >
    <section class="mt-2">
      <div class="ui-dashboard-card">
        <div class="ui-dashboard-card-header"></div>
        <div class="ui-dashboard-card">
          <div class="ui-dashboard-card-body">
            <h5 class="text__h5">
              Your requests will show here
            </h5>
          </div>
        </div>
      </div>
    </section>
  </BaseWrapperWithDashboardTabs>
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
  data() {
    return {
      tabsData: [
        {
          id: 1,
          color: "rgb(247, 105, 72)",
          text: "Request Donation",
          link: "/clinic/add-user",
        },
        {
          id: 2,
          color: "#06dca9",
          text: "Send Feedback",
          link: "/clinic/tips",
        },
        {
          id: 3,
          color: " #6fa1d6",
          text: "Back",
          link: "/clinics",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
