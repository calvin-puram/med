<template>
  <div>
    <router-link
      v-if="others"
      :to="link"
      class="btn btn-block onwhite mb-4"
      :style="{ background: color, borderColor: color }"
    >
      {{ text }}
    </router-link>

    <router-link
      v-else
      :to="link"
      class="btn  onwhite mb-4"
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
@import "../../design/";
</style>
