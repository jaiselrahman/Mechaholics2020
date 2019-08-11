<template>
  <div id="app">
    <nav-icon @nav-icon="toggle" />
    <home-page />
  </div>
</template>

<script>
import NavIcon from "@/components/NavIcon.vue";
import HomePage from "@/components/HomePage.vue";

export default {
  name: "App",
  components: {
    NavIcon,
    HomePage
  },
  data() {
    return {
      toggle(state) {
        console.log("State", state);
      }
    };
  }
};
</script>

<style >
@import url("https://fonts.googleapis.com/css?family=Itim&display=swap");

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
}

#app {
  font-family: "Itim";
}

hr {
  margin: 0 1rem;
  background-color: #cccccc !important;
  color: #cccccc !important;
  border: solid 0px #cccccc !important;
  height: 1px !important;
}

body {
  margin: 0;
  padding: 0;
  background: #232323;
  color: #cdcdcd;
  font-family: "Avenir Next", "Avenir", sans-serif;
}

a {
  text-decoration: none;
  color: #232323;
  transition: color 0.3s ease;
}

a:hover {
  color: tomato;
}

.card {
  display: inline-block;
  background: white;
  border-radius: 2rem;
  color: black;
  padding: 1em 0;
  box-shadow: 0px 0px 1em 0.2em rgba(0, 0, 0, 0.329);
}

/*
  <color name="colorPrimary">#EF5350</color>
  <color name="colorPrimaryDark">#c22926</color>
  <color name="colorAccent">#FF7043</color>
  <color name="activityBackground">#F7F7F7</color>
  <color name="textColorPrimary">#5d5d5d</color>
  <color name="textColorSecondary">#6E6E6E</color>
  <color name="textColorTertiary">#7D7D7D</color>
  <color name="hintColor">#27EF5350</color>
  <color name="labelColor">@color/colorPrimary</color>
  <color name="event_icon_bg">#34A3DA</color>
  <color name="coordinators">#BEC75C5C</color>
  <color name="gallery">#BE6ACAB3</color>
  <color name="backgroundTop">@color/colorPrimary</color>
*/
</style>
