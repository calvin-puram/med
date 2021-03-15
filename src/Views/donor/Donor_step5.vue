<template>
  <BaseDonorStepWrapper
    text="We would like to know more about you, Select what you would like to do and select a clinic."
    step="5/5"
    desc="Just a few more details to create your account"
    backbtn
    :languages="form.languages"
    :gender="form.gender"
    :height="form.height"
    :weight="form.weight"
    :education="form.education"
    :kinfullname="form.kinfullname"
    :kinphone="form.kinphone"
    :kinaddress="form.kinaddress"
  >
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label>Gender</label>
          <select
            class="form-control  custom-select"
            required
            v-model="form.gender"
          >
            <option value="">select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>
      </div>

      <div class="col-md-6">
        <div class="form-group">
          <label>Education</label
          ><select
            class="form-control  custom-select"
            required
            v-model="form.education"
            ><option value="">Highest Level of Education</option
            ><option value="graduate">Graduate</option
            ><option value="master">Masters</option
            ><option value="PHD">PHD</option
            ><option value="undergraduate">Undergraduate</option
            ><option value="High school">High school</option
            ><option value="Basic">Basic</option
            ><option value="Not educated">Not educated</option></select
          >
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
            v-model="form.weight"
          />
        </div>
      </div>

      <div class="col-md-6">
        <div class="form-group">
          <label>Height(ft)</label
          ><select class="form-control  custom-select" v-model="form.height"
            ><option value="">Select your height</option
            ><option value="5.0">5′0″</option
            ><option value="5.1">5′1″</option
            ><option value="5.2">5′2″</option
            ><option value="5.3">5′3″</option
            ><option value="5.4">5′4″</option
            ><option value="5.5">5′5″</option
            ><option value="5.6">5′6″</option
            ><option value="5.7">5′7″</option
            ><option value="5.8">5′8″</option
            ><option value="5.9">5′9″</option
            ><option value="5.10">5′10″</option
            ><option value="5.11">5′11″</option
            ><option value="6.0">6′0″</option
            ><option value="6.1">6′1″</option
            ><option value="6.2">6′2″</option
            ><option value="6.3">6′3″</option
            ><option value="6.4">6′4″</option
            ><option value="6.5">6′5″</option
            ><option value="6.6">6′6″</option
            ><option value="6.7">6′7″</option
            ><option value="6.8">6′8″</option
            ><option value="6.9">6′9″</option
            ><option value="6.10">6′10″</option
            ><option value="6.11">6′11″</option
            ><option value="7.0">7′0″</option
            ><option value="7.1">7′1″</option
            ><option value="7.2">7′2″</option
            ><option value="7.3">7′3″</option
            ><option value="7.4">7′4″</option
            ><option value="7.5">7′5″</option></select
          >
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
            v-model="form.kinfullname"
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
            v-model="form.kinphone"
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
            v-model="form.kinaddress"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label for="emercontactaddr">Languages</label>
          <input
            type="text"
            class="form-control "
            placeholder="Enter languages seperated by comma"
            id="emercontactaddr"
            required
            v-model="form.languages"
          />
        </div>
      </div>
    </div>

    <div class="form-group  mb-4  ">
      <div class="mb-5 mb-sm-0">
        <label class="custom-control custom-checkbox d-flex align-items-center"
          ><input
            v-model="form.terms"
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

    <div class="back__btnText ui-text-center  fs-14 mt-3">
      <span style="position: relative; top: 0px">
        <img src="@/assets/img/Intersection 1.svg" alt="back arrow" />
      </span>
      &nbsp;
      <router-link class="back__btnText" to="/add-profiles"
        >Go Back</router-link
      >
    </div>

    <!-- <div class="ui-text-center mt-3 mb-2">
        Already have an account?
        <router-link to="/" class="dark-blue  fs-14"> Sign In</router-link>
      </div> -->
  </BaseDonorStepWrapper>
</template>

<script>
export default {
  data() {
    return {
      form: {
        languages: "",
        gender: "",
        height: "",
        weight: "",
        education: "",
        kinfullname: "",
        kinphone: "",
        kinaddress: "",
        terms: false,
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
