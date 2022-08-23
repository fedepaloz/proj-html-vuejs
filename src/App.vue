<template>
  <div>
    <BaseHeader></BaseHeader>
  </div>
</template>

<script>
import BaseHeader from "./components/BaseHeader.vue";

export default {
  name: "App",
  components: {
    BaseHeader,
  },
};
</script>

<style lang="scss">
@import "./sass/style.scss";
</style>
