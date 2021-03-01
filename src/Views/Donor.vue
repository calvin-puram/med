<template>
  <section class="ui__wrapper-large ui-full-bg-norm ui-height-full">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8 mx-auto">
          <div class="ui-wrapper">
            <div class="frm--white frm--cstm auth signin-form">
              <div class="form-space">
                <div class="bg-white ui-rounded-small">
                  <div>
                    <div class="mb-3"></div>
                    <img
                      src="@/assets/img/medbarn.svg"
                      alt="medbarn"
                      style="width: 100px; margin-top: 30px"
                    />
                    <div
                      class="d-flex align-items-center auth--brand mb-3 pt-5 form__intro"
                    >
                      <p class=" brand-dgreen fs-20 mb-0 font-weight-bold">
                        Create a donor/surrogate account
                      </p>
                      <div class="ml-auto centralize">
                        <div class="brand-dgreen  fs-16">
                          <span class="back__btn">
                            <img
                              src="@/assets/img/Intersection 1.svg"
                              alt="back arrow"
                              width="100px"
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
                            <label for="first-name" class="fs-14  brand-dblue"
                              >First name</label
                            >

                            <input
                              type="text"
                              class="form-control "
                              placeholder="e.g. John"
                              id="first-name"
                              required=""
                              value=""
                            />
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="fs-14  brand-dblue">Last name</label>
                            <input
                              type="text"
                              class="form-control "
                              placeholder="e.g. Doe"
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
                            <label class="fs-14  brand-dblue"
                              >Date of birth</label
                            >
                            <datepicker
                              placeholder="Select date of birth"
                              input-class="form-control dob"
                            ></datepicker>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="fs-14  brand-dblue"
                              >Phone number</label
                            >
                            <input
                              type="number"
                              class="form-control "
                              placeholder="e.g. 080 0000 0000"
                              id="phone-number"
                              required=""
                              autocomplete="off"
                              value=""
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group select__padding">
                            <label class="fs-14 brand-dblue">Country</label>
                            <select class="form-control custom-select" required>
                              <option value="">Select your Country</option>
                              <option
                                :value="country"
                                v-for="country in countries"
                                :key="country.split(0, 1)"
                              >
                                {{ country }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label class="fs-14  brand-dblue">Ethnicity</label>
                            <select
                              class="form-control  custom-select"
                              required=""
                            >
                              <option value="">Select your ethnicity</option>
                              <option value="Yoruba">Yoruba</option>
                              <option value="Igbo">Igbo</option>
                              <option value="Hausa">Hausa</option>
                              <option value="Others">Others</option>
                            </select>
                          </div>
                        </div>

                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control "
                              placeholder="If you selected others, Enter donor ethnicity"
                              id="eth"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-12">
                          <div class="row">
                            <div class="col-md-4">
                              <div class="form-group">
                                <label class="fs-14  brand-dblue"
                                  >Resident Strt No. &amp; strt name</label
                                >
                                <input
                                  type="text"
                                  class="form-control "
                                  placeholder="Your resident street"
                                  id="address"
                                  required=""
                                  value=""
                                />
                              </div>
                            </div>
                            <div class="col-md-4">
                              <div class="form-group">
                                <label class="fs-14  brand-dblue"
                                  >City/town of residence</label
                                >
                                <input
                                  type="text"
                                  class="form-control "
                                  required=""
                                  placeholder="Your resident town/city"
                                  id="address"
                                  value=""
                                />
                              </div>
                            </div>
                            <div class="col-md-4">
                              <div class="form-group">
                                <label class="fs-14  brand-dblue"
                                  >State of residence</label
                                >
                                <input
                                  type="text"
                                  class="form-control "
                                  required=""
                                  placeholder="Your resident state"
                                  id="address"
                                  value=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-12">
                        <div class="row">
                          <div class="col-md-4">
                            <div class="form-group">
                              <label class="fs-14  brand-dblue"
                                >Office Strt No. &amp; strt name
                                (Optional)</label
                              >
                              <input
                                type="text"
                                class="form-control "
                                placeholder="Your Office street"
                                id="address"
                                value=""
                              />
                            </div>
                          </div>

                          <div class="col-md-4">
                            <div class="form-group">
                              <label class="fs-14  brand-dblue"
                                >Office City/town (Optional)</label
                              >
                              <input
                                type="text"
                                class="form-control "
                                placeholder="Your office town/city"
                                id="address"
                                value=""
                              />
                            </div>
                          </div>

                          <div class="col-md-4">
                            <div class="form-group">
                              <label class="fs-14  brand-dblue"
                                >Office State (Optional)</label
                              >
                              <input
                                type="text"
                                class="form-control "
                                placeholder="Your office state"
                                id="address"
                                value=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="form-group mrgt3 mrgb0">
                        <div class="d-flex align-items-center">
                          <div class="ml-auto center_btn">
                            <button
                              class="btn bg-brand-green onwhite font-quicksandmedium btn-sm"
                            >
                              PROCEED
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
              <router-link to="/" class="brand-dgreen  fs-14"
                >Already have an account? Sign In</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import axios from "axios";
export default {
  components: {
    Datepicker,
  },
  data() {
    return {
      countries: [],
    };
  },

  async mounted() {
    const { data } = await axios.get("https://restcountries.eu/rest/v2/all");
    data.forEach((country) => this.countries.push(country.name));
  },
};
</script>

<style lang="scss" scoped>
@import "../design/";
.ui-full-bg-norm {
  @include ui-full-bg-norm("../assets/img/authbg.svg");
}

@media (max-width: 550px) {
  .form__intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .centralize {
    margin-left: 0 !important;
    margin-top: 1rem;
  }

  .form-space {
    padding-left: 0.5em !important;
    padding-right: 0.5em !important;
  }

  .center_btn {
    margin-left: 0 !important;
  }

  .d-flex {
    display: flex !important;
    flex-direction: column;
  }
}
</style>
