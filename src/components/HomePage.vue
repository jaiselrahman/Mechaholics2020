<template>
  <div id="home">
    <div id="logo-container" class="card">
      <img id="logo" :src="require('@/assets/logo.jpg')" />
    </div>
    <br />
    <div class="card">
      <h1 class="name">Mechaholics 2020</h1>
      <hr />
      <div class="tagline">
        A National Level Technical Symposium
        <br />By Department of Mechanical Engineering, Meenakshi College of Engineering
        <br />
        <b>
          <em>March 6, 2020</em>
        </b>
      </div>
    </div>
    <div class="card">
      <div class="title">Starts in</div>
      <hr />
      <countdown-timer :end-time="new Date(2020, 2, 6, 9, 0, 0, 0)" style="margin-top: 1rem" />
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
        <a href="mailto:mechaholics2020@gmail.com">mechaholics2020@gmail.com</a>
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
      <div class="title">Follow us on</div>
      <hr />
      <div class="tagline">
      
        <a target="_blank" href="https://instagram.com/mechaholics_2020/">
          <img class="follow-icon" :src="require('@/assets/instagram.svg')" />
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
#home {
  min-height: 90vh;
  padding: 1vh 0 9vh 0;
  color: white;
  text-align: center;
}

.name {
  font-size: 2.5rem;
  color: #ef5350;
}

.tagline {
  margin: 0.5rem 1rem 0 1rem;
  line-height: 1.2em;
  text-align: center;
}

.contact-details {
  width: 100%;
  margin: auto;
}

#logo-container {
  height: 8em;
  width: 8em;
  padding: 2rem;
  background: white;
  border-radius: 50%;
}

#logo {
  position: relative;
  height: 145%;
  width: 145%;
  align-content: center;
  border-radius: 50%;
  left: -22.5%;
  top: -22.5%;
}

.location-map {
  width: 90%;
  margin: 2% 5% 0 5%;
  height: 25rem;
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