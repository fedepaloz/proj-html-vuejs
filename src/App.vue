<template>
  <div>
    <TheHeader></TheHeader>

    <SectionTitle></SectionTitle>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import SectionTitle from "./components/SectionTitle.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    SectionTitle,
  },
};
</script>

<style lang="scss">
@import "./sass/style.scss";
</style>
