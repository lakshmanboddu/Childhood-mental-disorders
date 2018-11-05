var surveyJSON = {
  "title": "Analyzing Anxiety or Hyper Activity",
  "loadingHtml": "LOADING... PLEASE WAIT",
  "pages": [{
    "name": "page1",
    "elements": [{
      "type": "radiogroup",
      "name": "Psychosis",
      "title": "Does your child have Delusions, hallucinations, or thought disorder?",
      "choices": [{
        "value": "yes",
        "text": "Yes"
      }, {
        "value": "no",
        "text": "No"
      }]
    }]
  }, {
    "name": "page2",
    "elements": [{
      "type": "radiogroup",
      "name": "Adj. disorder with anxious mood",
      "title": "Anxiety in reaction to identifiable stressor within 3 months?",
      "valueName": "Adj  disorder with anxious mood",
      "choices": [{
        "value": "yes",
        "text": "Yes"
      }, {
        "value": "no",
        "text": "No"
      }]
    }]
  }, {
    "name": "page3",
    "elements": [{
      "type": "radiogroup",
      "name": "Separation anxiety disorder",
      "title": "Short attention span, impulsive, and hyperactive?",
      "choices": [{
        "value": "yes",
        "text": "Yes"
      }, {
        "value": "no",
        "text": "No"
      }]
    }]
  }],
  "showQuestionNumbers": "off",
  "startSurveyText": "Start Survey"
}

function sendDataToServer(survey) {
  //send Ajax request to your web server.
  alert("The results are:" + JSON.stringify(survey.data));
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
  model: survey,
  onComplete: sendDataToServer
});
