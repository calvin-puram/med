<template>
  <section class="ui__wrapper-large ui-full-bg-norm ui-height-full">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-9 mx-auto">
          <div class="ui-wrapper">
            <h3
              class=" onwhite fs-20  mt-2 font-weight-bold ui-text-center mb-5 "
            >
              Create your preferred account
            </h3>

            <div class="row">
              <router-link to="/register/donor_step1" class="col-lg-4 mb-3">
                <div>
                  <div
                    class="bg-white ui-rounded-small auth--bx ui-text-center"
                  >
                    <img
                      src="@/assets/img/donor.svg"
                      class="ui-avatar-medium"
                      alt="avatar"
                    />
                    <p class=" brand-green fs-20 mb-0 mt-2 font-weight-bold">
                      Donor
                    </p>
                    <p class=" brand-dgreen fs-14 mb-0 mt-1">
                      Make a donation. Egg, Sperm or Surrogate
                    </p>
                  </div>
                </div>
              </router-link>

              <router-link to="/register/clinic" class="col-lg-4 mb-3">
                <div>
                  <div
                    class="bg-white ui-rounded-small auth--bx ui-text-center"
                  >
                    <img
                      src="@/assets/img/clinic.svg"
                      class="ui-avatar-medium"
                      alt="avatar"
                    />
                    <p class=" brand-green fs-20 mb-0 mt-2 font-weight-bold">
                      Clinic
                    </p>
                    <p class=" brand-dgreen fs-14 mb-0 mt-1">
                      Manage Donors, manage<br />
                      surrogates
                    </p>
                  </div>
                </div>
              </router-link>

              <router-link to="/register/agent" class="col-lg-4 mb-3">
                <div>
                  <div
                    class="bg-white ui-rounded-small auth--bx ui-text-center"
                  >
                    <img
                      src="@/assets/img/agent.svg"
                      class="ui-avatar-medium"
                      alt="avatar"
                    />
                    <p class=" brand-green fs-20 mb-0 mt-2 font-weight-bold">
                      Agent
                    </p>
                    <p class=" brand-dgreen fs-14 mb-0 mt-1">
                      Source for donors and clinics
                    </p>
                  </div>
                </div>
              </router-link>
            </div>

            <div class="ui-separate"></div>
            <div class="ui-text-center mt-2 mb-2">
              <router-link to="/" class="onwhite fs-16">
                Already have an account? Sign In
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style lang="scss" scoped>
@import "../design/";
.ui-full-bg-norm {
  @include ui-full-bg-norm("../assets/img/authbg.svg");
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
