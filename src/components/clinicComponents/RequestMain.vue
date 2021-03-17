<template>
  <div>
    <BaseLoader v-if="getloading && getClinicLoading" />
    <BaseWrapper
      dashboardName="Requests"
      :menuIcons="menuIcons"
      :toogleMenu="toogleMenu"
      profile="/clinic/profile"
      notification="/clinic/notifications"
      :profileName="
        getClinicProfile.clinicName ? getClinicProfile.clinicName : ''
      "
      profileStatus="clinic"
    >
      <section class="mt-2">
        <div class="ui-dashboard-card">
          <div
            class=" d-flex align-items-center justify-content-between txt__header onmobile-column"
          >
            <h4 class="history normal-text font-weight-bold">Request</h4>

            <router-link
              to="/clinic/donor-request"
              class="btn btn--sm btn-onboarding btn-onboarding-color onwhite"
            >
              Make Donor Request
            </router-link>
          </div>
          <div class="divider">
            <hr />
          </div>
          <div class="ui-dashboard-card-body">
            <div class="txt__showcase ">
              <img
                v-if="!getclinicProcessRequest"
                src="@/assets/img/requestimg.svg"
                alt="a request illustrator"
              />
              <p class="txt__history-text" v-if="!getclinicProcessRequest">
                your requests will show here
              </p>
              <div class=" my-5" v-if="getclinicProcessRequest.length > 0">
                <div class="table-responsive normal-text">
                  <table class="table table-dark table-striped">
                    <thead class="text-light">
                      <tr class="tr--lnk">
                        <th class=" ui-capitalize fs-14">
                          clinic Request ID
                        </th>
                        <th class=" pb-1 ui-capitalize fs-14">
                          donor User ID
                        </th>
                        <th class=" pb-1 ui-capitalize fs-14">
                          clinic User ID
                        </th>
                        <th class=" pb-1 ui-capitalize fs-14">
                          donor Username
                        </th>
                        <th class=" pb-1 ui-capitalize fs-14">
                          for Customer Name
                        </th>
                        <th class=" pb-1 ui-capitalize fs-14">
                          process status
                        </th>
                        <th class=" pb-1 ui-capitalize fs-14">
                          process Successful
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        class="tr--lnk"
                        v-for="request in getclinicProcessRequest"
                        :key="request.clinicRequestID"
                      >
                        <td>
                          {{ request.clinicRequestID }}
                        </td>
                        <td class="">{{ request.donorUserID }}</td>
                        <td class="">{{ request.clinicUserID }}</td>
                        <td class="">
                          {{
                            request.donorUsername
                              ? request.donorUsername
                              : "null"
                          }}
                        </td>
                        <td class="">
                          {{
                            request.forCustomerName
                              ? request.forCustomerName
                              : "null"
                          }}
                        </td>
                        <td class="">
                          {{
                            request.clinicUsername
                              ? request.clinicUsername
                              : "null"
                          }}
                        </td>
                        <td class="">{{ request.processStatus }}</td>
                        <td class="">{{ request.processSuccessful }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BaseWrapper>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
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
  computed: mapGetters([
    "getClinicProfile",
    "getClinicLoading",
    "getloading",
    "getclinicProcessRequest",
  ]),
  created() {
    this.$store.dispatch("getClinicProfileIfAny");
    this.$store.dispatch("clinicProcessRequest");
  },
};
</script>

<style lang="scss">
@import "../../design";
.txt__header {
  width: 90%;
  margin: auto;
  margin-top: 2rem;
}

.divider {
  width: 98%;
  margin: auto;
}

.txt__showcase {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  margin-bottom: 4rem;
}

.txt__history-text {
  padding-top: 3rem;
}

.history {
  flex: 5;
}
.btn-onboarding {
  flex: 1;
}

.btn-onboarding-color {
  background: $onboarding-btn-dark;
}

@media screen and (max-width: 768px) {
  .ui-dashboard-card-header {
    display: block !important;
    .ui-card-title {
      margin-bottom: 1rem !important;
    }
  }
}

@media screen and (max-width: 550px) {
  .onmobile-column {
    flex-direction: column;
    text-align: center;
  }

  .txt__showcase {
    height: auto;
  }
}
</style>
