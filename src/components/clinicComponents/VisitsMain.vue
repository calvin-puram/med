<template>
  <BaseWrapperWithDashboardTabs
    dashboardName="Donors"
    :menuIcons="menuIcons"
    :toogleMenu="toogleMenu"
    :tabsData="tabsData"
    profile="/clinic/profile"
    notification="/clinic/notifications"
  >
    <section class="mt-2">
      <div class="ui-dashboard-card ui-card-tabs">
        <div>
          <div class="ui-cardtab-links">
            <ul class="nav nav-tabs fs-14">
              <li role="presentation" class="active">
                <a href="#all-cards" role="tab" data-toggle="tab"
                  >Visiting Donors</a
                >
              </li>
              <li role="presentation" class=" ">
                <a href="#add-cards" role="tab" data-toggle="tab"
                  >Your Donors</a
                >
              </li>
            </ul>
          </div>
          <div class="ui-dashboard-card-body">
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="all-cards">
                <form class="d-flex align-items-center frm--card">
                  <div class="pr-1">
                    <input
                      type="text"
                      placeholder="Find by phone, donation type, gender, complexion etc"
                      class=" form-control ctrl--fnd"
                      id="searchRef"
                    />
                  </div>
                </form>
                <div class="ui-dashboard-card-body">
                  <h5 class="text__h5">
                    You don't have any visit yet
                  </h5>
                </div>
              </div>
              <div class="tab-pane" id="add-cards">
                <div class="ui-dashboard-card">
                  <form class="d-flex align-items-center frm--card">
                    <div class="pdr1">
                      <input
                        type="text"
                        placeholder="Find by name"
                        class=" form-control ctrl--fnd"
                        id="searchRef"
                      />
                    </div>
                  </form>
                  <div class="ui-dashboard-card-body">
                    <h5 class="text__h5">
                      You don't have any visit yet
                    </h5>
                  </div>
                </div>
              </div>
            </div>
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
          color: "#06dca9",
          text: "Search all donors",
          link: "/clinic/full-search",
        },
        {
          id: 2,
          color: " #082c77",
          text: "Find  donors",
          link: "/clinic/free",
        },
        {
          id: 3,
          color: " #6fa1d6",
          text: "Back",
          link: "/clinic/home",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.text__h5 {
  color: rgb(51, 66, 97);
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
}
</style>
