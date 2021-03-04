<template>
  <main>
    <div
      :class="
        menuIcons ? 'ui-dashboard-body ' : 'ui-dashboard-body sdbr--open  '
      "
    >
      <div>
        <div class="body">
          <BaseDashboardNav
            title="Add a new donor"
            :menuIcons="menuIcons"
            :toogleMenu="toogleMenu"
          />
          <section class="ui-body-content">
            <div class="ui-body-content-inner">
              <div class="ui-separate"></div>
              <div class="ui-dashboard-card">
                <div
                  class="ui-dashboard-card-body ui-full-bg-norm ui-rounded-small"
                >
                  <div class="ui-separate mb-1"></div>
                </div>
              </div>
              <section class="mt-2">
                <div class="ui-dashboard-card">
                  <div class="ui-dashboard-card-header">
                    <h3 class="ui-card-title brand-dblue ">
                      Donor details
                    </h3>
                    <div class="ui-card-header-options"></div>
                  </div>
                  <div class="ui-dashboard-card-body">
                    <form class="frm--cstm pt-2 was-validated">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="d-flex align-items-center mb-2">
                            <img
                              src="@/assets/img/iconavatar.svg"
                              alt="Icon"
                              class="ui-avatar"
                              width="80px"
                              height="80px"
                            /><label
                              class="btn btn--sm ghost ghost-green brand-green  photo--btn"
                            >
                              Add Image<input
                                type="file"
                                class="ui-hide btn--small"
                                id="getDp"
                                size="60"
                            /></label>
                            <div class="pl-1"></div>
                          </div>
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="fs-12  brand-dblue"
                                  >First name</label
                                ><input
                                  type="text"
                                  class="form-control "
                                  placeholder="e.g. Ruth"
                                  id="clinic-name"
                                  required=""
                                />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="fs-12  brand-dblue"
                                  >Last name</label
                                ><input
                                  type="text"
                                  class="form-control "
                                  placeholder="e.g. Ajayi"
                                  id="lastname"
                                  required=""
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="fs-12  brand-dblue"
                                  >Date of birth</label
                                >
                                <datepicker
                                  placeholder="02/12/2020"
                                  input-class="form-control dob"
                                ></datepicker>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="fs-12  brand-dblue"
                                  >Donors' gender</label
                                >
                                <div style="margin-top: 7px;">
                                  <label
                                    class="custom-control custom-checkbox custom-control-inline"
                                    ><input
                                      type="radio"
                                      class="custom-control-input"
                                      name="gender"
                                      required=""
                                      value="male"
                                    /><span class="custom-control-label "
                                      >Male</span
                                    ></label
                                  ><label
                                    class="custom-control custom-checkbox custom-control-inline"
                                    ><input
                                      type="radio"
                                      class="custom-control-input"
                                      name="gender"
                                      required=""
                                      value="female"
                                    /><span class="custom-control-label "
                                      >Female</span
                                    ></label
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="fs-12  brand-dblue"
                                  >Do you know your genotype? Enter here</label
                                ><input
                                  type="text"
                                  class="form-control "
                                  placeholder="e.g. AA"
                                  id="weight"
                                  autocomplete="off"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="fs-12 brand-dblue">Country</label>
                                <select
                                  class="form-control custom-select"
                                  required
                                >
                                  <option value="">Select your Country</option>
                                  <option
                                    :value="country"
                                    v-for="country in countries"
                                    :key="country.splice(0, 1)"
                                  >
                                    {{ country }}
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="fs-12  brand-dblue"
                                  >Religion</label
                                ><select
                                  class="form-control  custom-select"
                                  required=""
                                  ><option value=""
                                    >Select donor's religion</option
                                  ><option value="christian">Christian</option
                                  ><option value="islam">Islam</option
                                  ><option value="traditional"
                                    >Traditional</option
                                  ><option value="others"
                                    >Others</option
                                  ></select
                                >
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="fs-12  brand-dblue"
                                  >Complexion</label
                                ><select
                                  class="form-control  custom-select"
                                  required=""
                                  ><option value=""
                                    >Select donor's complexion</option
                                  ><option value="Albino">Albino</option
                                  ><option value="Black">Black</option
                                  ><option value="Dark">Dark</option
                                  ><option value="Yellow">Yellow</option
                                  ><option value="Dark Brown">Dark Brown</option
                                  ><option value="Fair">Fair</option
                                  ><option value="Light">Light</option
                                  ><option value="Light Brown"
                                    >Light Brown</option
                                  ><option value="Medium">Medium</option
                                  ><option value="Medium Brown"
                                    >Medium Brown</option
                                  ><option value="Olive">Olive</option
                                  ><option value="Ruddy">Ruddy</option
                                  ><option value="Sallow">Sallow</option
                                  ><option value="Other">Other</option></select
                                >
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="fs-12  brand-dblue"
                                  >Height(ft)</label
                                ><select
                                  class="form-control  custom-select"
                                  required=""
                                  ><option value=""
                                    >Select donor's height</option
                                  ><option value="5.0">5′0″</option
                                  ><option value="5.1">5′1″</option
                                  ><option value="5.2">5′2″</option
                                  ><option value="5.3">5′3″</option
                                  ><option value="5.4">5′4″</option
                                  ><option value="5.5">5′5″</option
                                  ><option value="5.6">5′6″</option
                                  ><option value="5.7">5′7″</option
                                  ><option value="5.8">5′8″</option
                                  ><option value="5.9">5′9″</option
                                  ><option value="5.10">5′10″</option
                                  ><option value="5.11">5′11″</option
                                  ><option value="6.0">6′0″</option
                                  ><option value="6.1">6′1″</option
                                  ><option value="6.2">6′2″</option
                                  ><option value="6.3">6′3″</option
                                  ><option value="6.4">6′4″</option
                                  ><option value="6.5">6′5″</option
                                  ><option value="6.6">6′6″</option
                                  ><option value="6.7">6′7″</option
                                  ><option value="6.8">6′8″</option
                                  ><option value="6.9">6′9″</option
                                  ><option value="6.10">6′10″</option
                                  ><option value="6.11">6′11″</option
                                  ><option value="7.0">7′0″</option
                                  ><option value="7.1">7′1″</option
                                  ><option value="7.2">7′2″</option
                                  ><option value="7.3">7′3″</option
                                  ><option value="7.4">7′4″</option
                                  ><option value="7.5">7′5″</option></select
                                >
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="fs-12  brand-dblue"
                                  >Weight(kg)</label
                                ><input
                                  type="number"
                                  class="form-control "
                                  placeholder="e.g. 50"
                                  id="weight"
                                  required=""
                                  autocomplete="off"
                                />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="fs-12  brand-dblue"
                                  >Education</label
                                ><select
                                  class="form-control  custom-select"
                                  required=""
                                  ><option value=""
                                    >Select donor's education</option
                                  ><option value="graduate">Graduate</option
                                  ><option value="master">Masters</option
                                  ><option value="PHD">PHD</option
                                  ><option value="undergraduate"
                                    >Undergraduate</option
                                  ><option value="High school"
                                    >High school</option
                                  ><option value="Basic">Basic</option
                                  ><option value="Not educated"
                                    >Not educated</option
                                  ></select
                                >
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="fs-12  brand-dblue"
                                  >Donation type</label
                                ><select
                                  class="form-control  custom-select"
                                  required=""
                                  ><option value="">Select donor type</option
                                  ><option value="egg">Egg</option
                                  ><option value="sperm">Sperm</option
                                  ><option value="surrogate"
                                    >Surrogate</option
                                  ></select
                                >
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="fs-12  brand-dblue"
                                  >Account number</label
                                ><input
                                  type="number"
                                  class="form-control "
                                  placeholder="Enter account number"
                                  id="state"
                                  required=""
                                  autocomplete="off"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="fs-12  brand-dblue"
                                  >Phone number</label
                                ><input
                                  type="text"
                                  class="form-control "
                                  placeholder="e.g. 080 0000 0000"
                                  id="phone"
                                  required=""
                                  autocomplete="off"
                                />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="fs-12  brand-dblue"
                                  >Email (Optional)</label
                                ><input
                                  type="email"
                                  class="form-control "
                                  placeholder="e.g. donor@example.com"
                                  id="email"
                                />
                              </div>
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-md-4">
                              <div class="form-group">
                                <label class="fs-12  brand-dblue"
                                  >Street number and street name</label
                                ><input
                                  type="text"
                                  class="form-control "
                                  placeholder="Donor's street"
                                  id="address"
                                  required=""
                                />
                              </div>
                            </div>
                            <div class="col-md-4">
                              <div class="form-group">
                                <label class="fs-12  brand-dblue"
                                  >City/town</label
                                ><input
                                  type="text"
                                  class="form-control "
                                  placeholder="Donor's resident town/city"
                                  id="address"
                                  required=""
                                />
                              </div>
                            </div>
                            <div class="col-md-4">
                              <div class="form-group">
                                <label class="fs-12  brand-dblue">State</label
                                ><input
                                  type="text"
                                  class="form-control "
                                  placeholder="Donor's resident state"
                                  id="address"
                                  required=""
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-4">
                              <div class="form-group">
                                <label class="fs-12  brand-dblue"
                                  >Office Strt No. &amp; strt name
                                  (Optional)</label
                                ><input
                                  type="text"
                                  class="form-control "
                                  placeholder="Donor's Office street"
                                  id="address"
                                />
                              </div>
                            </div>
                            <div class="col-md-4">
                              <div class="form-group">
                                <label class="fs-12  brand-dblue"
                                  >Office City/town (Optional)</label
                                ><input
                                  type="text"
                                  class="form-control "
                                  placeholder="Donor's office town/city"
                                  id="address"
                                />
                              </div>
                            </div>
                            <div class="col-md-4">
                              <div class="form-group">
                                <label class="fs-12  brand-dblue"
                                  >Office State (Optional)</label
                                ><input
                                  type="text"
                                  class="form-control "
                                  placeholder="Donor's office state"
                                  id="address"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="fs-12  brand-dblue">Ethnicity</label
                            ><select
                              class="form-control  custom-select"
                              required=""
                              ><option value="">Select donor's ethnicity</option
                              ><option value="Yoruba">Yoruba</option
                              ><option value="Igbo">Igbo</option
                              ><option value="Hausa">Hausa</option
                              ><option value="Others">Others</option></select
                            >
                          </div>
                          <div class="form-group">
                            <label class="fs-12  brand-dblue"
                              >Can't find donor's ethnicity? Enter donor's
                              ethnicity here</label
                            ><input type="text" class="form-control " />
                          </div>
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="fs-12  brand-dblue"
                                  >Next of kin full name</label
                                ><input
                                  type="text"
                                  class="form-control "
                                  placeholder="Donor's next of kin's full name"
                                  required=""
                                />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="fs-12  brand-dblue"
                                  >Next of kin phone number</label
                                ><input
                                  type="number"
                                  class="form-control "
                                  placeholder="Donor's next of kin's phone number"
                                  required=""
                                  autocomplete="off"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-12">
                              <div class="form-group">
                                <label class="fs-12  brand-dblue"
                                  >Next of kin address</label
                                ><input
                                  type="text"
                                  class="form-control "
                                  placeholder="Donor's next of kin's resident address"
                                  required=""
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="fs-12  brand-dblue"
                                  >Emergency contact full name</label
                                ><input
                                  type="text"
                                  class="form-control "
                                  placeholder="Donor's emergency contact full name"
                                  required=""
                                />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="fs-12  brand-dblue"
                                  >Emergency contact phone number</label
                                ><input
                                  type="number"
                                  class="form-control "
                                  placeholder="Donor's emergency contact phone number"
                                  id="state"
                                  required=""
                                  autocomplete="off"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-6">
                              <label class="fs-12  brand-dblue"
                                >Choose Bank</label
                              ><select
                                class="form-control  custom-select"
                                required=""
                                ><option value="">Select Bank</option></select
                              >
                            </div>

                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="fs-12  brand-dblue"
                                  >Emergency contact address</label
                                ><input
                                  type="text"
                                  class="form-control "
                                  placeholder="Donor's emergency contact address"
                                  id="address"
                                  required=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="ui-line bg-silverlight"></div>
                      <div class="mt-1">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group mt-3">
                              <div class="d-flex align-items-center">
                                <div class="ml-auto">
                                  <button
                                    type="submit"
                                    class="btn btn--sm bg-brand-green onwhite "
                                  >
                                    ADD DONOR
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
            </div>
          </section>
        </div>
      </div>
      <!-- footer -->
      <BaseDashboardFooter />
    </div>
  </main>
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

.fs-12 {
  font-size: 12px !important;
}

.ui-hide {
  display: none !important;
}

.btn.ghost.ghost-green {
  border-color: #06dca9;
  color: #06dca9;
}

.btn {
  padding: 0.5rem 1.3rem;
  width: 150px !important;
  font-size: 16px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.ui-full-bg-norm {
  @include ui-full-bg-norm("../../assets/img/fullsearchimg.svg");
}

@media screen and (max-width: 768px) {
  .ui-dashboard-card-header {
    display: block !important;
    .ui-card-title {
      margin-bottom: 1rem !important;
    }
  }

  .ui-dashboard-body.sdbr--open {
    padding-left: 0px !important;
  }

  .frm--card .ctrl--fnd {
    width: 100%;
  }
}

@media screen and (max-width: 360px) {
  .advance__search-mobile {
    flex-direction: column;
  }

  .ui-separate {
    padding: 0 !important;
  }

  .avatar,
  .avatar-blue {
    display: none !important;
  }
}
</style>
