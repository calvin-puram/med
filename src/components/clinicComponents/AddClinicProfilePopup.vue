<template>
  <div v-if="getClinicProfile === null">
    <b-modal
      size="lg"
      ref="my-modal"
      hide-footer
      hide-header
      no-close-on-backdrop
      no-close-on-esc
    >
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
                  Add a clinic Profile
                </p>
                <div class=" centralize"></div>
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

                <div class=" center_btn mt-4">
                  <button
                    type="submit"
                    class="btn btn-adj btn-block bg-dark-blue onwhite  btn--sm"
                  >
                    Add Profile
                    <!-- <i
                      v-if="getclinicaddload"
                      class="fas fa-spinner fa-spin ml-4"
                    >
                    </i> -->
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <!-- <b-button class="mt-3" variant="outline-danger" block @click="hideModal"
        >Close Me</b-button
      >
      <b-button
        class="mt-2"
        variant="outline-warning"
        block
        @click="toggleModal"
        >Toggle Me</b-button
      > -->
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import states from "@/Utils/state";
export default {
  computed: mapGetters(["getClinicProfile", "getloading"]),
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
            this.$store.dispatch("getClinicProfileIfAny");
            this.hideModal();
            this.$noty.success("clinic profile added successfully!");
          } else {
            this.$noty.error("something unexpected hapens");
          }
        });
      }
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
  },

  mounted() {
    this.showModal();
    this.$store.dispatch("getClinicProfileIfAny");
  },
};
</script>
