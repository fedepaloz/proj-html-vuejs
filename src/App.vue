<template>
  <div>
    <BaseHeader></BaseHeader>
    <BaseJumbo :mainTitle="mainTitle"></BaseJumbo>
    <SectionTitle></SectionTitle>
    <BandNews :newsCards="newsMenu"></BandNews>
    <MusicPlayer></MusicPlayer>
    <LiveDates></LiveDates>
  </div>
</template>

<script>
import BaseHeader from "./components/BaseHeader.vue";
import SectionTitle from "./components/SectionTitle.vue";
import BaseJumbo from "./components/BaseJumbo.vue";
import BandNews from "./components/BandNews.vue";
import MusicPlayer from "./components/MusicPlayer.vue";
import LiveDates from "./components/LiveDates.vue";

export default {
  name: "App",
  data() {
    return {
      mainTitle: "Untold Stories",
      
      newsMenu: [
        { id: 1, img: '', title: "technology", text: "tecnology" },
        { id: 2, img: "", title: "old school", text: "old school" },
        { id: 3, img: "", title: "guitar", text: "guitar" },
        { id: 4, img: "", title: "sound", text: "sound" },
        { id: 5, img: "", title: "rock", text: "rock" },
        { id: 6, img: "", title: "legend", text: "legend" },
      ],
    };
  },
  components: {
    BaseHeader,
    SectionTitle,
    BaseJumbo,
    BandNews,
    MusicPlayer,
    LiveDates
},
};
</script>

<style lang="scss">
@import "./sass/style.scss";
</style>
