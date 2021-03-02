<template>
  <section class="ui__wrapper-large ui-full-bg-norm ui-height-full">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8 col-lg-6 mx-auto">
          <div class="ui-wrapper">
            <form class="form--white frm--cstm auth">
              <div class="">
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

                      <span class="donor__textcolor">5/5</span>
                    </div>
                    <div class=" mb-2">
                      <p class=" brand-dgreen  mb-0 ">
                        Just a few more details to create your account
                      </p>
                    </div>

                    <small class="mb-5 donor__textcolor donor__text"
                      >We would like to know more about you, Select what you
                      would

                      <span class="d-block"
                        >like to do and select a clinic.</span
                      >
                    </small>
                  </div>

                  <form class="">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="fs-12  brand-dblue">Gender</label>
                          <select class="form-control  custom-select" required>
                            <option value="">select your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="Others">Others</option>
                          </select>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="genotype" class="fs-12  brand-dblue"
                            >Do you know your genotype? Enter here</label
                          >
                          <input
                            type="text"
                            class="form-control "
                            placeholder="e.g AA"
                            id="genotype"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="weight" class="fs-12  brand-dblue"
                            >Weight(kg)</label
                          >
                          <input
                            type="number"
                            class="form-control "
                            placeholder="e.g 30"
                            id="weight"
                            required
                          />
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="weight" class="fs-12  brand-dblue"
                            >Height(ft)
                          </label>
                          <input
                            type="number"
                            class="form-control "
                            placeholder="select your height"
                            id="weight"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="fs-12  brand-dblue"
                            >Donation type</label
                          >
                          <select class="form-control  custom-select" required>
                            <option value="">select donor type</option>
                            <option value="sperm">Sperm</option>
                            <option value="egg">Egg</option>
                            <option value="Others">Others</option>
                          </select>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="fs-12  brand-dblue">Education</label>
                          <select class="form-control  custom-select" required>
                            <option value="">select your education</option>
                            <option value="secondary">Scondary</option>
                            <option value="undergraduate">Undergraduate</option>
                            <option value="Others">Others</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="kin" class="fs-12  brand-dblue"
                            >Next of kin full name</label
                          >
                          <input
                            type="text"
                            class="form-control "
                            placeholder="Your next of kin's full name"
                            id="kin"
                            required
                          />
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="kinnum" class="fs-12  brand-dblue"
                            >Next of kin phone number</label
                          >
                          <input
                            type="text"
                            class="form-control "
                            placeholder="Your next of kin's phone number"
                            id="kinnum"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="kinaddr" class="fs-12  brand-dblue"
                            >Next of kin address</label
                          >
                          <input
                            type="text"
                            class="form-control "
                            placeholder="Your next of kin's address"
                            id="kinaddr"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label
                            for="emercontactaddr"
                            class="fs-12  brand-dblue"
                            >Emergency contact address</label
                          >
                          <input
                            type="text"
                            class="form-control "
                            placeholder="Your emergency contact address"
                            id="emercontactaddr"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div class="form-group  mb-4">
                      <div class="mb-5 mb-sm-0">
                        <label class="custom-control  "
                          ><input
                            type="checkbox"
                            class="custom-control-input"
                            name="example-inline-checkbox1"
                            required=""
                          /><span class="custom-control-label"
                            ><span>I accept &nbsp;</span>
                            <span class=" brand-green" style="cursor: pointer"
                              >terms &amp; conditions</span
                            ></span
                          ></label
                        >
                      </div>
                    </div>

                    <BaseDonorBtn title="CREATE ACCOUNT" />

                    <div class="back__btnText ui-text-center  fs-16 mt-3">
                      <span style="position: relative; top: 0px">
                        <img
                          src="@/assets/img/Intersection 1.svg"
                          alt="back arrow"
                        />
                      </span>
                      &nbsp;
                      <router-link to="/register">Go Back</router-link>
                    </div>

                    <div class="ui-text-center mt-5 mb-2">
                      Already have an account?
                      <router-link to="/" class="brand-green  fs-12">
                        Sign In</router-link
                      >
                    </div>
                  </form>
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

.fs-12 {
  font-size: 12px;
}

.donor__textcolor {
  color: #35a6c7;
}
@media (max-width: 789px) {
  .form--white .d-flex {
    display: flex !important ;
    text-align: left !important;
  }
}
</style>
