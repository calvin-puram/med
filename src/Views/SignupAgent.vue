<template>
  <section class="ui__wrapper-large ui-full-bg-norm ui-height-full">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8 col-lg-6 mx-auto">
          <div class="ui-wrapper">
            <form
              class="form--white frm--cstm auth was-validated"
              @submit.prevent="handleReg"
            >
              <div class="form-space">
                <div class="bg-white ui-rounded-small">
                  <div class="ui-text-left auth--brand mb-5 pt-1">
                    <img
                      src="@/assets/img/medbarn.svg"
                      alt="med barn"
                      style="width: 100px; margin-top: 10px"
                    />
                    <p class=" brand-dgreen fs-20 mb-0 font-weight-bold mt-4">
                      Create your account
                    </p>

                    <small class="mb-5"
                      >Sign up with either your email and password</small
                    >
                  </div>

                  <div class="form-group">
                    <label for="login-name">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Input email "
                      id="login-name"
                      required
                      v-model="email"
                    />
                  </div>

                  <div class="form-group">
                    <label for="login-password">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Input email "
                      id="login-password"
                      required
                      v-model="password"
                    />
                  </div>

                  <div class="forgotpassword__wrapper">
                    <span>
                      <router-link class="link__text" to="/forgot_password"
                        >Forgot Password?</router-link
                      >
                    </span>
                  </div>

                  <button
                    :disabled="getloading"
                    type="submit"
                    class=" btn bg-dark-blue btn--sm  onwhite"
                  >
                    Submit
                    <i v-if="getloading" class="fas fa-spinner fa-spin ml-4">
                    </i>
                  </button>
                  <div class="ui-text-center mt-2 mb-2">
                    Already have an account?
                    <router-link class="dark-blue fs-14" to="/">
                      Sign in</router-link
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
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Signin",
  computed: mapGetters(["getloading", "getAuthErr"]),
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
    async handleReg() {
      const payload = {
        email: this.email,
        password: this.password,
        api: "https://medbarncore.herokuapp.com/api/v1/identity/register",
      };
      await this.login(payload).then((res) => {
        if (res && res.data) {
          this.$router.push("/agent/donors");
        } else {
          this.$noty.error(this.getAuthErr[0]);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../design/";
.ui-full-bg-norm {
  @include ui-full-bg-norm("../assets/img/authbg.png");
}

.link__text {
  font-size: 0.9rem;
  font-weight: 400;
  color: $onboarding-btn;
  text-decoration: underline;
  cursor: pointer;
}

.forgotpassword__wrapper {
  margin-top: -1rem;
}

.frm--cstm.auth .btn {
  width: 100%;
  height: 50px;
  margin-top: 3rem;
}

@media (max-width: 789px) {
  form--white .bg-white {
    padding: 1rem 1.8rem;
  }

  form--white .mrgt3 {
    margin-top: 1.8rem !important;
    margin-bottom: 2rem !important;
  }

  .form-space {
    padding-left: 0.5em;
    padding-right: 0.5em;
  }

  form--white .btn {
    width: 100%;
  }

  form--white .d-flex {
    display: block !important;
    text-align: center;
  }

  ui__wrapper-large {
    min-height: 100vh;
  }

  .ml-auto {
    margin-left: 0;
  }

  .frm--cstm.auth .btn {
    margin-top: 0.9rem;
  }
}
</style>
