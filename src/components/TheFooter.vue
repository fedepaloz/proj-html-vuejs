<template>
  <footer>
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col"><BaseLogo></BaseLogo></div>
        <div class="col d-flex">
          <ul class="justify-content-around list-unstyled text-white" v-for="footerItem in footerItems"
          :key="footerItem.id">
            <li class="px-2">
              <h5>{{footerItem.text}}</h5>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
    <div id="footer-social" class="container-fluid">
      <div class="row justify-content-between">
        <div class="col-7 text-white">
          <h5>
            © Copyright 2012 - 2022 | Avada Theme by ThemeFusion | All Rights
            Reserved | Powered by WordPress
          </h5>
        </div>
        <div class="col-4 text-white">
          <font-awesome-icon icon="fa-brands fa-facebook" class="px-3" />
          <font-awesome-icon icon="fa-brands fa-twitter" class="px-3" />
          <font-awesome-icon icon="fa-brands fa-youtube" class="px-3" />
          <font-awesome-icon icon="fa-brands fa-instagram" class="px-3" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import BaseLogo from "./BaseLogo.vue";
export default {
  name: "TheFooter",
  components: { BaseLogo },
  props:{
footerItems:Array
  }
};
</script>

<style lang="scss">
@import "../sass/vars";
footer {
  background-color: $grey-light;
}
#footer-social {
  background-color: $grey-dark;
}
</style>