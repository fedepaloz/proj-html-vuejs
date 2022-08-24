<template>
  <div class="jumbotron d-flex align-items-center">
    <div class="container-fluid">
      <div class="row flex-column align-items-center">
        <div class="col text-white text-center">
          <h1>{{mainTitle}}</h1>
          <h4>here is an untold story behind every favorite song.</h4>
          <button type="button" class="btn btn-dark">Latest Album</button><button type="button" class="btn btn-dark">Live Dates</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    mainTitle: String

  }
};
</script>

<style>
.jumbotron {
  background-image: url(../assets/avada-img/home_slider.jpg);
  height: 100vh;
  margin-top: 90px;
}
</style>