<template>
  <div id="live-dates">
    <div class="container">
      <div v-for="datesCard in datesCards" :key="datesCard.id" class="row justify-content-center ">
        <div @click="visible = true" class="col-10 text-center date-list">
          <h2>{{datesCard.date}}</h2>
          <div v-if="visible" id="date-book">
            <div class="row">
              <div class="col">
                <h2 class="text-white">{{datesCard.title}}</h2>
                <h3>
                 {{datesCard.text}}
                </h3>
                <button class="button">{{datesCard.book}}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
      datesCards:Array  
    },
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style lang="scss">
@import "../sass/vars";
#live-dates {
  background-color: $grey-dark;
  color: $mandy;
}
.date-list {
  background-color: $grey-light;
  cursor: pointer;
}

#date-book {
  height: 300px;
}
.button {
  background-color:$mandy;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>