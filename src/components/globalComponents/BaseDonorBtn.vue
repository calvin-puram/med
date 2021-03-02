<template lang="">
  <div class="ml-auto center_btn">
    <button
      type="submit"
      class="btn btn-adj btn-block bg-brand-green onwhite  btn-sm"
    >
      {{ title }}
      <span v-if="title === 'PROCEED'"
        ><img src="@/assets/img/login.png" alt="login" class="ml-1" />
      </span>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang=""></style>
