<template>
  <div>
    <BaseLoader v-if="getloading" />
    <section class=" ui-full-bg-norm height" v-if="!getloading">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-9 mx-auto">
            <div class="ui-wrapper">
              <h3
                class=" onwhite fs-20  mt-2 font-weight-bold ui-text-center mb-5 "
              >
                Select your preferred account
              </h3>

              <div class="row">
                <div class="container">
                  <div class="col card__select">
                    <router-link
                      v-if="getDonorProfile !== null"
                      to="/home"
                      class="mb-3 card__select1"
                    >
                      <div
                        class="bg-white ui-rounded-small auth--bx ui-text-center"
                      >
                        <img
                          src="@/assets/img/donor.svg"
                          class="ui-avatar-medium"
                          alt="avatar"
                        />
                        <p class=" dark-blue fs-20 mb-0 mt-2 font-weight-bold">
                          Donor
                        </p>
                        <p class=" normal-text  fs-14 mb-0 mt-1">
                          Make a donation. Egg, Sperm or Surrogate
                        </p>
                      </div>
                    </router-link>

                    <router-link
                      v-if="getClinicProfile !== null"
                      to="/clinic/home"
                      class=" mb-3 card__select2"
                    >
                      <div
                        class="bg-white ui-rounded-small auth--bx ui-text-center"
                      >
                        <img
                          src="@/assets/img/clinic.svg"
                          class="ui-avatar-medium"
                          alt="avatar"
                        />
                        <p class=" dark-blue fs-20 mb-0 mt-2 font-weight-bold">
                          Clinic
                        </p>
                        <p class=" normal-text fs-14 mb-0 mt-1">
                          Manage Donors, manage<br />
                          surrogates
                        </p>
                      </div>
                    </router-link>

                    <router-link
                      to="/agent/donors"
                      class=" mb-3 card__select3"
                      v-if="getAgentProfile !== null"
                    >
                      <div
                        class="bg-white ui-rounded-small auth--bx ui-text-center"
                      >
                        <img
                          src="@/assets/img/agent.svg"
                          class="ui-avatar-medium"
                          alt="avatar"
                        />
                        <p class=" dark-blue fs-20 mb-0 mt-2 font-weight-bold">
                          Agent
                        </p>
                        <p class=" normal-text fs-14 mb-0 mt-1">
                          Source for donors and clinics
                        </p>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>

              <!-- <div class="ui-separate"></div> -->
              <!-- <div class="ui-text-center mt-2 mb-2">
              <router-link to="/" class="onwhite fs-16">
                Already have an account? Sign In
              </router-link>
            </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Selection",
  computed: mapGetters([
    "getAgentProfile",
    "getClinicProfile",
    "getDonorProfile",
    "getloading",
  ]),
  data() {
    return {};
  },
  mounted() {
    Promise.all([
      this.$store.dispatch("getAgentProfileIfAny"),
      this.$store.dispatch("getClinicProfileIfAny"),
      this.$store.dispatch("getDonorIfAny"),
    ]);
  },
};
</script>

<style lang="scss" scoped>
@import "../design/";
.ui-full-bg-norm {
  @include ui-full-bg-norm("../assets/img/authbg.png");
}
.height {
  height: 100vh;
  overflow: hidden;
}
.card__select {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

.card__select1,
.card__select2,
.card__select3 {
  flex: 1;
  margin: 1rem;
  margin-top: -5rem;
}

.auth--bx.ui-text-center {
  padding: 2.3rem 2rem;
  height: 289px;
}

.font-weight-bold {
  font-weight: 700 !important;
}

.auth--bx.ui-text-center {
  padding: 2.3rem 2rem;
}

.ui-avatar-medium {
  width: 100px;
  height: 100px;
}

.ui-separate {
  display: block;
  width: 100%;
  padding: 32px 0;
}
</style>
