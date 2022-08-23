<template>
  <header>
    <BaseLogo></BaseLogo>
  </header>
</template>

<script>
import BaseLogo from './BaseLogo.vue';
export default {
    name: "BaseHeader",
    components: { BaseLogo }
};
</script>

<style lang="scss">
header {
  width: 100%;
  background-color: grey;
}
</style>