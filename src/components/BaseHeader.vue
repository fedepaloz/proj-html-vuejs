<template>
  <header>
    <div class="container-fluid" v-if="!visible">
      <div class="row align-items-center justify-content-between">
        <div class="col-2"><BaseLogo></BaseLogo></div>
        <div class="col-1">
          <button @click="visible = true" class="openbtn">
            <font-awesome-icon icon="fa-solid fa-bars" />
          </button>
        </div>
      </div>
    </div>
    <div v-if="visible" id="menu" class="text-white">
      <div class="container-fluid text-center">
        <ul class="menu-list">
          <li><h2>Home</h2></li>
          <li><h2>Meet the band</h2></li>
          <li><h2>live dates</h2></li>
          <li><h2>latest news</h2></li>
          <li><h2>albums</h2></li>
          <li><h2>fans</h2></li>
        </ul>
      </div>
    </div>
  
  </header>
  
</template>

<script>
import BaseLogo from "./BaseLogo.vue";
export default {
  data() {
    return {
      visible: false,
    };
  },
  name: "BaseHeader",
  components: { BaseLogo },
};
</script>

<style lang="scss">
@import "../sass/vars";
header {
  background-color: #262833;
  position: fixed;
  width: 100%;
  top: 0;
}
.bars {
  color: white;
}

#menu {
  height: 100vh;
  background-color: $mandy;
  
}

.menu-list {
  list-style-type: none;
  padding-top: 300px;
  :hover{color: black;}
  cursor: pointer;
}
</style>