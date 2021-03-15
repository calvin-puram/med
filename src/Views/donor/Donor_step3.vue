<template>
  <BaseDonorStepWrapper
    text="Create a donor/surrogate account"
    step="3/5"
    desc="Agent Number verification."
    :agent="form.agent"
  >
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label for="verification">Agent Number</label>

          <input
            type="text"
            class="form-control "
            placeholder="e.g MD/AG/219720"
            id="verification"
            required
            v-model="form.agent"
          />
        </div>
      </div>
    </div>

    <!-- <div class="ui-text-center mt-2 mb-2">
      Don't have an account?
      <router-link class="dark-blue fs-14" to="/register">
        Sign up</router-link
      >
    </div> -->
  </BaseDonorStepWrapper>
</template>

<script>
export default {
  data() {
    return {
      form: {
        agent: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
