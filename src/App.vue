<template>
  <div id="app">
    <home/>
  </div>
</template>
<script>

import Home from '@/views/Home.vue';

export default {
  name: "App",
  components: {
    Home
  }
}
</script>
<style >
@import url("https://fonts.googleapis.com/css?family=Itim&display=swap");

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Itim";
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
