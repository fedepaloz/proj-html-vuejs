<template>
<section class="section text-white">
  <div class="container-fluid">
    <div class="row justify-content-center">
    <div class="col-4"><h1>{{sezione}}
</h1></div>
    <hr>
    <div class="col-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, asperiores ratione. Voluptatem itaque quos magnam. Iste alias dignissimos repellendus, voluptatem quis nam nemo quam, cumque adipisci illo dolor. </div>
  </div>
  </div>
  </section>
</template>

<script>
export default {
  name: "SectionTitle",
 props:{
  sezione:String
 }
};

</script>

<style lang="scss">
@import'../sass/vars';
.section{
  background-color: $grey-light;
}
</style>


