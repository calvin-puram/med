<template>
  <section class="ui__wrapper-large ui-full-bg-norm ui-height-full">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8 col-lg-6 mx-auto">
          <div class="ui-wrapper">
            <form class="form--white frm--cstm auth was-validated">
              <div>
                <div class="bg-white ui-rounded-small">
                  <div class="ui-text-left auth--brand mb-5 pt-1">
                    <div
                      class="d-flex align-items-center justify-content-between mb-1"
                    >
                      <img
                        src="@/assets/img/medbarn.svg"
                        alt="med barn"
                        style="width: 100px; margin-top: 10px"
                      />

                      <span class="donor__textcolor">{{ step }}</span>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between mb-2 mt-4"
                    >
                      <p class=" dark-blue-bold  mb-0 fs-16">
                        {{ desc }}
                      </p>

                      <div class="back__btnText" v-if="!backbtn">
                        <span style="position: relative; top: 0px">
                          <img
                            src="@/assets/img/Intersection 1.svg"
                            alt="back arrow"
                          />
                        </span>
                        &nbsp;
                        <router-link to="/register">Go Back</router-link>
                      </div>
                    </div>

                    <p class="mb-5 donor__textcolor  donor__width ">
                      {{ text }}
                    </p>
                  </div>
                  <slot></slot>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    step: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    backbtn: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../design/";
.ui-full-bg-norm {
  @include ui-full-bg-norm("../../assets/img/authbg.png");
}

.donor__textcolor {
  color: $brand-dgreen;
  font-weight: 100;
  opacity: 0.8;
}

.donor__width {
  width: 60%;
  font-size: 13px;
  font-weight: 600;
}

@media (max-width: 789px) {
  .form--white .d-flex {
    display: flex !important ;
    text-align: left !important;
  }
}
</style>
