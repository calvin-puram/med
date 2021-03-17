<template>
  <div>
    <BaseLoader v-if="getloading" />
    <BaseWrapper
      dashboardName="Search Donors"
      :menuIcons="menuIcons"
      :toogleMenu="toogleMenu"
      bg__img="bg__img"
      bg__color="primary-color"
      profile="/clinic/profile"
      notification="/clinic/notifications"
      :profileName="
        getClinicProfile.clinicName ? getClinicProfile.clinicName : 'unknown'
      "
      profileStatus="clinic"
    >
      <section class="mt-2">
        <div class="ui-dashboard-card">
          <div class="ui-dashboard-card-header">
            <div>
              <div class="advance-search mt-4">
                <div
                  class="d-flex align-items-center justify-content-between advance__search-mobile"
                >
                  <h6>Advance search</h6>
                  <button
                    class="btn btn-primary onwhite btn--sm btn__small "
                    @click="handleReset"
                  >
                    Refresh Form
                  </button>
                </div>
                <form class="mt-5" @submit.prevent="handleSubmit">
                  <div class="row ">
                    <div class="col-md-3 mb-3">
                      <select
                        id="filt-gender"
                        class="form-control advance"
                        v-model="form.gender"
                        required
                        ><option value="">Select Gender</option
                        ><option value="male">Male</option
                        ><option value="female">Female</option></select
                      >
                    </div>
                    <div class="col-md-3 mb-3">
                      <select
                        id="filt-ethnicity"
                        class="form-control advance "
                        v-model="form.ethnicity"
                        required
                        ><option value="">Select Ethnicity</option
                        ><option value="Yoruba">Yoruba</option
                        ><option value="Igbo">Igbo</option
                        ><option value="Hausa">Hausa</option></select
                      >
                    </div>
                    <div class="col-md-3 mb-3">
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Min Height "
                        required
                        v-model="form.minHeight"
                      />
                    </div>
                    <div class="col-md-3 mb-3">
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Max Height "
                        required
                        v-model="form.maxHeight"
                      />
                    </div>
                    <div class="col-md-3 mb-3">
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Min Age "
                        required
                        v-model="form.minAge"
                      />
                    </div>
                    <div class="col-md-3 mb-3">
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Max Age "
                        required
                        v-model="form.maxAge"
                      />
                    </div>
                    <div class="col-md-3 mb-3">
                      <select
                        id="filt-education"
                        class="form-control advance "
                        v-model="form.education"
                        required
                        ><option value="">Select Education Level</option
                        ><option value="graduate">Graduate</option
                        ><option value="master">Masters</option
                        ><option value="PHD">PHD</option
                        ><option value="undergraduate">Undergraduate</option
                        ><option value="High school">High school</option
                        ><option value="Basic">Basic</option
                        ><option value="Not educated"
                          >Not educated</option
                        ></select
                      >
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-3 mb-3">
                      <select
                        id="filt-religion"
                        class="form-control advance "
                        v-model="form.religion"
                        ><option value="">Select Religion</option
                        ><option value="christian">Christian</option
                        ><option value="islam">Islam</option
                        ><option value="traditional">Traditional</option
                        ><option value="others">Others</option></select
                      >
                    </div>

                    <div class="col-md-3 mb-3">
                      <select
                        id="filt-complexion"
                        class="form-control advance "
                        v-model="form.complexion"
                        required
                        ><option value="">Select Complexion</option
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
                    <div class="col-md-3 mb-3">
                      <button
                        :disabled="getloading"
                        type="submit"
                        class="btn  bg-dark-blue onwhite btn__small"
                      >
                        Filter
                        <i
                          v-if="getloading"
                          class="fas fa-spinner fa-spin ml-4"
                        >
                        </i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="ui-dashboard-card-body" v-if="getSearchDonors.length > 0">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th class=" ui-capitalize fs-14">
                    Donor
                  </th>
                  <th class=" pb-1 ui-capitalize fs-14">
                    Age
                  </th>
                  <th class=" pb-1 ui-capitalize fs-14">
                    Complexion
                  </th>
                  <th class=" pb-1 ui-capitalize fs-14">
                    Ethnicity
                  </th>
                  <th class=" pb-1 ui-capitalize fs-14">
                    Religion
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="tr--lnk"
                  v-for="donor in getSearchDonors"
                  :key="donor"
                >
                  <td>
                    {{ donor.name }}
                  </td>
                  <td class="">{{ donor.age }} years</td>
                  <td class="">{{ donor.complexion }}</td>
                  <td class="">{{ donor.ethnicity }}</td>
                  <td class="">{{ donor.religion }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </BaseWrapper>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: mapGetters([
    "getClinicProfile",
    "getloading",
    "getClinicErr",
    "getSearchDonors",
  ]),

  props: {
    menuIcons: {
      type: Boolean,
      required: true,
    },
    toogleMenu: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      form: {
        minHeight: "",
        maxHeight: "",
        minAge: "",
        maxAge: "",
        gender: "",
        religion: "",
        complexion: "",
        education: "",
        ethnicity: "",
      },
    };
  },
  methods: {
    ...mapActions(["searchDonors"]),
    handleSubmit() {
      const data = {
        minHeight: this.form.minHeight,
        maxHeight: this.form.maxHeight,
        minAge: this.form.minAge,
        maxAge: this.form.maxAge,
        gender: this.form.gender,
        religion: this.form.religion,
        complexion: this.form.complexion,
        education: this.form.education,
        ethnicity: this.form.ethnicity,
      };
      this.$store.dispatch("searchDonors", data).then((res) => {
        if (res && res.data) {
          if (res.data.data.length === 0) {
            this.$noty.info("no donor found!");
          }
        }
        if (!res && !res.data.data) {
          this.$noty.error("something unexpexted happens!");
        }
      });
    },
    handleReset() {
      this.form.minHeight = "";
      this.form.maxHeight = "";
      this.form.minAge = "";
      this.form.maxAge = "";
      this.form.gender = "";
      this.form.religion = "";
      this.form.complexion = "";
      this.form.education = "";
      this.form.ethnicity = "";
    },
  },
  created() {
    this.$store.dispatch("getClinicProfileIfAny");
  },
};
</script>

<style lang="scss" scoped>
.btn__small {
  width: 200px !important;
}

@media screen and (max-width: 768px) {
  .ui-dashboard-card-header {
    display: block !important;
    .ui-card-title {
      margin-bottom: 1rem !important;
    }
  }
}

@media screen and (max-width: 360px) {
  .advance__search-mobile {
    flex-direction: column;
  }

  .ui-separate {
    padding: 0 !important;
  }
}
</style>
