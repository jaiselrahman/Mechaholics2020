<template>
  <div id="events">
    <div class="card">
      <div class="title">Non Technical Events</div>
      <hr>
      <ul style="text-align:start; margin-left:2rem;">
        <li>Mock Interview</li>
        <li>Connect Karo</li>
        <li>Futsal</li>
      </ul>
    </div>
    <div class="card">
      <div class="title">Technical Events</div>
      <hr>
      <ul style="text-align:start; margin-left:2rem;">
        <li>Paper Boat</li>
        <li>Code Hunt</li>
        <li>Techno Guess</li>
        <li>Web Designing</li>
        <li>Mind O Pedias</li>
        <li>Google It</li>
        <li>Covert Buggy</li>
      </ul>
    </div>
    <div class="card">
      <div class="title">Online Events</div>
      <hr>
      <ul style="text-align:start; margin-left:2rem;">
        <li>Snap It On</li>
        <li>Short Film</li>
        <li>PUBG</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventPage"
};
</script>

<style>
#events {
  padding: 10vh 0;
  min-height: 80vh;
  color: white;
  text-align: center;
}

@media only screen and (max-width: 700px) {
  div.card {
    width: 95%;
    margin-top: 1rem;
  }
}
</style>
