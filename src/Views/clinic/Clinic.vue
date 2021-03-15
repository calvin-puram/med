<template>
  <section class="ui__wrapper-large ui-full-bg-norm ui-height-full">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8 mx-auto">
          <div class="ui-wrapper">
            <form
              class="frm--white frm--cstm auth signin-form was-validated"
              @submit.prevent="handlesubmit"
            >
              <div class="form-space">
                <div class="bg-white ui-rounded-small">
                  <div>
                    <div class="mb-3"></div>
                    <img
                      src="@/assets/img/medbarn.svg"
                      style="width: 100px; margin-top: 30px"
                      alt="quiv"
                    />
                    <div
                      class="d-flex align-items-center justify-content-between auth--brand mb-5 pt-5"
                    >
                      <p class=" brand-dgreen fs-20 mb-0 font-weight-bold">
                        Create a clinic account
                      </p>
                      <div class=" centralize">
                        <div class="back__btnText ">
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

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="clinic-name">Clinic name</label>

                          <input
                            type="text"
                            class="form-control "
                            placeholder="e.g. Pedro hospital"
                            id="clinic-name"
                            required
                            v-model="form.clinicName"
                          />
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="business-email">Business email</label>
                          <input
                            type="email"
                            class="form-control "
                            placeholder="e.g. you@yourwebsite.com"
                            id="business-email"
                            required
                            v-model="form.businessEmail"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group select__padding">
                          <label for="address">Official address</label>
                          <input
                            type="text"
                            class="form-control "
                            placeholder="Enter your address"
                            id="address"
                            required
                            v-model="form.address"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group select__padding">
                          <label for="desc">Business Description</label>
                          <input
                            type="text"
                            class="form-control "
                            placeholder="Describe your business"
                            id="desc"
                            required
                            v-model="form.description"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="state">State</label>
                          <select
                            class="form-control custom-select"
                            required
                            id="state"
                            v-model="form.state"
                          >
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

                    <div class="form-group  mb-0 mt-3">
                      <div class="mb-5 mb-sm-0">
                        <label
                          class="custom-control custom-checkbox d-flex align-items-center"
                          ><input
                            v-model="form.terms"
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

                      <div class=" center_btn">
                        <button
                          :disabled="getloading"
                          type="submit"
                          class="btn btn-adj btn-block bg-dark-blue onwhite  btn--sm"
                        >
                          CREATE ACCOUNT
                          <i
                            v-if="getloading"
                            class="fas fa-spinner fa-spin ml-4"
                          >
                          </i>
                        </button>
                      </div>

                     
                    </div>
                  </div>
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
import states from "@/Utils/state";
import { mapActions, mapGetters } from "vuex";
export default {
  computed: mapGetters(["getloading"]),
  data() {
    return {
      states,
      form: {
        clinicName: "",
        businessEmail: "",
        address: "",
        state: "",
        date: "",
        description: "",
        terms: false,
      },
    };
  },
  methods: {
    ...mapActions(["addClinicProfile"]),
    handlesubmit() {
      if (this.form.terms) {
        const data = {
          clinicName: this.form.clinicName,
          BusinessEmail: this.form.businessEmail,
          ClinicAddress: this.form.address,
          ClinicCity: this.form.state,
          BusinessDescription: this.form.description,
        };
        this.addClinicProfile(data).then((res) => {
          if (res && res.data === true) {
            this.$router.push("/clinic/home");
          } else {
            this.$noty.error("something unexpected hapens");
          }
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../design";

.ui-full-bg-norm {
  @include ui-full-bg-norm("../../assets/img/authbg.png");
}
.frm--cstm.auth .btn {
  width: 100%;
  height: 50px;
  margin-top: 2rem;
}

.custom-checkbox {
  margin-top: -1rem;
}
</style>
