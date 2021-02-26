<template lang="">
  <div class="ui-topbar">
    <div class="ui-topbar-inner">
      <div class="d-flex align-items-center">
        <div class="pr-1" @click="toogleMenu">
          <div class="hmb--btn but1">
            <i
              class="fas fa-bars mr-5 onsilverlight fs-20 mt-2 ui-hide-mobile-only"
            ></i>
          </div>
        </div>
        <div>
          <p class="mb-0">
            <button class="d-sm-none ">
              <span class="fe fe-menu fs-20 onsilverlight"></span></button
            ><span class="mb-0  brand-dblue fs-20">{{ title }}</span
            ><span class=" onsilverlight fs-20" v-if="title === 'Dashboard'"
              >&nbsp;&nbsp; | &nbsp;&nbsp;</span
            >
          </p>
        </div>
        <div class="ui-topbar-options"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    meniIcons: {
      type: Boolean,
      required: false,
    },
    toogleMenu: {
      type: Function,
      required: true,
    },
  },
};
</script>
<style lang="scss">
@import "../design/";
</style>
