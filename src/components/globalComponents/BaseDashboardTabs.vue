<template>
  <div>
    <router-link
      :to="link"
      class="btn  btn--sm onwhite mb-4"
      :style="{ background: color, borderColor: color }"
    >
      {{ text }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    others: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.btnwidth {
  width: 100% !important;
}
</style>
