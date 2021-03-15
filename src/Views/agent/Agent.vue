<template>
  <section class="ui__wrapper-large ui-full-bg-norm ui-height-full">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8 mx-auto">
          <div class="ui-wrapper">
            <form
              class="frm--white frm--cstm auth signin-form was-validated"
              @submit.prevent="handleSubmit"
            >
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

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="first-name">First name</label>

                          <input
                            type="text"
                            class="form-control "
                            placeholder="e.g. Pedro"
                            id="first-name"
                            required
                            v-model="form.firstName"
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
                            required
                            v-model="form.lastName"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="IDNO">ID Number</label>
                          <input
                            type="text"
                            class="form-control "
                            placeholder="Enter your ID number"
                            id="IDNO"
                            required
                            v-model="form.IDNO"
                          />
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="IDType">ID Type</label>
                          <input
                            type="text"
                            class="form-control "
                            placeholder="Enter your ID type"
                            id="IDType"
                            v-model="form.IDType"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Date of Birth</label>
                          <datepicker
                            placeholder="Select date of establishment"
                            input-class="form-control"
                            v-model="form.DOB"
                          ></datepicker>
                        </div>
                      </div>
                    </div>

                    <div class="form-group  mb-0 mt-3">
                      <div class="mb-5 mb-sm-0">
                        <label
                          class="custom-control  custom-checkbox d-flex align-items-center"
                          ><input
                            v-model="form.terms"
                            type="checkbox"
                            class="custom-control-input"
                            name="example-inline-checkbox1"
                            required
                          /><span class="custom-control-label"
                            ><span class="normal-text">I accept &nbsp;</span>
                            <span class=" dark-blue" style="cursor: pointer"
                              >terms &amp; conditions</span
                            ></span
                          ></label
                        >
                      </div>

                      <div class="ml-auto center_btn mt-4">
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

                      <!-- <div class="ui-text-center mt-5 mb-2">
                          Already have an account?
                          <router-link to="/" class="dark-blue  fs-14">
                            Sign In</router-link
                          >
                        </div> -->
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
import Datepicker from "vuejs-datepicker";
import states from "@/Utils/state";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Datepicker,
  },
  computed: mapGetters(["getloading"]),
  data() {
    return {
      states,
      form: {
        firstName: "",
        lastName: "",
        IDNO: "",
        IDType: "",
        DOB: "",
        terms: false,
      },
    };
  },
  methods: {
    ...mapActions(["addAgentProfile"]),
    handleSubmit() {
      if (this.form.terms) {
        const data = {
          FirstName: this.form.firstName,
          LastName: this.form.lastName,
          IDNO: this.form.IDNO,
          IDType: this.form.IDType,
          DOB: this.form.DOB,
        };
        this.addAgentProfile(data).then((res) => {
          if (res && res.data === true) {
            this.$router.push("/agent/donors");
          } else {
            this.$noty.error("invalid credentials");
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

.custom-checkbox {
  margin-top: -1rem;
}
</style>
