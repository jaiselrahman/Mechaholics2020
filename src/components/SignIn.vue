<template>
  <div style="margin:auto; margin-top: 5rem" class="card text-center col-lg-6 col-md-8 col-sm-10">
    <form style="padding: 2rem;" @submit.prevent="signIn()" ref="form">
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
      <input class="btn btn-primary col-md-3 col-lg-3" type="submit" value="SignIn">
      <div class="tagline">{{ statusMessage }}</div>
    </form>
  </div>
</template>

<script>
import firebase from "@/firebase";

const firebaseAuth = firebase.auth();

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
      this.statusMessage = "";
      if (this.password != "google-it") {
        this.statusMessage = "Invalid Password";
        return;
      }
      firebaseAuth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(r => {
          console.log(r);
        })
        .catch(e => {
          console.log(e.message);
          firebaseAuth
            .signInWithEmailAndPassword(this.email, this.password)
            .catch(e => {
              this.statusMessage = e.message;
            });
        });
    }
  }
};
</script>

