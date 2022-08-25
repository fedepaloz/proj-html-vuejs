<template>
  <div id="the-player">
    <div class="container">
      <h2 class="text-white py-5">
        “I just listened to it and said to myself, “Man, I really love this
        album.” Still, today, it just sounds so fresh. It sounds full of ideas.
        These guys knew what they were doing. They’re good. And they’re
        inventive. I haven’t heard anything this year that’s as inventive. I
        don’t really expect to.”
      </h2>
    </div>
    <div class="text-center">
    <button  id="button">
<font-awesome-icon icon="fa-solid fa-play" />
    </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThePlayer",
};
</script>

<style lang="scss">
@import'../sass/vars';
#the-player {
  background-image: url(../assets/avada-img/home-testimonial-parallax.jpg);
  min-height: 500px;
  #button{
    background-color: #04AA6D;
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  background-color: $mandy;
  margin-top: 50px;
  }
}
</style>