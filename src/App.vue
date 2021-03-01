<template>
  <router-view :key="$route.fullPath" />
</template>

<style lang="scss">
@import "~normalize.css/normalize.css";
@import "~nprogress/nprogress.css";
@import "./design/";
</style>
