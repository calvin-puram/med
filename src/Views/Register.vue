<template>
  <div class="register">
    <section
      class=" register__ui__wrapper-large register__ui-full-bg-norm ui-height-full"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-9 mx-auto">
            <div class="register__ui-wrapper">
              <h3
                class="font-quicksandregular brand-dgreen fs-20 mrgb0 mt-2 font-weight-bold ui-text-center mrgb3 mrgt1"
              >
                Create your preferred account
              </h3>
              <div class="row">
                <router-link to="/register/donor" class="col-lg-4 mb-3">
                  <div>
                    <div
                      class="bg-white ui-rounded-small auth--bx ui-text-center"
                    >
                      <img
                        src="https://dms.medbarnagency.com/images/assets/icon@donor-f.svg"
                        class="ui-avatar-medium"
                        alt="avatar"
                      />
                      <p
                        class="font-quicksandregular brand-dgreen fs-20 mrgb0 mt-2 font-weight-bold"
                      >
                        Donor
                      </p>
                      <p
                        class="font-quicksandregular brand-dgreen fs-14 mrgb0 mt-1"
                      >
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
                        src="https://dms.medbarnagency.com/images/assets/icon@clinic-f.svg"
                        class="ui-avatar-medium"
                        alt="avatar"
                      />
                      <p
                        class="font-quicksandregular brand-dgreen fs-20 mrgb0 mt-2 font-weight-bold"
                      >
                        Clinic
                      </p>
                      <p
                        class="font-quicksandregular brand-dgreen fs-14 mrgb0 mt-1"
                      >
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
                        src="https://dms.medbarnagency.com/images/assets/icon@agent-f.svg"
                        class="ui-avatar-medium"
                        alt="avatar"
                      />
                      <p
                        class="font-quicksandregular brand-dgreen fs-20 mrgb0 mt-2 font-weight-bold"
                      >
                        Agent
                      </p>
                      <p
                        class="font-quicksandregular brand-dgreen fs-14 mrgb0 mt-1"
                      >
                        Source for donors and clinics
                      </p>
                    </div>
                  </div>
                </router-link>
              </div>

              <div class="ui-separate"></div>
              <div class="ui-text-center mrgt2 mrgb2">
                <router-link
                  to="/"
                  class="brand-dgreen font-quicksandsemibold fs-16"
                >
                  Already have an account? Sign In
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style lang="scss" scoped>
.register {
  background: url("https://dms.medbarnagency.com/images/assets/img@auth-up.svg");

  &__ui__wrapper-large {
    width: 100%;
    min-height: 800px;
    padding: 5em 0;
    padding-bottom: 0;
  }

  &__ui-wrapper {
    width: 100%;
    padding: 3em 0;
  }

  .font-weight-bold {
    font-weight: 700 !important;
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

  .ui-text-center {
    text-align: center !important;
  }

  .fs-20 {
    font-size: 20px !important;
  }
  .fs-14 {
    font-size: 14px !important;
  }
  .fs-16 {
    font-size: 16px !important;
  }

  .auth--bx.ui-text-center {
    padding: 2.3rem 2rem;
  }

  .ui-rounded-small {
    border-radius: 0.5em !important;
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

  .mrgt2 {
    margin-top: 2em !important;
  }
  .mrgb2 {
    margin-bottom: 2em !important;
  }
}
</style>
