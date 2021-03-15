<template>
  <section class="ui__wrapper-large ui-full-bg-norm ui-height-full">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8 col-lg-6 mx-auto">
          <div class="ui-wrapper">
            <form
              class="form--white frm--cstm auth was-validated"
              @submit.prevent="navigateNext"
            >
              <div>
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

                      <span class="donor__textcolor">{{ step }}</span>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between auth--brand mb-2 mt-4"
                    >
                      <p class=" dark-blue-bold  mb-0 fs-16">
                        {{ desc }}
                      </p>

                      <div class="back__btnText" v-if="!backbtn">
                        <span>
                          <img
                            src="@/assets/img/Intersection 1.svg"
                            alt="back arrow"
                          />
                        </span>
                        &nbsp;
                        <router-link to="/add-profiles">Go Back</router-link>
                      </div>
                    </div>

                    <p class="mb-5 donor__textcolor  donor__width ">
                      {{ text }}
                    </p>
                  </div>
                  <slot></slot>

                  <div class="ml-auto center_btn">
                    <button
                      :disabled="getloading"
                      type="submit"
                      class="btn btn-adj btn-block bg-dark-blue onwhite my-4  btn--sm"
                    >
                      <div v-if="!getloading">
                        <span>{{ nextBtnText() }}</span>
                        <span v-if="nextBtnText() === 'PROCEED'"
                          ><img
                            src="@/assets/img/login.png"
                            alt="login"
                            class="ml-2"
                          />
                        </span>
                      </div>

                      <div v-if="getloading">
                        <span>{{ nextBtnText() }}</span>
                        <i class="fas fa-spinner fa-spin ml-4"> </i>
                      </div>
                    </button>
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
import { mapActions, mapGetters } from "vuex";
export default {
  computed: mapGetters(["getloading", "getAuthErr"]),
  props: {
    step: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    backbtn: {
      type: Boolean,
      required: false,
    },
    FirstName: {
      type: String,
      required: false,
    },
    LastName: {
      type: String,
      required: false,
    },
    NIMCNO: {
      type: String,
      required: false,
    },
    confirmPassword: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    agent: {
      type: String,
      required: false,
    },
    emergencyfullname: {
      type: String,
      required: false,
    },
    emergencyphone: {
      type: String,
      required: false,
    },
    religion: {
      type: String,
      required: false,
    },
    complexion: {
      type: String,
      required: false,
    },
    ethnicity: {
      type: String,
      required: false,
    },
    DOB: {
      type: Date,
      required: false,
    },
    nationality: {
      type: String,
      required: false,
    },

    gender: {
      type: String,
      required: false,
    },
    height: {
      type: String,
      required: false,
    },
    weight: {
      type: String,
      required: false,
    },
    education: {
      type: String,
      required: false,
    },
    languages: {
      type: String,
      required: false,
    },
    kinfullname: {
      type: String,
      required: false,
    },
    kinphone: {
      type: String,
      required: false,
    },
    kinaddress: {
      type: String,
      required: false,
    },
  },
  methods: {
    ...mapActions([
      "verifyDonorNIMC",
      "login",
      "verifyDonorAgent",
      "addDonorProfile",
    ]),
    nextBtnText() {
      if (this.$route.name === "Donor_step5") {
        return "CREATE ACCOUNT";
      }
      return "PROCEED";
    },
    togglePrevious() {
      if (this.$route.name === "Donor_step1") {
        return false;
      }
      return true;
    },
    navigateNext() {
      // this.nextBtnText = "PROCEED";
      if (this.$route.name === "Donor_step1") {
        const data = {
          FirstName: this.FirstName,
          LastName: this.LastName,
          NIMCNO: this.NIMCNO,
        };
        // this.verifyDonorNIMC(data).then(res => {
        //   if(res && res.data) {
        //     this.$router.push("/register/donor_step2");
        //   }else{
        //     this.$noty.error('verification failed')
        //   }
        // })

        this.$router.push("/register/donor_step2");
      } else if (this.$route.name === "Donor_step2") {
        if (this.password !== this.confirmPassword) {
          this.$noty.error("password don't match");
        } else {
          const data = {
            email: this.email,
            password: this.password,
            api: "https://medbarncore.herokuapp.com/api/v1/identity/register",
          };
          this.login(data).then((res) => {
            if (res && res.data.token) {
              this.$router.push("/register/donor_step3");
            } else {
              this.$noty.error(this.getAuthErr[0]);
            }
          });
        }
      } else if (this.$route.name === "Donor_step3") {
        const data = {
          AgencyNo: this.agent,
        };
        this.verifyDonorAgent(data).then((res) => {
          if (res && res.data) {
            this.$router.push("/register/donor_step4");
          } else {
            this.$noty.error(this.getAuthErr[0].message);
          }
        });
      } else if (this.$route.name === "Donor_step4") {
        const data = {
          EmergencycontactFullName: this.emergencyfullname,
          EmergencycontactPhoneNo: this.emergencyphone,
          Ethnicity: this.ethnicity,
          DOB: this.DOB,
          Religion: this.religion,
          Complexion: this.complexion,
          Nationality: this.nationality,
        };
        this.addDonorProfile(data).then((res) => {
          if (res && res.data) {
            this.$router.push("/register/donor_step5");
          } else {
            this.$noty.error(this.getAuthErr[0]);
          }
        });
      } else {
        // this.nextBtnTxt = "CREATE ACCOUNT";
        const data = {
          Languages: this.languages,
          Gender: this.gender,
          HeightFt: parseFloat(this.height),
          WeightKg: parseFloat(this.weight),
          HighestLevelEducation: this.education,
          NextKinFullName: this.kinfullname,
          NextKinPhoneNo: this.kinphone,
          NextKinAddress: this.kinaddress,
        };
        this.addDonorProfile(data).then((res) => {
          if (res && res.data) {
            this.$router.push("/home");
          } else {
            this.$noty.error(this.getAuthErr[0]);
          }
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../design/";
.ui-full-bg-norm {
  @include ui-full-bg-norm("../../assets/img/authbg.png");
}

.donor__textcolor {
  color: $brand-dgreen;
  font-weight: 100;
  opacity: 0.8;
}

.donor__width {
  width: 60%;
  font-size: 13px;
  font-weight: 600;
}

@media (max-width: 789px) {
  .form--white .d-flex {
    display: flex !important ;
    text-align: left !important;
  }

  .donor__width {
    width: 100%;
  }
}
</style>
