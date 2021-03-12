<template>
  <div class="ui-dashboard-card">
    <div
      class=" d-flex align-items-center justify-content-between txt__header onmobile-column"
    >
      <h4 class="history font-weight-bold">{{ name }}</h4>
      <button class="btn btn--sm btn-onboarding btn-onboarding-color onwhite">
        <img src="@/assets/img/reload.svg" class="mr-3" alt="reload icon" />
        Refresh
      </button>
    </div>
    <div class="divider">
      <hr />
    </div>
    <div class="ui-dashboard-card-body">
      <div class="txt__showcase">
        <img src="@/assets/img/requestimg.svg" alt="a request illustrator" />
        <p class="txt__history-text">
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
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
