<template>
  <header>
    <div class="navbar">
      <div class="row justify-content-between">
        <div class="col-4"><BaseLogo></BaseLogo></div>
        <div class="col-1 bars">
          <button @click="awesome = true" class="openbtn">
            <font-awesome-icon icon="fa-solid fa-bars" />
          </button>
        </div>
      </div>
    </div>
    <div v-if="awesome" id="menu" class="text-white hidden">
      <h1>menu</h1>
      <ul>
        <li>lol</li>
        <li>lol</li>
        <li>lol</li>
        <li>lol</li>
        <li>lol</li>
        <li>lol</li>
      </ul>
    </div>
  </header>
</template>

<script>
import BaseLogo from "./BaseLogo.vue";
export default {
   data(){
  return {
    awesome: false
  }
  
},
  name: "BaseHeader",
  components: { BaseLogo },
  
};
</script>

<style lang="scss">
header {
  background-color: #262833;
  position: fixed;
  width: 100%;
  top: 0;
}
.bars {
  color: white;
}
 #menu{
  
 }
</style>