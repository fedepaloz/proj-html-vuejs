<template>
  <footer>
    <div class="container-fluid">
      <div class="row">
        <div class="col"><BaseLogo></BaseLogo></div>
        <div class="col">
          <ul class="d-flex justify-content-around list-unstyled text-white">
            <li>
              <h5>home</h5>
            </li>
            <li>
              <h5>home</h5>
            </li>
            <li>
              <h5>pippo</h5>
            </li>
            <li>
              <h5>home</h5>
            </li>
            <li>
              <h5>home</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="footer-social" class="container-fluid">

    </div>
  </footer>
</template>

<script>
import BaseLogo from './BaseLogo.vue';
export default {
    name: "TheFooter",
    components: { BaseLogo }
};
</script>

<style lang="scss">
@import "../sass/vars";
footer {
  background-color: $grey-light;
}
#footer-social{
    background-color: $grey-dark;
}
</style>