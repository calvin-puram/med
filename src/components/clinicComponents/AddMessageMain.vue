<template>
  <BaseWrapperWithBackbtn
    dashboardName="Message"
    :menuIcons="menuIcons"
    :toogleMenu="toogleMenu"
    link="/clinic/tips"
    profile="/clinic/profile"
    notification="/clinic/notifications"
  >
    <section class="mt-2">
      <div class="ui-dashboard-card">
        <div class="ui-dashboard-card-header">
          <h3 class="ui-card-title brand-dblue ">
            Message details
          </h3>
          <div class="ui-card-header-options"></div>
        </div>
        <div class="ui-dashboard-card-body">
          <form class="frm--cstm pt-2">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="fs-14  brand-dblue">Message Title</label
                  ><input
                    type="text"
                    class="form-control "
                    placeholder="Enter title"
                    id="message-title"
                  />
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="fs-14  brand-dblue">Message Type</label
                      ><select class="form-control  custom-select"
                        ><option value="">Select message type</option
                        ><option value="sms">SMS</option
                        ><option value="email">Email</option></select
                      >
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="fs-14  brand-dblue">Recipient</label
                      ><select class="form-control  custom-select"
                        ><option value="">Select recipient</option
                        ><option value="donors">Donors</option></select
                      >
                    </div>
                  </div>
                </div>
                <div class="form-group mrgt3">
                  <button
                    class="btn btn--sm btn__small bg-brand-green onwhite "
                  >
                    SAVE MESSAGE
                  </button>
                </div>
              </div>
              <div class="col-md-6">
                <h5 class="brand-green  ">
                  Send this message by
                </h5>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <datepicker
                        placeholder="February 26, 2021 "
                        input-class="form-control "
                      ></datepicker>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="fs-14  brand-dblue">Message</label
                  ><textarea
                    class="form-control "
                    placeholder="Type message"
                    id="history"
                    maxlength="1000"
                    spellcheck="false"
                    cols="50"
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </BaseWrapperWithBackbtn>
</template>

<script>
import Datepicker from "vuejs-datepicker";
export default {
  components: {
    Datepicker,
  },
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
.onsilverlight {
  color: #7cafa0;
}

textarea.form-control {
  height: 350px !important;
}
</style>
