var surveyJSON = {
  "pages": [{
    "name": "page1",
    "elements": [{
      "type": "radiogroup",
      "name": "ageques",
      "title": "Age?",
      "choices": [{
        "value": ">=18",
        "text": ">-=18"
      }, {
        "value": "<18",
        "text": "<18"
      }]
    }]
  }, {
    "name": "page2",
    "elements": [{
      "type": "radiogroup",
      "name": "salques",
      "title": "Salary?",
      "choices": [{
        "value": "10000+",
        "text": "10000+"
      }, {
        "value": "10000-",
        "text": "10000-"
      }]
    }]
  }]
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
