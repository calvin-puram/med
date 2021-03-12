<template>
  <BaseWrapperWithBackbtn
    dashboardName="Notifications"
    :menuIcons="menuIcons"
    :toogleMenu="toogleMenu"
    link="/clinic/home"
    profile="/provider/profile"
    notification="/provider/notifications"
  >
    <section class="mt-2">
      <div class="ui-dashboard-card">
        <div class="ui-dashboard-card-header">
          <div></div>
          <div class="ui-card-header-options"></div>
        </div>
        <div class="ui-dashboard-card-body">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th></th>
                  <th class=" pb-1 ui-capitalize fs-14">
                    Message
                  </th>
                  <th class=" pb-1 ui-capitalize fs-14">
                    Type
                  </th>
                  <th class=" pb-1 ui-capitalize fs-14">
                    Date
                  </th>
                  <th class="pb-1"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="tr--lnk">
                  <td></td>
                  <td>
                    mark james
                  </td>
                  <td>New user</td>
                  <td>02 Mar, 2021</td>
                  <td>
                    <div class="options">
                      <img
                        src="@/assets/img/addusertodonor.svg"
                        alt="Details Icon"
                      />
                    </div>
                  </td>
                </tr>
                <tr class="tr--lnk">
                  <td></td>
                  <td>
                    Communication with John Doe. Message Content: I'd like to
                    know why
                  </td>
                  <td>Donor Messages</td>
                  <td>02 Mar, 2021</td>
                  <td>
                    <div class="options">
                      <img
                        src="@/assets/img/addusertodonor.svg"
                        alt="Details Icon"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="ui-dashboard-card-footer">
          <div class="ui-group-button npv--btn">
            <button disabled="" class="fs-14">
              <i class="fas fa-chevron-left onwhite"></i></button
            ><button disabled="" class="fs-14">
              <i class="fas fa-chevron-right onwhite"></i>
            </button>
          </div>
          <div class="ui-card-footer-options">
            <p class="onmineshaft mb-0  fs-14">
              Showing 1 0f 1 pages
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- <div class="ui-dashboard-card-body">
                <h5 class="text__h5">
                  You don't have any notifications yet
                </h5>
              </div> -->
  </BaseWrapperWithBackbtn>
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
.text__h5 {
  color: rgb(51, 66, 97);
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .ui-dashboard-body.sdbr--open {
    padding-left: 0px;
  }

  .frm--card .ctrl--fnd {
    width: 100%;
    margin-bottom: 1rem;
  }

  .ui-dashboard-card-header {
    display: block;
  }
}
</style>
