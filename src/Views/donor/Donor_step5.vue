<template>
  <BaseDonorStepWrapper
    text="We would like to know more about you, Select what you would like to do and select a clinic."
    step="4/5"
    desc="Just a few more details to create your account"
    backbtn
  >
    <form class="">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Gender</label>
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
            <label for="genotype">Do you know your genotype? Enter here</label>
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
            <label for="weight">Weight(kg)</label>
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
            <label for="weight">Height(ft) </label>
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
            <label>Donation type</label>
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
            <label>Education</label>
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
            <label for="kin">Next of kin full name</label>
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
            <label for="kinnum">Next of kin phone number</label>
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
            <label for="kinaddr">Next of kin address</label>
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
            <label for="emercontactaddr">Emergency contact address</label>
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

      <div class="form-group  mb-4  ">
        <div class="mb-5 mb-sm-0">
          <label
            class="custom-control custom-checkbox d-flex align-items-center"
            ><input
              type="checkbox"
              class="custom-control-input "
              name="example-inline-checkbox1"
              required
            /><span class="custom-control-label"
              ><span class="normal-text">I accept &nbsp;</span>
              <span class=" dark-blue" style="cursor: pointer"
                >terms &amp; conditions</span
              ></span
            ></label
          >
        </div>
      </div>

      <BaseDonorBtn />

      <div class="back__btnText ui-text-center  fs-14 mt-3">
        <span style="position: relative; top: 0px">
          <img src="@/assets/img/Intersection 1.svg" alt="back arrow" />
        </span>
        &nbsp;
        <router-link to="/register">Go Back</router-link>
      </div>

      <div class="ui-text-center mt-3 mb-2">
        Already have an account?
        <router-link to="/" class="dark-blue  fs-14"> Sign In</router-link>
      </div>
    </form>
  </BaseDonorStepWrapper>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
