<template>
  <div>
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
              User details
            </h3>
            <div class="ui-card-header-options"></div>
          </div>
          <div class="ui-dashboard-card-body">
            <form
              class="frm--cstm pt-3 was-validated"
              @submit.prevent="handleSubmit"
            >
              <div class="row">
                <div class="col-md-7 mx-auto">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label id="email">Email</label
                        ><input
                          type="email"
                          class="form-control "
                          placeholder="Enter email"
                          id="email"
                          required
                          v-model="form.email"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label id="designation">Designation</label
                        ><input
                          type="text"
                          class="form-control "
                          placeholder="eg Clinic Doctor"
                          id="designation"
                          required
                          v-model="form.designation"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group mt-3 mb-2">
                    <div class="d-flex align-items-center">
                      <div class="ml-auto">
                        <button
                          type="submit"
                          class="btn bg-dark-blue onwhite  btn--sm"
                        >
                          ADD USER
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
export default {
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
        designation: "",
        email: "",
      },
    };
  },

  methods: {
    ...mapActions(["addClinicUser", "getClinicProfileIfAny"]),
    handleSubmit() {
      const data = {
        username: this.form.email,
        Designation: this.form.designation,
      };
      this.addClinicUser(data).then((res) => {
        if (res && res.data === true) {
          this.$noty.success("clinic user added successfully!");
          this.$router.push("/clinic/users");
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
