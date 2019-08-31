<template>
  <div style="margin:auto; margin-top: 5rem" class="text-center col-lg-6 col-md-8 col-md-10">
    <form class="card" style="padding: 2rem;" @submit.prevent="signIn()" ref="form">
      <input class="form-control" type="email" name="email" placeholder="Email Id" v-model="email">
      <br>
      <input
        class="form-control"
        type="password"
        name="password"
        placeholder="Password"
        v-model="password"
      >
      <br>
      <input class="btn btn-primary" type="submit" value="SignIn">
      <div class="tagline">{{ statusMessage }}</div>
    </form>
  </div>
</template>

<script>
import firebase from "@/firebase";

export default {
  name: "signIn",
  data() {
    return {
      email: "",
      password: "",
      value: true,
      statusMessage: ""
    };
  },
  methods: {
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(e => {
          this.statusMessage = e.message;
        });
    }
  }
};
</script>

