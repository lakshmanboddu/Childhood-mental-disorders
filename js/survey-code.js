var surveyJSON = {
  "title": "Analyzing Anxiety or Hyper Activity",
  "loadingHtml": "LOADING... PLEASE WAIT",
  "pages": [{
      "name": "page1",
      "elements": [{
        "type": "radiogroup",
        "name": "Psychosis",
        "title": "Does your child have Delusions, hallucinations, or thought disorder?",
        "isRequired": true,
        "choices": [{
            "value": "yes",
            "text": "Yes"
          },
          {
            "value": "no",
            "text": "No"
          }
        ]
      }]
    },
    {
      "name": "page2",
      "elements": [{
        "type": "radiogroup",
        "name": "Adj. disorder with anxious mood",
        "title": "Anxiety in reaction to identifiable stressor within 3 months?",
        "valueName": "Adj  disorder with anxious mood",
        "isRequired": true,
        "choices": [{
            "value": "yes",
            "text": "Yes"
          },
          {
            "value": "no",
            "text": "No"
          }
        ]
      }]
    },
    {
      "name": "page3",
      "elements": [{
        "type": "radiogroup",
        "name": "Attention deficit disorder",
        "title": "Short attention span, impulsive, and hyperactive?",
        "isRequired": true,
        "choices": [{
            "value": "yes",
            "text": "Yes"
          },
          {
            "value": "no",
            "text": "No"
          }
        ]
      }]
    },
    {
      "name": "page4",
      "elements": [{
        "type": "radiogroup",
        "name": "Separation anxiety disorder",
        "title": "Short attention span, impulsive, and hyperactive?",
        "isRequired": true,
        "choices": [{
            "value": "yes",
            "text": "Yes"
          },
          {
            "value": "no",
            "text": "No"
          }
        ]
      }]
    },
    {
      "name": "page5",
      "elements": [{
        "type": "radiogroup",
        "name": "Avoidant disorder",
        "title": "Anxiety when anticipating or experiencing separation from parents or caretaker?-",
        "isRequired": true,
        "choices": [{
            "value": "yes",
            "text": "Yes"
          },
          {
            "value": "no",
            "text": "No"
          }
        ]
      }]
    },
    {
      "name": "page6",
      "elements": [{
        "type": "radiogroup",
        "name": "Overanxious disorder",
        "title": "Persistent generalized anxiety?",
        "isRequired": true,
        "choices": [{
            "value": "item1",
            "text": "Yes"
          },
          {
            "value": "item2",
            "text": "No"
          }
        ]
      }]
    },
    {
      "name": "page7",
      "elements": [{
        "type": "radiogroup",
        "name": "Agoraphobia with panic attacks",
        "title": "Fears incapacitation outside home or public places with Panic attacks?",
        "isRequired": true,
        "choices": [{
            "value": "yes",
            "text": "Yes"
          },
          {
            "value": "no",
            "text": "No"
          }
        ]
      }]
    },
    {
      "name": "page8",
      "elements": [{
        "type": "radiogroup",
        "name": "Agoraphobia without panic attacks",
        "title": "Fears incapacitation outside home or public places without any Panic attacks?",
        "isRequired": true,
        "choices": [{
            "value": "yes",
            "text": "Yes"
          },
          {
            "value": "no",
            "text": "No"
          }
        ]
      }]
    },
    {
      "name": "page9",
      "elements": [{
        "type": "radiogroup",
        "name": "Social phobia",
        "title": "your child feel Excessive fears of scrutiny or embarrassment in any situation?",
        "isRequired": true,
        "choices": [{
            "value": "yes",
            "text": "Yes"
          },
          {
            "value": "no",
            "text": "No"
          }
        ]
      }]
    },
    {
      "name": "page10",
      "elements": [{
        "type": "radiogroup",
        "name": "Obsessive compulsive disorder",
        "title": "Recurrent persistent ego-dystonic thoughts or behaviour?",
        "isRequired": true,
        "choices": [{
            "value": "yes",
            "text": "Yes"
          },
          {
            "value": "no",
            "text": "No"
          }
        ]
      }]
    },
    {
      "name": "page11",
      "elements": [{
        "type": "radiogroup",
        "name": "Post-traumatic stress syndrome",
        "title": "Re-experiencing a significant trauma with detachment and diminished outside interests?",
        "isRequired": true,
        "choices": [{
            "value": "yes",
            "text": "Yes"
          },
          {
            "value": "no",
            "text": "No"
          }
        ]
      }]
    },
    {
      "name": "page12",
      "elements": [{
        "type": "radiogroup",
        "name": "Identity disorder",
        "title": "Distress regarding identity issues?",
        "isRequired": true,
        "choices": [{
            "value": "yes",
            "text": "Yes"
          },
          {
            "value": "no",
            "text": "No"
          }
        ]
      }]
    }
  ],
  "startSurveyText": "Start Survey",
  "questionTitleTemplate": "{no}. {title}{require}"
};

function sendDataToServer(survey) {
  //send Ajax request to your web server.
  alert("The results are:" + JSON.stringify(survey.data));
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
  model: survey,
  onComplete: sendDataToServer
});
