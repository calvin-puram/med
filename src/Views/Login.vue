<template>
  <div class="login">
    <section
      class="login__ui__wrapper-large login__ui-full-bg-norm ui-height-full"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8 col-lg-6 mx-auto">
            <div class="login__ui-wrapper">
              <form class="login__form--white frm--cstm auth">
                <div class="login__form-space">
                  <div class="bg-white ui-rounded-small">
                    <div class="ui-text-left auth--brand mrgb3 pdt1">
                      <img
                        src="https://dms.medbarnagency.com/images/assets/medbarn.jpeg"
                        alt="med barn"
                      />
                      <p
                        class="font-quicksandregular brand-dgreen fs-20 mrgb0 font-weight-bold"
                      >
                        Sign in to your account
                      </p>

                      <small
                        >Sign in with either your email or phone number</small
                      >
                    </div>

                    <div class="form-group">
                      <label class="fs-14 font-quicksandsemibold brand-dblue"
                        >Email or Phone</label
                      >
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Input email or phone"
                        id="login-name"
                        required=""
                        style="
                          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=');
                        "
                      />
                    </div>

                    <div class="form-group">
                      <label class="fs-14 font-quicksandsemibold brand-dblue"
                        >Your password</label
                      ><input
                        type="password"
                        class="form-control font-quicksandregular"
                        ng-model="password"
                        placeholder="Enter your password"
                        id="login-pass"
                        required=""
                        style="
                          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=');
                          cursor: auto;
                        "
                      />
                    </div>

                    <div class="form-group mrgt3 mrgb0">
                      <div class="d-flex align-items-center">
                        <span>
                          <router-link
                            style="cursor: pointer"
                            to="forgot_password"
                            >Forgot Password?</router-link
                          >
                        </span>
                        <div class="ml-auto">
                          <button
                            type="submit"
                            class="btn bg-brand-green onwhite font-quicksandmedium btn-sm"
                          >
                            SIGN IN
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <div class="ui-text-center mrgt2 mrgb2">
                <button class="brand-dgreen font-quicksandsemibold fs-14">
                  <router-link to="/register"
                    >Don't have an account? Sign up</router-link
                  >
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
  name: "Login",
};
</script>

<style lang="scss">
@import "../design/";
.login {
  @include background-img(
    "https://dms.medbarnagency.com/images/assets/img@auth-in.svg"
  );
  &__ui__wrapper-large {
    width: 100%;
    min-height: 100vh;
    padding: 5em 0;
    padding-bottom: 0;
  }
  &__ui-wrapper {
    width: 100%;
    padding: 3em 0;
  }

  form {
    display: block;
    margin-top: 0em;
  }

  &__form-space {
    padding-left: 3em;
    padding-right: 3em;
  }

  &__form--white .bg-white {
    padding: 2rem 3rem;
  }

  .bg-white {
    background-color: #fff;
  }

  .ui-rounded-small {
    border-radius: 0.5em !important;
  }

  .ui-text-left {
    text-align: left !important;
  }

  .pdt1 {
    padding-top: 1em !important;
  }

  .mrgb3 {
    margin-bottom: 3em !important;
  }

  .auth--brand img {
    width: 80px;
  }

  img {
    border-style: none;
    vertical-align: middle;
    max-width: 100%;
  }

  .font-weight-bold {
    font-weight: 700 !important;
  }
  .brand-dgreen,
  .brand-dgreen button {
    color: #125747 !important;
    text-decoration: none;
    border: none;
    background: transparent;
  }
  .brand-dgreen,
  .brand-dgreen a {
    color: #125747 !important;
  }
  .font-quicksandregular,
  .font-quicksandregular a {
    font-family: "quicksandregular" !important;
  }
  .font-weight-bold {
    font-weight: 700 !important;
  }
  .mrgb0 {
    margin-bottom: 0 !important;
  }
  .fs-20 {
    font-size: 20px !important;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  //   email
  .brand-dblue,
  .brand-dblue a {
    color: #334261 !important;
  }
  .font-quicksandsemibold,
  .font-quicksandsemibold button {
    font-family: "quicksandsemibold" !important;
  }
  .fs-14 {
    font-size: 14px !important;
  }

  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  .frm--cstm.auth .form-control {
    height: 50px;
    padding: 0.4rem 1.3rem;
  }

  .frm--cstm .form-control {
    height: 45px;
    padding: 0.4rem 0.9rem;
    border-radius: 4px;
    border: 1px solid #d9e4f2;
    font-size: 1rem;
  }

  .form-control {
    height: 50px !important;
    padding: 0.4rem 1.3rem !important;
    border-radius: 4px !important;
    border: 1px solid #d9e4f2 !important;
    font-size: 1rem !important;
  }
  .mrgt3 {
    margin-top: 3em !important;
  }

  .btn {
    padding: 0.8rem 2rem;
    font-family: Poppins500;
    font-size: 16px;
    border-radius: 4px;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .frm--cstm.auth .btn {
    width: 160px;
    height: 50px;
  }

  .bg-brand-green {
    background-color: #06dca9 !important;
  }

  .onwhite,
  .onwhite a {
    color: #ffffff !important;
  }

  .ui-text-center {
    text-align: center !important;
  }

  .mrgt2 {
    margin-top: 2em !important;
  }
  .mrgb2 {
    margin-bottom: 2em !important;
  }
}

@media (max-width: 789px) {
  .login {
    &__form--white .bg-white {
      padding: 1rem 1.8rem;
    }

    &__form--white .mrgt3 {
      margin-top: 1.8rem !important;
      margin-bottom: 2rem !important;
    }

    .login__form-space {
      padding-left: 0.5em;
      padding-right: 0.5em;
    }

    &__form--white .btn {
      width: 100%;
    }

    &__form--white .d-flex {
      display: block !important;
      text-align: center;
    }

    &__ui__wrapper-large {
      min-height: 100vh;
    }

    .ml-auto {
      margin-left: 0;
    }

    .frm--cstm.auth .btn {
      margin-top: 0.9rem;
    }
  }
}
</style>
