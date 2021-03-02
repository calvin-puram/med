<template>
  <section class="ui__wrapper-large ui-full-bg-norm ui-height-full">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8 col-lg-6 mx-auto">
          <div class="ui-wrapper">
            <form class="form--white frm--cstm auth">
              <div class="form-space">
                <div class="bg-white ui-rounded-small">
                  <div class="ui-text-left auth--brand mb-5 pt-1">
                    <div
                      class="d-flex align-items-center justify-content-between mb-1"
                    >
                      <img
                        src="@/assets/img/medbarn.svg"
                        alt="med barn"
                        style="width: 100px; margin-top: 10px"
                      />

                      <span class="donor__textcolor">4/5</span>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between mb-2"
                    >
                      <p class=" brand-dgreen  mb-0 ">
                        Create a donor/surrogate account
                      </p>

                      <div class="back__btnText  fs-16">
                        <span style="position: relative; top: 0px">
                          <img
                            src="@/assets/img/Intersection 1.svg"
                            alt="back arrow"
                          />
                        </span>
                        &nbsp;
                        <router-link to="/register">Go Back</router-link>
                      </div>
                    </div>

                    <small class="mb-5 donor__textcolor donor__text"
                      >Complete your profile
                    </small>
                  </div>

                  <form class="">
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
                          <label for="phone" class="fs-12  brand-dblue"
                            >Phone number</label
                          >
                          <input
                            type="number"
                            class="form-control "
                            placeholder="e.g 081 0000 0000"
                            id="phone"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group select__padding">
                          <label class="fs-12 brand-dblue">Country</label>
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

                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="email" class="fs-12  brand-dblue"
                            >Email (Optional)</label
                          >
                          <input
                            type="email"
                            class="form-control "
                            placeholder="e.g you@example.com"
                            id="email"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="fs-12  brand-dblue">Ethnicity</label>
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
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="fs-12  brand-dblue"
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
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="fs-12  brand-dblue"
                            >City/town of residence</label
                          >
                          <input
                            type="text"
                            class="form-control "
                            required=""
                            placeholder="Your resident town/city"
                            id=""
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="fs-12  brand-dblue"
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
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="fs-12  brand-dblue"
                            >Office Strt No. &amp; strt name (Optional)</label
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
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="fs-12  brand-dblue"
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
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="fs-12  brand-dblue"
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

                    <BaseDonorBtn title="PROCEED" />

                    <div class="ui-text-center mt-2 mb-2">
                      Don't have an account?
                      <router-link class="brand-green" to="/register">
                        Sign up</router-link
                      >
                    </div>
                  </form>
                </div>
              </div>
            </form>
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
@import "../../design/";
.ui-full-bg-norm {
  @include ui-full-bg-norm("../../assets/img/authbg.svg");
}
.donor__text {
  width: 100px !important;
}

.donor__textcolor {
  color: #35a6c7;
}

.fs-12 {
  font-size: 12px;
}

@media (max-width: 789px) {
  .form--white .d-flex {
    display: flex !important ;
    text-align: left !important;
  }
}
</style>
