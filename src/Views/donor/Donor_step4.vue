<template>
  <BaseDonorStepWrapper
    text="Complete your profile."
    step="4/5"
    desc="Create a donor/surrogate account"
  >
    <form class="">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Date of birth</label>
            <datepicker
              placeholder="02/12/2020"
              input-class="form-control dob"
            ></datepicker>
          </div>
        </div>

        <div class="col-md-6">
          <div class="form-group">
            <label for="phone">Phone number</label>
            <input
              type="number"
              class="form-control "
              placeholder="e.g 081 0000 0000"
              id="phone"
              required
            />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="form-group select__padding">
            <label class="fs-12 brand-dblue">Country</label>
            <select class="form-control custom-select" required>
              <option value="">Select your Country</option>
              <option
                :value="country"
                v-for="country in countries"
                :key="country.split(0, 1)"
              >
                {{ country }}
              </option>
            </select>
          </div>
        </div>

        <div class="col-md-6">
          <div class="form-group">
            <label for="email">Email (Optional)</label>
            <input
              type="email"
              class="form-control "
              placeholder="e.g you@example.com"
              id="email"
              required
            />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label>Ethnicity</label>
            <select class="form-control  custom-select" required="">
              <option value="">Select your ethnicity</option>
              <option value="Yoruba">Yoruba</option>
              <option value="Igbo">Igbo</option>
              <option value="Hausa">Hausa</option>
              <option value="Others">Others</option>
            </select>
          </div>
        </div>

        <div class="col-md-12">
          <div class="form-group">
            <input
              type="text"
              class="form-control "
              placeholder="If you selected others, Enter donor ethnicity"
              id="eth"
            />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Resident Strt No. &amp; strt name</label>
            <input
              type="text"
              class="form-control "
              placeholder="Your resident street"
              id="address"
              required=""
              value=""
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label>City/town of residence</label>
            <input
              type="text"
              class="form-control "
              required=""
              placeholder="Your resident town/city"
              id=""
            />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>State of residence</label>
            <input
              type="text"
              class="form-control "
              required=""
              placeholder="Your resident state"
              id="address"
              value=""
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label>Office Strt No. &amp; strt name (Optional)</label>
            <input
              type="text"
              class="form-control "
              placeholder="Your Office street"
              id="address"
              value=""
            />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Office City/town (Optional)</label>
            <input
              type="text"
              class="form-control "
              placeholder="Your office town/city"
              id="address"
              value=""
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label>Office State (Optional)</label>
            <input
              type="text"
              class="form-control "
              placeholder="Your office state"
              id="address"
              value=""
            />
          </div>
        </div>
      </div>

      <BaseDonorBtn />

      <div class="ui-text-center mt-2 mb-2">
        Don't have an account?
        <router-link class="dark-blue fs-14" to="/register">
          Sign up</router-link
        >
      </div>
    </form>
  </BaseDonorStepWrapper>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import axios from "axios";
export default {
  components: {
    Datepicker,
  },
  data() {
    return {
      countries: [],
    };
  },

  async mounted() {
    const { data } = await axios.get("https://restcountries.eu/rest/v2/all");
    data.forEach((country) => this.countries.push(country.name));
  },
};
</script>

<style lang="scss" scoped></style>
