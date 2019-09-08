<template>
  <div class="google-it">
    <sign-in v-if="!isSignedIn"/>
    <survey v-else :survey="survey"></survey>
  </div>
</template>

<script>
import firebase from "@/firebase";
import questions from "@/questions";

import * as SurveyVue from "survey-vue";
import "bootstrap/dist/css/bootstrap.css";

import SignIn from "@/components/SignIn";

const firebaseAuth = firebase.auth();
const firestore = firebase.firestore();

var Survey = SurveyVue.Survey;
Survey.cssType = "bootstrap";

export default {
  name: "GoogleIt",
  components: {
    Survey,
    SignIn
  },
  data() {
    var json = {
      cookieName: "google-it-quiz",
      title: "Google It",
      showProgressBar: "top",
      showTimerPanel: "top",
      maxTimeToFinishPage: 60,
      firstPageIsStarted: true,
      startSurveyText: "Start Quiz",
      pages: questions,
      completedHtml:
        '<h4 style="text-align:center">Submission successful, Kindly wait for the results.</h4>'
    };
    var model = new SurveyVue.Model(json);
    return {
      survey: model,
      isSignedIn: false,
      storageName: "SurveyJS_LoadState",
      timerId: 0
    };
  },
  created() {
    this.isSignedIn = firebaseAuth.currentUser != null;
    firebaseAuth.onAuthStateChanged(u => {
      this.isSignedIn = !!u && u.currentUser !== null;
      if(!this.isSignedIn) {
        window.localStorage.removeItem(this.storageName);
      }
    });
  },
  methods: {
    saveState(survey) {
      var res = {
        currentPageNo: survey.currentPageNo,
        data: survey.data,
        timeSpent: survey.currentPage.timeSpent,
      };
      
      window.localStorage.setItem(this.storageName, JSON.stringify(res));
    },
    loadState(survey) {
      var storageSt = window.localStorage.getItem(this.storageName) || "";

      var res = {};
      if (storageSt) res = JSON.parse(storageSt);

      if (res.currentPageNo) survey.currentPageNo = res.currentPageNo;
      if (res.data) survey.data = res.data;
      if (res.timeSpent) survey.currentPage.timeSpent = res.timeSpent;
    }
  },
  mounted() {
    this.survey.onComplete.add(survey => {
      firebase.firestore().collection('google-it').doc(firebaseAuth.currentUser.email).set(
        {
          name: firebaseAuth.currentUser.email,
          score: this.survey.getCorrectedAnswerCount(),
        }
      ).catch(e => {
        console.log(e);
      });

      clearInterval(this.timerId);
      this.saveState(survey);
    });

    this.survey.onCurrentPageChanged.add(survey => {
      this.saveState(survey);
    });

    this.loadState(this.survey);

    this.timerId = window.setInterval(() => {
      this.saveState(this.survey);
    }, 10000);

    this.survey.onTimerPanelInfoText.add((sender, options) => {
      options.text = `Remining Time: ${sender.maxTimeToFinishPage -
        sender.currentPage.timeSpent}s`;
    });
  }
};
</script>

<style>
.google-it {
  color: black;
}

.progress + div {
  margin-left: 1rem;
  font-weight: bold;
}
</style>
