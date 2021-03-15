<template>
  <BaseWrapper
    dashboardName="Messages"
    :menuIcons="menuIcons"
    :toogleMenu="toogleMenu"
    bg__color="primary-color"
    profile="/provider/profile"
    notification="/provider/notifications"
  >
    <section class="mt-2">
      <div class="ui-dashboard-card">
        <div class="">
          <div
            class="d-flex align-items-center justify-content-between form-wrapper my-4 mx-4"
          >
            <form class=" frm--card form-search">
              <input
                type="text"
                placeholder="Find message by title"
                class=" form-control ctrl--fnd"
                id="searchRef"
              />
            </form>

            <router-link
              to="/provider/tips/add"
              class="btn btn--sm btn-color form-seperator onwhite align-self-center"
              >Add Message</router-link
            >
          </div>
          <div class="divider">
            <hr />
          </div>
        </div>
        <div class="ui-dashboard-card-body">
          <div class="txt__showcase">
            <img src="@/assets/img/allbg.svg" alt="mobile phones" />
            <p class="txt__history-text">
              Your message history will show here
            </p>
          </div>
        </div>
      </div>
    </section>
  </BaseWrapper>
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
.form--seperator {
  flex: 1;
}

.divider {
  width: 98%;
  margin: auto;
}

.form-search {
  flex: 5;
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

@media screen and (max-width: 768px) {
  .form-wrapper {
    flex-direction: column;
  }

  .btn {
    width: 30% !important;
    margin: 1rem auto;
  }
}
@media screen and (max-width: 550px) {
  .txt__showcase {
    height: auto;
  }
}
</style>
