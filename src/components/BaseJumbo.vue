<template>
  <div class="jumbotron d-flex align-items-center">
    <div class="container-fluid">
      <div class="row flex-column align-items-center">
        <div class="col text-white text-center">
          <h1>{{ mainTitle }}</h1>
          <h4>here is an untold story behind every favorite song.</h4>
          <button type="button" class="button mx-2" id="btnsx">
            Latest Album</button
          ><button type="button" class="button mx-2" id="btndx">Live Dates</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mainTitle: String,
  },
};
</script>

<style lang="scss">
@import "../sass/vars";
.jumbotron {
  background-image: url(../assets/avada-img/home_slider.jpg);
  height: 100vh;
  margin-top: 90px;
}
#btndx{
  background-color:transparent;
  border: 2px solid white;
  
}
#btndx:hover,#btnsx:hover{
  background-color:white ;
  color: black;
}
</style>