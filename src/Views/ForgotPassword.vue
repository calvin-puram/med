<template>
  <section class="ui__wrapper-large ui-full-bg-norm ui-height-full">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8 col-lg-6 mx-auto">
          <div class="ui-wrapper">
            <form class="form--white frm--cstm auth was-validated">
              <div class="form-space">
                <div class="bg-white ui-rounded-small">
                  <div class="ui-text-left auth--brand mb-3 pt-1">
                    <p class=" brand-dgreen fs-20 mb-0 font-weight-bold">
                      Reset your password
                    </p>
                    <small>Input the email you register with</small>
                  </div>

                  <div class="form-group">
                    <label>Email or Phone</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Input email "
                      id="login-name"
                      required
                    />
                  </div>

                  <div class="form-group mt-4 mb-0">
                    <div class="d-flex align-items-center auth--brand">
                      <span>
                        <router-link
                          class="brand-dgreen"
                          style="cursor: pointer"
                          to="/"
                          >SIGN IN</router-link
                        >
                      </span>
                      <div class="ml-auto">
                        <button
                          type="submit"
                          class="btn bg-dark-blue onwhite  btn--sm"
                        >
                          RESET PASSWORD
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="ui-text-center mt-5 mb-2">
                    <div class="  fs-14">
                      Don't have an account?
                      <router-link class="dark-blue" to="/register">
                        Sign up</router-link
                      >
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
export default {
  name: "ForgotPasssword",
};
</script>

<style lang="scss" scoped>
@import "../design/";
.ui-full-bg-norm {
  @include ui-full-bg-norm("../assets/img/authbg.png");
}

.frm--cstm.auth .btn {
  width: 190px;
  height: 50px;
  font-size: 14px;
}
</style>
