<template>
  <div id="google-it-result" style="color:black; width:100%">
    <table
      class="table table-bordered offset-lg-3 col-lg-6 offset-md-2 col-md-8 offset-sm-1 col-sm-10"
      style="border-radius: 0.2rem; padding: 2rem;"
    >
      <thead class="thead-light">
        <tr>
          <th>Name</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="result in results" :key="result.name">
          <td>{{ result.name }}</td>
          <td>{{ result.score }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";

import firebase from "@/firebase";

const firestore = firebase.firestore();

export default {
  name: "GoogleItResult",
  data() {
    return {
      results: []
    };
  },
  mounted() {
    firestore
      .collection("google-it")
      .orderBy("score", "desc")
      .onSnapshot(results => {
        this.results = [];
        results.forEach(result => {
          this.results.push(result.data());
        });
      });
  }
};
</script>

<style>
@media screen and (min-width: 576px) {
  #google-it-result {
    margin-top: 2rem;
  }
}
</style>
