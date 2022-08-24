<template>
  <div class="band-news">
    <SectionTitle></SectionTitle>
    <div class="container-fluid">
      <div class="row">
        <div class="col-4">
          <figure class="figure">
            <img
              src="../assets/avada-img/avada-band-news/blog-post1-600x900.jpg"
              class="figure-img img-fluid rounded"
              alt=""
            />
            <figcaption class="figure-caption">
              <h3>ajajiajijijaiajiajiiajij</h3>
              <h4>ahaahauhuhauhauhuahuahau</h4>
            </figcaption>
          </figure>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "./SectionTitle.vue";
export default {
  components: {
    SectionTitle,
  },
  props:{
    
  }
};
</script>

<style lang="scss">
@import "../sass/vars";
.figure {
  background-color: $grey-light;
}
h3 {
  color: $mandy;
}
.figure-img {
  width: 400px;
  height: 400px;
}
.band-news{
    background-color: $grey-dark;
}
</style>