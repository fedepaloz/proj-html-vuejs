<template>
  <div>
    <BaseHeader></BaseHeader>
<BaseJumbo></BaseJumbo>
    <SectionTitle></SectionTitle>
  </div>
</template>

<script>
import BaseHeader from "./components/BaseHeader.vue";
import SectionTitle from "./components/SectionTitle.vue";
import BaseJumbo from "./components/BaseJumbo.vue";


export default {
  name: "App",
  components: {
    BaseHeader,
    SectionTitle,
    BaseJumbo
},
};
</script>

<style lang="scss">
@import "./sass/style.scss";
</style>
