<template>
  <BaseDonorStepWrapper
    text="We need to verify your NIMC number before proceeding to sign up"
    step="1/5"
    desc="Create a donor/surrogate account"
  >
    <form class="">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="first-name">First name</label>

            <input
              type="text"
              class="form-control "
              placeholder="e.g. Abulbaki"
              id="first-name"
              required
              value=""
            />
          </div>
        </div>

        <div class="col-md-6">
          <div class="form-group">
            <label>Last name</label>
            <input
              type="text"
              class="form-control "
              placeholder="e.g. Shuaib"
              id="last-name"
              required
              value=""
            />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label>NIN number</label>
            <input
              type="number"
              class="form-control "
              placeholder="Enter your NIMC number here"
              id="address"
              required
            />
          </div>
        </div>
      </div>

      <BaseDonorBtn />
    </form>

    <div class="ui-text-center mt-2 mb-2">
      Don't have an account?
      <router-link class="dark-blue" to="/register"> Sign up</router-link>
    </div>
  </BaseDonorStepWrapper>
</template>

<script></script>

<style lang="scss" scoped></style>
