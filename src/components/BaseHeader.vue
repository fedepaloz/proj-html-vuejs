<template>
  <header>
    <div class="row justify-content-between">
      <div class="col-4"><BaseLogo></BaseLogo></div>
      <div class="col-1 bars">
        <button><font-awesome-icon  icon="fa-solid fa-bars" /></button>
      </div>
    </div>
  </header>
</template>

<script>
import BaseLogo from "./BaseLogo.vue";
export default {
  name: "BaseHeader",
  components: { BaseLogo },
};
</script>

<style lang="scss">
header {
  background-color: #262833;
  position: fixed;
  width: 100%;
}
.bars {
  color: white;
}
</style>