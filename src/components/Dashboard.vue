<template>
  <div class="dashboard">
    <div class="dashboard__sidebar ">
      <div class="wrapper">
        <div class="dashboard__sidebar-nav ">
          <img :src="logo" alt="company logo" width="30px" />
        </div>
        <div class="dashboard__sidebar-quote">quote</div>
      </div>
    </div>
    <div class="dashboard__main">main</div>
  </div>
</template>

<script>
import logo from "../assets/logo.png";
export default {
  data() {
    return {
      logo,
    };
  },
};
</script>

<style scoped>
.dashboard {
  display: flex;
  height: 100vh;
}

.wrapper {
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 4rem 0;
}

.dashboard__sidebar {
  flex: 4;
  background: #222021;
}

.dashboard__main {
  flex: 8;
}
</style>
