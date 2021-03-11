<template>
  <BaseWrapperWithBackbtn
    dashboardName="Your Profile"
    :menuIcons="menuIcons"
    :toogleMenu="toogleMenu"
    link="/clinic/home"
  >
    <section class="mt-2">
      <div class="row">
        <div class="col-md-5">
          <div class="ui-dashboard-card">
            <div
              class="ui-dashboard-card-body ui-full-bg-norm ui-rounded-small"
            >
              <div class="d-flex align-items-center">
                <div class="ml-auto">
                  <button
                    class="btn"
                    style="background-color: rgb(6, 220, 169); color: rgb(255, 255, 255);"
                  >
                    <i class="fas fa-pencil-alt brand-dblue mr-2"></i>

                    Upload Picture
                  </button>
                </div>
              </div>
              <div class="ui-text-center pb-1">
                <img
                  src="@/assets/img/medbarn.svg"
                  alt="Clinic logo"
                  class="ui-avatar-large"
                />
                <p class=" brand-dblue mt-1 fs-20 mb-0">
                  Medbarn Agency
                </p>
                <p class=" brand-alblue fs-14 mb-2">
                  Suite 6 David Court Ibadan Oyo State.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="ui-dashboard-card">
            <div class="ui-dashboard-card-body">
              <div class="d-flex align-items-center">
                <h5 class="brand-green  mb-0">
                  Details
                </h5>
                <div class="ml-auto ui-group-button">
                  <a class="edit--btn green" href="/clinic/editprofile"
                    ><i class="fas fa-pencil-alt brand-green"></i
                  ></a>
                </div>
              </div>
              <div>
                <div class="row">
                  <div class="col-md-6">
                    <p class=" fs-15 brand-dblue mrgb">
                      Email
                    </p>
                    <span class="onsilverlight font-quicksandregular"
                      >example@ohealth.com</span
                    >
                  </div>
                  <div class="col-md-6">
                    <p class="font-quicksandmedium fs-15 brand-dblue mrgb">
                      Phone number
                    </p>
                    <span class="onsilverlight ">09012345678</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </BaseWrapperWithBackbtn>
</template>

<script>
export default {
  components: {},
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
};
</script>
<style lang="scss" scoped>
@import "../../design";

.onsilverlight {
  color: #7cafa0;
}

.ui-full-bg-norm {
  @include ui-full-bg-norm("../../assets/img/profile.svg");
}
</style>
