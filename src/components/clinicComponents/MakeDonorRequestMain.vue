<template>
  <div>
    <BaseLoader v-if="getloading && getClinicLoading" />
    <BaseWrapper
      dashboardName="Add a new user to your clinic"
      :menuIcons="menuIcons"
      :toogleMenu="toogleMenu"
      bg__img="bg__img"
      bg__color="primary-color"
      profile="/clinic/profile"
      notification="/clinic/notifications"
      :profileName="
        getClinicProfile.clinicName ? getClinicProfile.clinicName : ''
      "
      profileStatus="clinic"
    >
      <section class="mt-2">
        <div class="ui-dashboard-card">
          <div class="ui-dashboard-card-header">
            <h3 class="ui-card-title normal-text ">
              Make Donor Request
            </h3>
            <div class="ui-card-header-options"></div>
          </div>
          <div class="ui-dashboard-card-body">
            <form
              class="frm--cstm pt-3 was-validated"
              @submit.prevent="handleSubmit"
            >
              <div class="row">
                <div class="col-md-12 ">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label id="donorId">Donor ID</label
                        ><input
                          type="text"
                          class="form-control "
                          placeholder="Donor ID "
                          id="donorId"
                          required
                          v-model="form.donorID"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label id="customer">For Customer</label
                        ><input
                          type="text"
                          class="form-control "
                          placeholder="For customer "
                          id="customer"
                          required
                          v-model="form.customer"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Proposed Date</label>
                        <datepicker
                          placeholder="Select proposed date"
                          input-class="form-control"
                          v-model="form.proposedDate"
                        ></datepicker>
                      </div>
                    </div>
                  </div>
                  <div class="form-group mt-3 mb-2">
                    <div class="d-flex align-items-center">
                      <div class="ml-auto">
                        <button
                          :disabled="getClinicLoading"
                          type="submit"
                          class="btn bg-dark-blue onwhite  btn--sm"
                        >
                          Make Donor Request
                          <i
                            v-if="getClinicLoading"
                            class="fas fa-spinner fa-spin ml-4"
                          >
                          </i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </BaseWrapper>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Datepicker from "vuejs-datepicker";
export default {
  components: {
    Datepicker,
  },
  computed: mapGetters([
    "getClinicProfile",
    "getClinicErr",
    "getClinicLoading",
    "getloading",
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
        donorID: "",
        customer: "",
        proposedDate: "",
      },
    };
  },

  methods: {
    ...mapActions(["getClinicProfileIfAny", "clinicDonorsRequest"]),
    handleSubmit() {
      const data = {
        DonorID: this.form.donorID,
        ForCustomer: this.form.customer,
        ProposedDate: this.form.proposedDate,
      };
      this.clinicDonorsRequest(data).then((res) => {
        if (res && res.data === true) {
          this.$noty.success("donor request sent successfully!");
          this.$router.push("/clinic/requests");
        } else {
          this.$noty.error(this.getClinicErr[0]);
        }
      });
    },
  },
  created() {
    this.$store.dispatch("getClinicProfileIfAny");
  },
};
</script>

<style lang="scss"></style>
