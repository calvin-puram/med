<template>
  <BaseWrapper
    dashboardName="Clinics"
    :menuIcons="menuIcons"
    :toogleMenu="toogleMenu"
    bg__img="bg__img"
    bg__color="primary-color"
    profile="/profile"
    notification="/notifications"
  >
    <section class="mt-2">
      <div class="ui-dashboard-card">
        <div class="ui-dashboard-card-body">
          <div class="table-responsive "></div>
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
.ui-hide {
  display: none !important;
}

.btn.ghost.ghost-green {
  border-color: #06dca9;
  color: #06dca9;
}

.btn {
  padding: 0.5rem 1.3rem;
  width: 150px !important;
  font-size: 16px;
  border-radius: 4px;
  transition: all 0.3s ease;
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

  .avatar,
  .avatar-blue {
    display: none !important;
  }
}
</style>
