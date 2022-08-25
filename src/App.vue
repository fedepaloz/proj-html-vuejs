<template>
  <div>
    <BaseHeader></BaseHeader>
    <BaseJumbo :mainTitle="mainTitle"></BaseJumbo>
    <SectionTitle></SectionTitle>
    <BandNews :newsCards="newsMenu"></BandNews>
    <ViewMenu></ViewMenu>
    <MusicPlayer></MusicPlayer>
    <SectionTitle></SectionTitle>
    <LiveDates :datesCards="datesMenu"></LiveDates>
    <ViewMenu></ViewMenu>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import BaseHeader from "./components/BaseHeader.vue";
import SectionTitle from "./components/SectionTitle.vue";
import BaseJumbo from "./components/BaseJumbo.vue";
import BandNews from "./components/BandNews.vue";
import MusicPlayer from "./components/MusicPlayer.vue";
import LiveDates from "./components/LiveDates.vue";
import ViewMenu from "./components/ViewMenu.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",
  data() {
    return {
      mainTitle: "Untold Stories",
      
      newsMenu: [
        { id: 1, img: './avada-band-news/blog_music_techo-800x400.jpg',title: "technology", text: "tecnology" },
        { id: 2, img: "./avada-band-news/blog-post1-600x900.jpg", title: "old school", text: "old school" },
        { id: 3, img: "./avada-band-news/blog-post2-600x900.jpg", title: "guitar", text: "guitar" },
        { id: 4, img: "./avada-band-news/blog_flavor_rock-800x400.jpg", title: "sound", text: "sound" },
        { id: 5, img: "./avada-band-news/blog-post3-600x900.jpg", title: "rock", text: "rock" },
        { id: 6, img: "./avada-band-news/blog-post4-600x900.jpg", title: "legend", text: "legend" },
      ],
      datesMenu:[
        {
          id:1,date:'17/08/2020 GEM FESTIVAL 2020 ANAKALIA, GEORGIA',title:'Untold Stories',
          text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',visibility:'true',accept:'I accept',
          book:'BOOK NOW'
        },{
          id:2,date:'24/9/2020 GROOVEFEST DOMINICAL REPUBLIC',title:'Untold Stories',
          text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',visibility:'true',accept:'I accept',
          book:'BOOK NOW'
        },{
          id:3,date:'31/10/2020 OASIS FESTIVAL 2020, MOROCCO',title:'Untold Stories',
          text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',visibility:'true',accept:'I accept',
          book:'BOOK NOW'
        },{
          id:4,date:'07/11/2020 MOGA FESTIVAL - ESSAOURIA, MOROCCO',title:'Untold Stories',
          text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',visibility:'true',accept:'I accept',
          book:'BOOK NOW'
        },{
          id:5,date:'10/12/2020 ENVISION FESTIVAL - UVITA, COSTA RICA',title:'Untold Stories',
          text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',visibility:'true',accept:'I accept',
          book:'BOOK NOW'
        },
      ]
    };
  },
  components: {
    BaseHeader,
    SectionTitle,
    BaseJumbo,
    BandNews,
    MusicPlayer,
    LiveDates,
    ViewMenu,
    TheFooter
},
};
</script>

<style lang="scss">
@import "./sass/style.scss";
</style>
