<template>
  <div class="login">
    <section
      class="login__ui__wrapper-large login__ui-full-bg-norm ui-height-full"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8 col-lg-6 mx-auto">
            <div class="login__ui-wrapper">
              <form class="login__form--white frm--cstm auth was-validated">
                <div class="login__form-space">
                  <div class="bg-white ui-rounded-small">
                    <div class="ui-text-left auth--brand mrgb3 pdt1">
                      <p
                        class="font-quicksandregular brand-dgreen fs-20 mrgb0 font-weight-bold"
                      >
                        Reset your password
                      </p>
                      <small>Input the email you register with</small>
                    </div>

                    <div class="form-group">
                      <label class="fs-14 font-quicksandsemibold brand-dblue"
                        >Email or Phone</label
                      >
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Input email "
                        id="login-name"
                        required=""
                        style="
                          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=');
                        "
                      />
                    </div>

                    <div class="form-group mrgt3 mrgb0">
                      <div class="d-flex align-items-center">
                        <span>
                          <router-link
                            class="font-quicksandlight"
                            style="cursor: pointer"
                            to="/"
                            >SIGN IN</router-link
                          >
                        </span>
                        <div class="ml-auto">
                          <button
                            type="submit"
                            class="btn bg-brand-green onwhite font-quicksandmedium btn-sm"
                          >
                            RESET PASSWORD
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div class="ui-text-center mrgt2 mrgb2">
                <button class="brand-dgreen font-quicksandsemibold fs-14">
                  Don't have an account?
                  <router-link to="/register">Sign up</router-link>
                </button>
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
  name: "ForgotPasssword",
};
</script>

<style lang="scss" scoped>
.login {
  .frm--cstm.auth .btn {
    width: 190px;
    height: 50px;
    font-size: 14px;
  }
}
</style>
