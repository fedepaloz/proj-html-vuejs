<template>
  <div class="band-news">
    <SectionTitle></SectionTitle>
    <div class="container-fluid">
      <div class="row">
        <div class="col-4" v-for="newsCard in newsCards" :key='newsCard.id'>
          <figure class="figure">
            <img
              src=""
              class="figure-img img-fluid rounded"
              alt="card"
            />
            <figcaption class="figure-caption">
              <h3>{{newsCard.title}}</h3>
              <h4>{{newsCard.text}}</h4>
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
    newsCards: Array
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