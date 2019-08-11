<template>
  <div id="app">
    <nav-icon @nav-icon="toggle" />
    <home-page/>
  </div>
</template>

<script>
import NavIcon from '@/components/NavIcon.vue';
import HomePage from '@/components/HomePage.vue';

export default {
  name: "App",
  components: {
    NavIcon,
    HomePage
  },
  data() {
    return {
      toggle(state) {
        console.log('State', state);
      }
    };
  }
};
</script>

<style >
@import url("https://fonts.googleapis.com/css?family=Itim");

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
}

#app {
  font-family: "Itim";
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

</style>
