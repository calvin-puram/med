<template>
  <section class="ui__wrapper-large ui-full-bg-norm ui-height-full">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8 mx-auto">
          <div class="ui-wrapper">
            <div class="frm--white frm--cstm auth signin-form was-validated">
              <div class="">
                <div class="bg-white ui-rounded-small">
                  <div>
                    <div class="mb-3"></div>
                    <img
                      src="@/assets/img/medbarn.svg"
                      alt="quiv"
                      style="width: 100px; margin-top: 30px"
                    />
                    <div
                      class="d-flex align-items-center justify-content-between auth--brand mb-5 pt-5"
                    >
                      <p class=" brand-dgreen fs-20 mb-0 font-weight-bold">
                        Create an agent account
                      </p>
                      <div class=" centralize">
                        <div class="back__btnText">
                          <span>
                            <img
                              src="@/assets/img/Intersection 1.svg"
                              alt="back arrow"
                            />
                          </span>
                          &nbsp;
                          <router-link to="/register">Go Back</router-link>
                        </div>
                      </div>
                    </div>

                    <form class="">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="first-name">First name</label>

                            <input
                              type="text"
                              class="form-control "
                              placeholder="e.g. Pedro"
                              id="first-name"
                              required=""
                              value=""
                            />
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Last name</label>
                            <input
                              type="text"
                              class="form-control "
                              placeholder="e.g. John"
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
                            <label>Email</label>
                            <input
                              type="email"
                              class="form-control "
                              placeholder="e.g you@yourwebsite.com"
                              id="phone-number"
                              required
                              autocomplete="off"
                            />
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Phone number</label>
                            <input
                              type="number"
                              class="form-control "
                              placeholder="e.g. 080 0000 0000"
                              id="phone-no"
                              autocomplete="off"
                              required=""
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Enter a password</label>
                            <input
                              type="password"
                              class="form-control "
                              placeholder="Enter password"
                              id="password"
                              required
                              autocomplete="off"
                            />
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Official Address</label>
                            <input
                              type="text"
                              class="form-control "
                              placeholder="Enter your address"
                              id="address"
                              autocomplete="off"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>State</label>
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

                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Date of birth</label>
                            <datepicker
                              placeholder="Select date of birth"
                              input-class="form-control dob"
                              required="true"
                            ></datepicker>
                          </div>
                        </div>
                      </div>

                      <div class="form-group  mb-0 mt-3">
                        <div class="mb-5 mb-sm-0">
                          <label
                            class="custom-control  custom-checkbox d-flex align-items-center"
                            ><input
                              type="checkbox"
                              class="custom-control-input"
                              name="example-inline-checkbox1"
                              required=""
                            /><span class="custom-control-label"
                              ><span class="normal-text">I accept &nbsp;</span>
                              <span class=" dark-blue" style="cursor: pointer"
                                >terms &amp; conditions</span
                              ></span
                            ></label
                          >
                        </div>

                        <div class="ml-auto center_btn">
                          <button
                            type="submit"
                            class="btn btn-adj btn-block bg-dark-blue onwhite  btn--sm"
                          >
                            CREATE ACCOUNT
                          </button>
                        </div>

                        <div class="ui-text-center mt-5 mb-2">
                          Already have an account?
                          <router-link to="/" class="dark-blue  fs-14">
                            Sign In</router-link
                          >
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
@import "../../design";
.ui-full-bg-norm {
  @include ui-full-bg-norm("../../assets/img/authbg.png");
}

.custom-checkbox {
  margin-top: -1rem;
}
</style>
