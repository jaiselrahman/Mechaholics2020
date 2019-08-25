<template>
  <div id="events">
    <div id="projects">
      <elastic-tab :menu="['Technical', 'Non Technical','Online']" @item-selected="onSelectedType"/>
    </div>
    <div class="events">
      <div class="card event" v-for="event in events" :key="event.name" v-bind="event">
        <img
          class="image"
          :src="require('@/assets/' + event.image)"
          :alt="event.name"
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
        { name: "Event 1", image: "f19-512.png", type: "Non Technical" },
        { name: "Event 2", image: "f19-512.png", type: "Non Technical" },
        { name: "Event 3", image: "f19-512.png", type: "Non Technical" },
        { name: "Event 4", image: "f19-512.png", type: "Technical" },
        { name: "Event 5", image: "f19-512.png", type: "Technical" },
        { name: "Event 6", image: "f19-512.png", type: "Technical" },
        { name: "Event 7", image: "f19-512.png", type: "Technical" },
        { name: "Event 8", image: "f19-512.png", type: "Technical" },
        { name: "Event 9", image: "f19-512.png", type: "Technical" },
        { name: "Event 10", image: "f19-512.png", type: "Online" },
        { name: "Event 11", image: "f19-512.png", type: "Online" },
        { name: "Event 12", image: "f19-512.png", type: "Online" }
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
