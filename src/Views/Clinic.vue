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
                          Create a donor/surrogate account
                        </p>
                        <div class="ml-auto">
                          <button
                            class="brand-dgreen font-quicksandsemibold fs-16"
                          >
                            <span
                              class="fe fe-arrow-left"
                              style="position: relative; top: 0px;"
                            >
                              &#8592;
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
                              <label class="fs-14  brand-dblue">Country</label>
                              <select
                                class="form-control  custom-select"
                                required
                              >
                                <option value="">Select your Country</option>
                                <option
                                  :value="country"
                                  v-for="country in countries"
                                  :key="country.split(0, 1)"
                                  >{{ country }}</option
                                >
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
                                ><option value="">Select your ethnicity</option
                                ><option value="Yoruba">Yoruba</option
                                ><option value="Igbo">Igbo</option
                                ><option value="Hausa">Hausa</option
                                ><option value="Others">Others</option></select
                              >
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
                            <div class="ml-auto">
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
export default {};
</script>

<style lang="scss"></style>
