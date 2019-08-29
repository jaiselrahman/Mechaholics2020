<template>
  <div class="home">
    <nav-icon />
    <div class="main-bg">
      <home-page/>
      <hr class="main-hr">
      <event-page/>
    </div>
    <registration-page/>
  </div>
</template>

<script>
import HomePage from '@/components/HomePage.vue';
import EventPage from '@/components/EventPage.vue';
import RegistrationPage from '@/components/RegistrationPage.vue';
import NavIcon from '@/components/NavIcon.vue';

export default {
  name: 'home',
  components: {
    HomePage,
    EventPage,
    RegistrationPage,
    NavIcon
  }
}
</script>

<style>

.main-bg {
  background: #ef5350;
  background: -moz-linear-gradient(
    to bottom right,
    #c22926,
    #ef5350 30% 70%,
    #c22926
  );
  background: -webkit-linear-gradient(
    to bottom right,
    #c22926,
    #ef5350 30% 70%,
    #c22926
  );
  background: linear-gradient(
    to bottom right,
    #c22926,
    #ef5350 30% 70%,
    #c22926
  );
}

.main-hr {
  background-color: #c22926 !important;
  color: #c22926 !important;
  border: solid 0px #c22926 !important;
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

.title {
  font-size: 1.5rem;
  text-align: start;
  padding-left: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.2rem;
  text-shadow: 5rem black;
  color: #ef5350;
}
</style>

