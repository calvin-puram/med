<template>
  <BaseWrapper
    dashboardName="Add Clinic"
    :menuIcons="menuIcons"
    :toogleMenu="toogleMenu"
    bg__img="bg__img"
    bg__color="primary-color"
    profile="/provider/profile"
    notification="/provider/notifications"
  >
    <section class="mt-2">
      <div class="ui-dashboard-card">
        <div class="ui-dashboard-card-header">
          <h3 class="ui-card-title brand-dblue">
            Clinic details
          </h3>
          <div class="ui-card-header-options"></div>
        </div>
        <div class="ui-dashboard-card-body">
          <form class="frm--cstm pt-3">
            <div class="row">
              <div class="col-md-7 mx-auto">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="fs-14  brand-dblue">Clinic name</label
                      ><input
                        type="text"
                        class="form-control "
                        placeholder="e.g. ohealth Clinic"
                        id="clinic-name"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="fs-14  brand-dblue">Email address</label
                      ><input
                        type="email"
                        class="form-control "
                        placeholder="Clinic email address"
                        id="email"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="fs-14  brand-dblue"
                        >Official phone number</label
                      ><input
                        type="text"
                        class="form-control "
                        placeholder="Clinic phone number"
                        id="phone-number"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="fs-14 brand-dblue">State</label>
                      <select class="form-control custom-select" required>
                        <option value="">Select state</option>
                        <option
                          :value="state"
                          v-for="state in states"
                          :key="state"
                        >
                          {{ state }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label class="fs-14 font-quicksandsemibold brand-dblue"
                        >Date of Establishment</label
                      >
                      <datepicker
                        placeholder="Select date of establishment"
                        input-class="form-control"
                      ></datepicker>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="fs-14 brand-dblue">Official address</label
                  ><input
                    type="text"
                    class="form-control "
                    placeholder="Official clinic address"
                    id="address"
                  />
                </div>
                <div class="form-group mt-3 mb-2">
                  <div class="row">
                    <div class="col-md-6 ui-hide-mobile-only">
                      <div>
                        <label
                          class="custom-control custom-checkbox custom-control-inline"
                          ><input
                            type="checkbox"
                            class="custom-control-input"
                            name="example-inline-checkbox1"
                          /><span class="custom-control-label "
                            >Clinic is verified</span
                          ></label
                        >
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                      <div class="ml-auto">
                        <button
                          type="submit"
                          class="btn bg-brand-green onwhite  btn--sm"
                        >
                          ADD CLINIC
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </BaseWrapper>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import states from "@/Utils/state";
export default {
  components: {
    Datepicker,
  },
  data() {
    return {
      states,
    };
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
<style lang="scss" scoped></style>
