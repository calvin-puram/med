<template>
  <BaseDonorStepWrapper
    text="Create a donor/surrogate account"
    step="2/5"
    desc="Create your username and password"
    :email="form.email"
    :password="form.password"
    :confirmPassword="form.confirmPassword"
  >
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label for="username">Username</label>

          <input
            type="email"
            class="form-control "
            placeholder="e.g sleekmacho@example.com"
            id="username"
            required
            v-model="form.email"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            class="form-control "
            placeholder="Enter your password"
            id="password"
            required
            v-model="form.password"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            class="form-control "
            placeholder="Enter your password again"
            id="password"
            required
            v-model="form.confirmPassword"
          />
        </div>
      </div>
    </div>

    <!-- <div class="ui-text-center mt-2 mb-2">
      Don't have an account?
      <router-link class="dark-blue fs-14" to="/register"> Sign In</router-link>
    </div> -->
  </BaseDonorStepWrapper>
</template>

<script>
export default {
  data() {
    return {
      form: {
        confirmPassword: "",
        password: "",
        email: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
