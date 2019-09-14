<template>
  <div id="clockdiv">
    <div>
      <span class="days">{{ days }}</span>
      <div class="smalltext">Days</div>
    </div>
    <div style="margin-left: 0.2rem; margin-right: 0.1rem;">
      <span class="hours">{{ hours }}</span>
      <div class="smalltext">Hours</div>
    </div>
    <div style="margin-left: 0.1rem; margin-right: 0.2rem;">
      <span class="minutes">{{ minutes }}</span>
      <div class="smalltext">Minutes</div>
    </div>
    <div>
      <span class="seconds">{{ seconds }}</span>
      <div class="smalltext">Seconds</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountdownTimer",
  props: {
    endTime: Date,
  },
  data() {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
      timeInterval: Object
    };
  },
  mounted() {
    // this.updateClock();
    // this.timeInterval = setInterval(this.updateClock, 1000);
  },
  methods: {
    getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
      };
    },
    updateClock() {
      var t = this.getTimeRemaining(this.endTime);

      this.days = t.days;
      this.hours = ('0' + t.hours).slice(-2);
      this.minutes = ('0' + t.minutes).slice(-2);
      this.seconds = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(this.timeinterval);
      }
    }
  }
};

</script>

<style scoped>
#clockdiv {
  font-family: sans-serif;
  color: #fff;
  display: inline-block;
  font-weight: 100;
  text-align: center;
  font-size: 30px;
}

#clockdiv > div {
  padding: 10px;
  border-radius: 3px;
  background: rgba(239, 83, 80, 0.5);
  display: inline-block;
}

#clockdiv div > span {
  padding: 15px;
  border-radius: 3px;
  background: #EF5350;
  display: inline-block;
}

.smalltext {
  padding-top: 5px;
  font-size: 16px;
}
</style>
