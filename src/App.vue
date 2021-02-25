<template>
  <router-view :key="$route.fullPath" />
</template>

<style lang="scss">
@import "~normalize.css/normalize.css";

@import "~nprogress/nprogress.css";

@import "./design/";

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  background: $color-body-bg;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: $color-text;
  text-align: left;
}

// ===
// Base element styles
// ===
a,
a:visited {
  color: $color-link-text;
  text-decoration: none !important;
}

// ===
// Vendor
// ===
#nprogress .bar {
  background: $color-link-text;
}
</style>
