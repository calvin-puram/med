<template>
  <BaseWrapper
    dashboardName="Requests"
    :menuIcons="menuIcons"
    :toogleMenu="toogleMenu"
    profile="/clinic/profile"
    notification="/clinic/notifications"
  >
    <section class="mt-2">
      <BaseRequestComponent
        name="Request"
        text="your requests will show here"
        image="../../assets/img/reload.svg"
      />
    </section>
  </BaseWrapper>
</template>

<script>
import BaseRequestComponent from "../globalComponents/BaseRequestComponent.vue";
export default {
  components: { BaseRequestComponent },
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

<style lang="scss">
.text__h5 {
  color: rgb(51, 66, 97);
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .ui-dashboard-card-header {
    display: block !important;
    .ui-card-title {
      margin-bottom: 1rem !important;
    }
  }

  .frm--card .ctrl--fnd {
    width: 100%;
  }

  .text__h5 {
    font-size: 1rem;
  }
}
</style>
