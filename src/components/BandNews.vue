<template>
  <div class="band-news">
    
    <div class="container-fluid">
      <div class="row">
        <div class="col" v-for="newsCard in newsCards" :key='newsCard.id'>
          <figure class="figure">
            <img
              :src="newsCard.img"
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

export default {
  
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

.band-news{
    background-color: $grey-dark;
}
</style>