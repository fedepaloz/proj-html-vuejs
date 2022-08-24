<template>
  <div>
    <BaseHeader></BaseHeader>

    <SectionTitle></SectionTitle>
  </div>
</template>

<script>
import BaseHeader from "./components/BaseHeader.vue";
import SectionTitle from "./components/SectionTitle.vue";


export default {
  name: "App",
  components: {
    BaseHeader,
    SectionTitle,
   
},
};
</script>

<style lang="scss">
@import "./sass/style.scss";
</style>
