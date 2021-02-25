<template>
  <div class="form">
    <section
      class="form__ui__wrapper-large form__ui-full-bg-norm ui-height-full"
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
                        style="width: 100px; margin-top: 30px"
                      />
                      <div
                        class="d-flex align-items-center auth--brand mrgb3 pt-5 form__intro"
                      >
                        <p
                          class="font-quicksandregular brand-dgreen fs-20 mrgb0 font-weight-bold"
                        >
                          Create a donor/surrogate account
                        </p>
                        <div class="ml-auto centralize">
                          <div
                            class="brand-dgreen font-quicksandsemibold fs-16"
                          >
                            <span class="back__btn">
                              <img src="@/assets/back.svg" alt="back arrow" />
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
                              <label
                                for="first-name"
                                class="fs-14 font-quicksandsemibold brand-dblue"
                                >First name</label
                              >

                              <input
                                type="text"
                                class="form-control font-quicksandregular"
                                placeholder="e.g. John"
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
                                >Last name</label
                              >
                              <input
                                type="text"
                                class="form-control font-quicksandregular"
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
                              <label
                                class="fs-14 font-quicksandsemibold brand-dblue"
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
                              <label
                                class="fs-14 font-quicksandsemibold brand-dblue"
                                >Phone number</label
                              >
                              <input
                                type="number"
                                class="form-control font-quicksandregular"
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
                              <select
                                class="form-control custom-select"
                                required
                              >
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
                              <label
                                class="fs-14 font-quicksandsemibold brand-dblue"
                                >Ethnicity</label
                              >
                              <select
                                class="form-control font-quicksandregular custom-select"
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
                                class="form-control font-quicksandregular"
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
                                  <label
                                    class="fs-14 font-quicksandsemibold brand-dblue"
                                    >Resident Strt No. &amp; strt name</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control font-quicksandregular"
                                    placeholder="Your resident street"
                                    id="address"
                                    required=""
                                    value=""
                                  />
                                </div>
                              </div>
                              <div class="col-md-4">
                                <div class="form-group">
                                  <label
                                    class="fs-14 font-quicksandsemibold brand-dblue"
                                    >City/town of residence</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control font-quicksandregular"
                                    required=""
                                    placeholder="Your resident town/city"
                                    id="address"
                                    value=""
                                  />
                                </div>
                              </div>
                              <div class="col-md-4">
                                <div class="form-group">
                                  <label
                                    class="fs-14 font-quicksandsemibold brand-dblue"
                                    >State of residence</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control font-quicksandregular"
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
                                <label
                                  class="fs-14 font-quicksandsemibold brand-dblue"
                                  >Office Strt No. &amp; strt name
                                  (Optional)</label
                                >
                                <input
                                  type="text"
                                  class="form-control font-quicksandregular"
                                  placeholder="Your Office street"
                                  id="address"
                                  value=""
                                />
                              </div>
                            </div>

                            <div class="col-md-4">
                              <div class="form-group">
                                <label
                                  class="fs-14 font-quicksandsemibold brand-dblue"
                                  >Office City/town (Optional)</label
                                >
                                <input
                                  type="text"
                                  class="form-control font-quicksandregular"
                                  placeholder="Your office town/city"
                                  id="address"
                                  value=""
                                />
                              </div>
                            </div>

                            <div class="col-md-4">
                              <div class="form-group">
                                <label
                                  class="fs-14 font-quicksandsemibold brand-dblue"
                                  >Office State (Optional)</label
                                >
                                <input
                                  type="text"
                                  class="form-control font-quicksandregular"
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

<style lang="scss">
@import "../design/";
.form {
  @include background-img(
    "https://dms.medbarnagency.com/images/assets/img@auth-up.svg"
  );
  &__ui__wrapper-large {
    width: 100%;
    min-height: 100vh;
    padding: 5em 0;
    padding-bottom: 0;
  }

  &__ui-wrapper {
    width: 100%;
    padding: 3em 0;
  }

  .back__btn {
    position: relative;
    top: 0px;
  }

  &__form-space {
    padding-left: 3em !important;
    padding-right: 3em !important;
  }

  .frm--cstm.auth.signin-form .bg-white {
    padding-top: 0;
  }
  .frm--white .bg-white {
    padding: 2rem 3rem;
  }

  .ui-rounded-small {
    border-radius: 0.5em !important;
  }

  .mrgb3 {
    margin-bottom: 3em !important;
  }
  .mrgb3 {
    margin-bottom: 3em !important;
  }
  .brand-dgreen,
  .brand-dgreen button {
    color: #125747 !important;
    text-decoration: none;
    border: none;
    background: transparent;
  }
  .brand-dgreen,
  .brand-dgreen a {
    color: #125747 !important;
  }
  .font-quicksandregular,
  .font-quicksandregular a {
    font-family: "quicksandregular" !important;
  }
  .brand-dblue,
  .brand-dblue a {
    color: #334261 !important;
  }
  .fs-14 {
    font-size: 14px;
  }
  .fs-16 {
    font-size: 16px;
  }
  .fs-20 {
    font-size: 20px;
  }
  .mrgt3 {
    margin-top: 3em !important;
  }
  .mrgb0 {
    margin-bottom: 0 !important;
  }
  .frm--cstm.auth .form-control {
    height: 50px;
    padding: 0.4rem 1.3rem;
  }
  .frm--cstm .form-control {
    height: 45px;
    padding: 0.4rem 0.9rem;
    border-radius: 4px;
    border: 1px solid #d9e4f2;
    font-size: 1rem;
  }
  .form-control:disabled,
  .form-control[readonly] {
    background-color: #fff !important;
    opacity: 1;
  }
  .frm--cstm.auth .btn {
    width: 160px;
    height: 50px;
  }
  .btn {
    padding: 0.8rem 2rem;
    font-family: Poppins500;
    font-size: 16px;
    border-radius: 4px;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  .bg-brand-green {
    background-color: #06dca9 !important;
  }
  .onwhite,
  .onwhite a {
    color: #ffffff !important;
  }
  .btn-sm,
  .btn-group-sm > .btn {
    font-size: 0.75rem;
    min-width: 1.625rem;
  }

  .ui-text-center {
    text-align: center !important;
  }
  .mrgt2 {
    margin-top: 2em !important;
  }
  .mrgb2 {
    margin-bottom: 2em !important;
  }
}

@media (max-width: 550px) {
  .form {
    &__intro {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .centralize {
      margin-left: 0 !important;
      margin-top: 1rem;
    }

    .form__form-space {
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
}
</style>
