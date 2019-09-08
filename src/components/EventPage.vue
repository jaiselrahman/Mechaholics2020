<template>
  <div id="events">
    <div id="projects">
      <elastic-tab :menu="['Technical', 'Non Technical','Online']" @item-selected="onSelectedType"/>
    </div>
    <div class="events">
      <div class="card event" v-for="event in events" :key="event.name" v-bind="event">
        <img
          v-gallery
          class="image"
          :src="require('@/assets/' + event.thumb)"
          :alt="'Flaminius 2k19 | A National Level Technical Symposium at Chennai - ' + event.name"
          :data-large="require('@/assets/' + event.image)"
          style="width:100%"
        >
        <div class="title">{{ event.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import ElasticTab from "@/components/ElasticTab.vue";

export default {
  name: "EventPage",
  components: {
    ElasticTab
  },
  data() {
    return {
      eventsData: [
        {
          name: "Mock Interview",
          thumb: "events/mock-interview-thumb.jpg",
          image: "events/mock-interview.jpg",
          type: "Non Technical"
        },
        {
          name: "Connect Karo",
          thumb: "events/connect-karo-thumb.jpg",
          image: "events/connect-karo.jpg",
          type: "Non Technical"
        },
        {
          name: "Futsal",
          thumb: "events/futsal-thumb.jpg",
          image: "events/futsal.jpg",
          type: "Non Technical"
        },
        {
          name: "Paper Boat",
          thumb: "events/paper-boat-thumb.jpg",
          image: "events/paper-boat.jpg",
          type: "Technical"
        },
        {
          name: "Code Hunt",
          thumb: "events/code-hunt-thumb.jpg",
          image: "events/code-hunt.jpg",
          type: "Technical"
        },
        {
          name: "Techno Guess",
          thumb: "events/techno-guess-thumb.jpg",
          image: "events/techno-guess.jpg",
          type: "Technical"
        },
        {
          name: "Web Designing",
          thumb: "events/web-designing-thumb.jpg",
          image: "events/web-designing.jpg",
          type: "Technical"
        },
        {
          name: "Mind O Pedias",
          thumb: "events/mind-o-pedias-thumb.jpg",
          image: "events/mind-o-pedias.jpg",
          type: "Technical"
        },
        {
          name: "Google It",
          thumb: "events/google-it-thumb.jpg",
          image: "events/google-it.jpg",
          type: "Technical"
        },
        {
          name: "Covert Buggy",
          thumb: "events/covert-buggy-thumb.jpg",
          image: "events/covert-buggy.jpg",
          type: "Technical"
        },
        {
          name: "Snap It On",
          thumb: "events/snap-it-on-thumb.jpg",
          image: "events/snap-it-on.jpg",
          type: "Online"
        },
        {
          name: "Short Film",
          thumb: "events/short-film-thumb.jpg",
          image: "events/short-film.jpg",
          type: "Online"
        },
        {
          name: "PUBG",
          thumb: "events/pubg-thumb.jpg",
          image: "events/pubg.jpg",
          type: "Online"
        }
      ],
      events: this.eventsData
    };
  },
  mounted() {
    this.onSelectedType("Technical");
  },
  methods: {
    onSelectedType(type) {
      this.events = this.eventsData.filter(i => i.type === type);
    }
  }
};
</script>

<style scoped>
#events {
  padding: 10vh 0;
  min-height: 80vh;
  color: white;
  text-align: center;
}

.events {
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  justify-content: space-around;
}

.events-move {
  transition: all 300ms;
}
.events-enter-active {
  transition: all 200ms ease-out;
}

.events-leave-active {
  position: absolute;
  transition: all 200ms ease-in;
  transform: scale(0.5);
}

.events-enter,
.events-leave-to {
  opacity: 0;
}

.event {
  display: block;
  width: 12rem;
  padding: 0.5rem 0;
  margin: 0.5rem 0rem;
  border-radius: 0.2rem;
}

.event > .image {
  background: black;
  height: 12rem;
}

.event > .title {
  text-align: center;
  padding: 0;
}

@media only screen and (min-width: 900px) {
  .event {
    width: 18rem;
    margin: 0.5rem 0;
  }

  .event > .image {
    height: 18rem;
  }
}
</style>
