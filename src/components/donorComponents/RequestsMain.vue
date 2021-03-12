<template>
  <BaseWrapperWithDashboardTabs
    dashboardName="Transactions"
    :menuIcons="menuIcons"
    :toogleMenu="toogleMenu"
    profile="/profile"
    notification="/notifications"
  >
    <section class="">
      <div class="row mb-5">
        <div class="col-md-6 dashboard-card-wrapper">
          <div class=" dashboard-card">
            <img
              src="@/assets/img/requestdonation.svg"
              width="100px"
              alt="donation"
              class="dashbord-img"
            />
            <button class="btn btn--sm btn-color dashboard-btn">
              Request For Donation
            </button>
          </div>
          <div class=" dashboard-card">
            <img
              src="../../assets/img/sendfeedback.svg"
              class="dashbord-img"
              width="100px"
              alt="feedback"
            />
            <button class="btn btn--sm btn-onboarding-color dashboard-btn">
              Send Feedback
            </button>
          </div>
        </div>
        <div class="col-md-6"></div>
      </div>

      <BaseRequestComponent
        name="Request"
        text="your requests will show here"
        image="../../assets/img/reload.svg"
      />
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

<style lang="scss" scoped>
@import "../../design";
.dashboard-card-wrapper {
  display: flex;
}
.dashboard-card {
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 200px;
  width: 300px;
  margin-left: 1rem;
}

.dashbord-img {
  flex: 5;
}

.btn-color {
  background: $form-error !important;
}

.btn-onboarding-color {
  background: $onboarding-btn-dark;
}

.dashboard-btn {
  flex: 1;
  width: 80% !important;
  margin: auto;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  color: #fff;
}

@media screen and (max-width: 550px) {
  .dashboard-btn {
    width: 95% !important;
    margin: auto;
  }
}

@media screen and (max-width: 360px) {
  .dashboard-card-wrapper {
    flex-direction: column;
  }

  .dashboard-card {
    width: auto;
    margin-left: 0px;
    margin: 1rem 0;
  }
}
</style>
