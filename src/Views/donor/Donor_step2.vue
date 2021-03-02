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

                      <span class="donor__textcolor">2/5</span>
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
                      >Create your username and password
                    </small>
                  </div>

                  <form class="">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="username" class="fs-14  brand-dblue"
                            >Username</label
                          >

                          <input
                            type="text"
                            class="form-control "
                            placeholder="e.g sleekmacho"
                            id="username"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="fs-14  brand-dblue">Password</label>
                          <input
                            type="password"
                            class="form-control "
                            placeholder="Enter your password"
                            id="password"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="fs-14  brand-dblue"
                            >Confirm Password</label
                          >
                          <input
                            type="password"
                            class="form-control "
                            placeholder="Enter your password again"
                            id="password"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <BaseDonorBtn title="PROCEED" />
                  </form>

                  <div class="ui-text-center mt-2 mb-2">
                    Don't have an account?
                    <router-link class="brand-green" to="/register">
                      Sign In</router-link
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

  @media (max-width: 789px) {
    .form--white .d-flex {
      display: flex !important ;
      text-align: left !important;
    }
  }
}
</style>
