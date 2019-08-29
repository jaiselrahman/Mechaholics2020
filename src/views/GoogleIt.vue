<template>
  <div class="google-it">
    <survey :survey="survey"></survey>
  </div>
</template>

<script>
import questions from "@/questions";

import * as SurveyVue from "survey-vue";
import "bootstrap/dist/css/bootstrap.css";

var Survey = SurveyVue.Survey;
Survey.cssType = "bootstrap";

export default {
  name: "GoogleIt",
  components: {
    Survey
  },
  data() {
    var json = {
      title: "Google It",
      showProgressBar: "top",
      showTimerPanel: "top",
      maxTimeToFinishPage: 60,
      firstPageIsStarted: true,
      startSurveyText: "Start Quiz",
      pages: questions,
      completedHtml: "<h4 style=\"text-align:center\">You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
    };
    var model = new SurveyVue.Model(json);
    return {
      survey: model,
    };
  },
  mounted() {
    this.survey.onComplete.add(() => {
    //   this.result = `Your score: ${this.survey.getCorrectedAnswerCount()}/${
    //     this.survey.getQuizQuestions().length
    //   }`;
    });

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
