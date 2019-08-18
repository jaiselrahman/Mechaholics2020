<template>
  <div id="home-page">
    <div id="logo-container" class="card">
      <img id="logo" :src="require('@/assets/f19-512.png')" />
    </div>
    <br />
    <div class="card">
      <div class="name">Flaminius 2k19</div>
      <hr />
      <div class="tagline">
        A National Level Technical Symposium
        <br />By Department of Information Technology, Meenakshi College of Engineering
        <br />&amp; Society Of Information Technology Engineers
        <br />
        <bold>
          <em>September 13, 2019</em>
        </bold>
      </div>
    </div>
    <div class="card">
      <div class="title">Starts in</div>
      <hr />
      <countdown-timer :end-time="new Date(2019, 8, 13, 9, 0, 0, 0)" style="margin-top: 1rem" />
    </div>
    <a href="https://goo.gl/maps/KC49HwqxuuVYNckn8" target="_blank">
      <div class="card">
        <div class="title">Venue</div>
        <hr />
        <div class="tagline">
          At Meenakshi College of Engineering
          <br />#12, Vembuliamman Koil Street, West K.K. Nagar, Chennai-78
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9045908150415!2d80.18651991482278!3d13.041744690809935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266cd13687e19%3A0xcde1489bf2db3882!2sMeenakshi+College+Of+Engineering!5e0!3m2!1sen!2sin!4v1565530456057!5m2!1sen!2sin"
          frameborder="0"
          style="border:0"
          allowfullscreen
          class="location-map"
        ></iframe>
      </div>
    </a>
    <div class="card">
      <div class="title">Contact us</div>
      <hr />
      <div class="tagline" style="font-size: 1.25rem">
        <a href="mailto:flaminius2k19@gmail.com">flaminius2k19@gmail.com</a>
      </div>
      <div class="tagline">
        <table class="contact-details">
          <tr>
            <td style="width:50%; text-align:start">President</td>
            <td>:</td>
            <td style="width:50%; text-align: end">
              <a href="tel:+917904013122">&nbsp;&nbsp;+917904013122</a>
            </td>
          </tr>
          <tr>
            <td style="width:50%; text-align:start">Secretary</td>
            <td>:</td>
            <td style="width:50%; text-align:end">
              <a href="tel:+916380667500">&nbsp;&nbsp;+916380667500</a>
            </td>
          </tr>
          <tr>
            <td style="width:50%; text-align:start">Event Coordinator</td>
            <td>:</td>
            <td style="width:50%; text-align:end">
              <a href="tel:+919840543412">&nbsp;&nbsp;+919840543412</a>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="card">
      <div class="title">Download the app to view more details:</div>
      <hr />
      <a href="https://play.google.com/store/apps/details?id=app.flaminius.flaminius2k19">
        <img
          class="google-play-icon"
          alt="Get it on Google Play"
          src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
        />
      </a>
    </div>
    <div class="card">
      <div class="title">Follow us on</div>
      <hr />
      <div class="tagline">
        <a target="_blank" href="https://facebook.com/flaminius2k19">
          <img class="follow-icon" :src="require('@/assets/facebook.svg')" />
        </a>
        <a target="_blank" href="https://instagram.com/flaminius2k19/">
          <img class="follow-icon" :src="require('@/assets/instagram.svg')" />
        </a>
        <a target="_blank" href="https://twitter.com/flaminius2k19">
          <img class="follow-icon" :src="require('@/assets/twitter.svg')" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import CountdownTimer from '@/components/CountdownTimer.vue'

export default {
  name: "HomePage",
  components: {
    CountdownTimer
  }
};
</script>

<style>
#home-page {
  min-height: 90vh;
  padding: 1vh 0 9vh 0;
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
  color: white;
  text-align: center;
}

.name {
  font-size: 2.5rem;
  color: #ef5350;
}

.title {
  font-size: 1.5rem;
  text-align: start;
  padding-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 0.2rem;
  text-shadow: 5rem black;
  color: #ef5350;
}

.tagline {
  margin: 0.5rem 1rem 0 1rem;
  line-height: 1.1em;
  text-align: center;
}

.contact-details {
  width: 100%;
  margin: auto;
}

#logo-container {
  display: inline-block;
  height: 8em;
  width: 8em;
  padding: 2rem;
  background: white;
  text-align: center;
  border-radius: 50%;
}

#logo {
  height: 100%;
  width: 100%;
}

.location-map {
  width: 90%;
  margin: 2% 5% 0 5%;
  height: 25rem;
}

.google-play-icon {
  height: 5rem;
}

.follow-icon {
  width: 3rem;
  height: 3rem;
  margin: 0 1.5rem;
}

div.card {
  margin-top: 1.8rem;
}

@media only screen and (max-width: 900px) {
  div.card {
    width: 80%;
  }

  .contact-details {
    width: 80%;
  }
}

@media only screen and (min-width: 900px) {
  div.card {
    width: 60%;
  }

  .contact-details {
    width: 60%;
  }
}

@media only screen and (max-width: 700px) {
  div.card {
    width: 95%;
    margin-top: 1rem;
  }

  .contact-details {
    width: 80%;
  }
}
</style>