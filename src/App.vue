<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-weight: normal !important;
  font-size: 16px;
}

body {
  background: url("https://dms.medbarnagency.com/images/assets/img@auth-in.svg");
  width: 100%;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: 20% 80% !important;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  transition: all 0.5s ease;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
}

a {
  color: #212529 !important;
  text-decoration: none !important;
}
</style>
