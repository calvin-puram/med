<template>
  <BaseDonorStepWrapper
    text="Complete your profile."
    step="4/5"
    desc="Create a donor/surrogate account"
    :emergencyfullname="form.emergencyfullname"
    :emergencyphone="form.emergencyphone"
    :ethnicity="form.ethnicity"
    :DOB="form.DOB"
    :religion="form.religion"
    :complexion="form.complexion"
    :nationality="form.nationality"
  >
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label>Date of birth</label>
          <datepicker
            v-model="form.DOB"
            placeholder="02/12/2020"
            input-class="form-control dob"
          ></datepicker>
        </div>
      </div>

      <div class="col-md-6">
        <div class="form-group">
          <label>Complexion</label
          ><select
            class="form-control  custom-select"
            required
            v-model="form.complexion"
            ><option value="">Select complexion</option
            ><option value="Albino">Albino</option
            ><option value="Black">Black</option
            ><option value="Dark">Dark</option
            ><option value="Yellow">Yellow</option
            ><option value="Dark Brown">Dark Brown</option
            ><option value="Fair">Fair</option
            ><option value="Light">Light</option
            ><option value="Light Brown">Light Brown</option
            ><option value="Medium">Medium</option
            ><option value="Medium Brown">Medium Brown</option
            ><option value="Olive">Olive</option
            ><option value="Ruddy">Ruddy</option
            ><option value="Sallow">Sallow</option
            ><option value="Other">Other</option></select
          >
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label id="phone-no">Nationality</label>
          <input
            type="text"
            class="form-control "
            required=""
            placeholder="e.g Nigerian"
            id="phone-no"
            v-model="form.nationality"
          />
        </div>
      </div>

      <div class="col-md-6">
        <div class="form-group">
          <label>Religion</label
          ><select
            class="form-control  custom-select"
            required
            v-model="form.religion"
            ><option value="">Select donor's religion</option
            ><option value="christian">Christian</option
            ><option value="islam">Islam</option
            ><option value="traditional">Traditional</option
            ><option value="others">Others</option></select
          >
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label>Ethnicity</label>
          <select
            class="form-control  custom-select"
            required
            v-model="form.ethnicity"
          >
            <option value="">Select your ethnicity</option>
            <option value="Yoruba">Yoruba</option>
            <option value="Igbo">Igbo</option>
            <option value="Hausa">Hausa</option>
            <option value="Others">Others</option>
          </select>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label id="phone-no">Emergency Contact Phone Number</label>
          <input
            type="number"
            class="form-control "
            required=""
            placeholder="Emergency Contact Phone Number"
            id="phone-no"
            v-model="form.emergencyphone"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label id="contact-name">Emergency Contact Full Name</label>
          <input
            type="text"
            class="form-control "
            placeholder="Emergency Contact Full Name"
            id="contact-name"
            v-model="form.emergencyfullname"
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
import Datepicker from "vuejs-datepicker";

export default {
  components: {
    Datepicker,
  },
  data() {
    return {
      form: {
        emergencyfullname: "",
        emergencyphone: "",
        ethnicity: "",
        DOB: "",
        religion: "",
        complexion: "",
        nationality: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
