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

                      <span class="donor__textcolor">1/5</span>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between mb-2"
                    >
                      <p class=" brand-dgreen fs-20 mb-0 ">
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
                      >We need to verify your NIMC number before
                      <span class="d-block"> proceeding to sign up</span>
                    </small>
                  </div>

                  <div class="ui-text-center mt-2 mb-2">
                    Don't have an account?
                    <router-link class="brand-green" to="/register">
                      Sign up</router-link
                    >
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
export default {
  name: "Login",
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
</style>
