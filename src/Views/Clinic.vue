<template>
  <div class="form">
    <section
      class=" form__ui__wrapper-large form__ui-full-bg-norm ui-height-full"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8 mx-auto">
            <div class="ui-wrapper">
              <div class="frm--white frm--cstm auth signin-form">
                <div class="form__form-space">
                  <div class="bg-white ui-rounded-small">
                    <div>
                      <div class="mrgb3"></div>
                      <img
                        src="https://dms.medbarnagency.com/images/assets/medbarn.jpeg"
                        alt="medbarn"
                        style="width: 100px; margin-top: 30px;"
                      />
                      <div
                        class="d-flex align-items-center auth--brand mrgb3 pt-5"
                      >
                        <p
                          class="font-quicksandregular brand-dgreen fs-20 mrgb0 font-weight-bold"
                        >
                          Create a clinic account
                        </p>
                        <div class="ml-auto centralize">
                          <button
                            class="brand-dgreen font-quicksandsemibold fs-16"
                          >
                            <span
                              class="fe fe-arrow-left"
                              style="position: relative; top: 0px;"
                            >
                              <img src="@/assets/back.svg" alt="back arrow" />
                            </span>
                            &nbsp;
                            <router-link to="/register">Go Back</router-link>
                          </button>
                        </div>
                      </div>

                      <form class="">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label
                                for="first-name"
                                class="fs-14 font-quicksandsemibold brand-dblue"
                                >Clinic name</label
                              >

                              <input
                                type="text"
                                class="form-control font-quicksandregular"
                                placeholder="e.g. Pedro hospital"
                                id="first-name"
                                required=""
                                value=""
                              />
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="form-group">
                              <label
                                class="fs-14 font-quicksandsemibold brand-dblue"
                                >Business email</label
                              >
                              <input
                                type="text"
                                class="form-control font-quicksandregular"
                                placeholder="e.g. you@yourwebsite.com"
                                id="last-name"
                                required=""
                                value=""
                              />
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label
                                class="fs-14 font-quicksandsemibold brand-dblue"
                                >Official phone number</label
                              >
                              <input
                                type="number"
                                class="form-control font-quicksandregular"
                                placeholder="e.g. 080 0000 0000"
                                id="phone-no"
                                autocomplete="off"
                                required=""
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label
                                class="fs-14 font-quicksandsemibold brand-dblue"
                                >Enter a password</label
                              >
                              <input
                                type="password"
                                class="form-control font-quicksandregular"
                                placeholder="Enter password"
                                id="phone-number"
                                required=""
                                autocomplete="off"
                                value=""
                              />
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group select__padding">
                              <label class="fs-14  brand-dblue"
                                >Official address</label
                              >
                              <input
                                type="text"
                                class="form-control font-quicksandregular"
                                placeholder="Enter your address"
                                id="address"
                                required=""
                              />
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label
                                class="fs-14 font-quicksandsemibold brand-dblue"
                                >State</label
                              >
                              <select
                                class="form-control  custom-select"
                                required
                              >
                                <option value="">Select state</option>
                                <option
                                  :value="state"
                                  v-for="state in states"
                                  :key="state"
                                  >{{ state }}</option
                                >
                              </select>
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="form-group">
                              <label
                                class="fs-14 font-quicksandsemibold brand-dblue"
                                >Date of Establishment</label
                              >
                              <datepicker
                                placeholder="Select date of establishment"
                                input-class="form-control"
                              ></datepicker>
                            </div>
                          </div>
                        </div>

                        <div class="form-group mrgt3 mrgb0">
                          <div class="d-flex align-items-center">
                            <div class="mb-5 mb-sm-0">
                              <label
                                class="custom-control custom-checkbox custom-control-inline"
                                ><input
                                  type="checkbox"
                                  class="custom-control-input"
                                  name="example-inline-checkbox1"
                                  required=""
                                /><span class="custom-control-label"
                                  ><span class="font-quicksandlight"
                                    >I accept &nbsp;</span
                                  >
                                  <span
                                    class="font-quicksandsemibold brand-green"
                                    style="cursor: pointer;"
                                    >terms &amp; conditions</span
                                  ></span
                                ></label
                              >
                            </div>

                            <div class="ml-auto center_btn">
                              <button
                                type="submit"
                                class="btn btn-adj bg-brand-green onwhite font-quicksandmedium btn-sm"
                              >
                                CREATE ACCOUNT
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div class="ui-text-center mrgt2 mrgb2">
                <router-link
                  to="/"
                  class="brand-dgreen font-quicksandsemibold fs-14"
                  >Already have an account? Sign In</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
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
};
</script>

<style lang="scss" scoped>
.form {
  .frm--cstm.auth .btn {
    width: 190px;
    height: 50px;
    font-size: 14px;
  }

  .brand-green,
  .brand-green a {
    color: #06dca9 !important;
  }
}
</style>
