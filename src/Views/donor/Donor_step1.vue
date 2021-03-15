<template>
  <BaseDonorStepWrapper
    text="We need to verify your NIMC number before proceeding to sign up"
    step="1/5"
    desc="Create a donor/surrogate account"
    :FirstName="form.FirstName"
    :LastName="form.LastName"
    :NIMCNO="form.NIMC"
  >
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
            v-model="form.FirstName"
          />
        </div>
      </div>

      <div class="col-md-6">
        <div class="form-group">
          <label for="last-name">Last name</label>
          <input
            type="text"
            class="form-control "
            placeholder="e.g. Shuaib"
            id="last-name"
            required
            v-model="form.LastName"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label for="NIMC">NIN number</label>
          <input
            type="text"
            class="form-control "
            placeholder="Enter your NIMC number here"
            id="NIMC"
            required
            v-model="form.NIMC"
          />
        </div>
      </div>
    </div>
  </BaseDonorStepWrapper>
</template>

<script>
export default {
  data() {
    return {
      form: {
        FirstName: "",
        LastName: "",
        NIMC: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
