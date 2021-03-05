<template lang="">
  <div class="ml-auto center_btn">
    <button
      @click="navigateNext"
      type="submit"
      class="btn btn-adj btn-block bg-brand-green onwhite  btn-sm"
    >
      {{ nextBtnText() }}
      <span v-if="nextBtnText() === 'PROCEED'"
        ><img src="@/assets/img/login.png" alt="login" class="ml-1" />
      </span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    nextBtnText() {
      if (this.$route.name === "Donor_step5") {
        return "CREATE ACCOUNT";
      }
      return "PROCEED";
    },
    togglePrevious() {
      if (this.$route.name === "Donor_step1") {
        return false;
      }
      return true;
    },
    navigateNext() {
      this.nextBtnText = "PROCEED";
      if (this.$route.name === "Donor_step1") {
        this.$router.push("/register/donor_step2");
      } else if (this.$route.name === "Donor_step2") {
        this.$router.push("/register/donor_step3");
      } else if (this.$route.name === "Donor_step3") {
        this.$router.push("/register/donor_step4");
      } else if (this.$route.name === "Donor_step4") {
        this.$router.push("/register/donor_step5");
      } else {
        this.nextBtnTxt = "CREATE ACCOUNT";
        // handle saving of the form
        console.log("last form");
      }
    },
  },
};
</script>
<style lang=""></style>
