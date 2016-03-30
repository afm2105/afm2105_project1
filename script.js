var userScore = 0;

var openingAlert = alert("Hey there! Let's play a trivia game. All the questions will be prompted and they are also on the page for your convenience. Please click ok so that we can get started.");

var sportsQuestions = ["What is the name of the NBA team in New York that wears blue and orange? Please chooe Nets, Knicks, or Bulls.", "What is the name of the Los Angeles-based NHL team? Please choose Kings, Devils, or Seahawks." ];
alert(sportsQuestions[0]);
alert(sportsQuestions[1]);

// function checkUserAnswer() {
//   var el = docuemnt.getElemenetById("radio1");
//   el.addEventlistener("click", checkUserAnswer);
// }

function listSportsQuestions(sportsQuestions) {
// document.querySelector(#Nets)  // listSportsQuestions.addEventListener("click", function() {
    for(var i = 0; i<sportsQuestions.length;i++) {
      console.log(sportsQuestions[i]);
    }
  }


//     if (sportsQuestions[0]==="Knicks" || "knicks") {
//       alert("Great job! That's right!");
//       userScore = userScore + 1;
//     }
//     else {
//       alert("Sorry. That wasn't the right answer");
//     }
//   if (sportsQuestions[1] === "Kings" || "kings") {
//     alert("Great job! That's right!");
//     userScore = userScore + 1;
// }
// else {
// //   alert("Sorry. That wasn't the right answer");
// }
// }
var historyQuestions = ["Julius Caeaser was an emperor of what empire? Please choose Roman, Spartan, or Byzantine.", "What Canadian province in the 1970s made French its official language? Please choose Quebec, British Columbia, or Alberta." ];
alert(historyQuestions[0]);
alert(historyQuestions[1]);

function listHistoryQuestions(historyQuestions){
  for (var i = 0; i<historyQuestions.length;i++){
    console.log(historyQuestions[i]);
  }
}

// var questionOne = prompt("What is the name of the NBA team in New York that wears blue aNd orange? Please type Nets, Knicks, or Bulls.");

// // if (questionOne === "Knicks" || "knicks") {
//   alert("Great job! That's right!");
//   userScore = userScore + 1;
// }
// else {
//   alert("Sorry. That wasn't the right answer");
// }
//
// console.log("Your current score is " + userScore);
//
// var questionTwo = prompt("What is the name of the Los Angeles-based NHL team? Please type Kings, Devils, or Seahawks.");if (questionTwo === "Kings" || "kings") {alert("Great job! That's right!");userScore = userScore + 1;}else {alert("Sorry. That wasn't the right answer");}
//
// console.log("Your current score is " + userScore);
//
// var questionThree=prompt("Julius Caesar was an emperor of what empire? Please type Roman, Spartan, or Byzantine.");
//
// if (questionThree === "Roman" || "roman") {
//   alert("Great job! That's right!");
//   userScore = userScore + 1;
// }
// else {
//   alert("Sorry. That wasn't the right answer");
// }
//
// console.log("Your current score is " + userScore);
//
// var questionFour=prompt("What Canadian province in the 1970s made French its official language? Please type Quebec, British Columbia, or Alberta.");
//
// if (questionFour === "Quebec" || "quebec") {
//   alert("Great job! That's right!");
//   userScore = userScore + 1;
// }
// else {
//   alert("Sorry. That wasn't the right answer");
// }
//
// console.log("Your current score is " + userScore);
//
// // var answerOneAlert = alert("Did you say Knicks? If yes, great! You got that one right.");
// //
// //
// // var questionTwo=prompt ("What is the name of the Los Angeles-based NHL team? Please type Kings, Rangers, or Seahawks.");
// //
// // var answerTwoAlert=alert("Did you type Kings? If yes, great! You got that one right.");
// //
// // var questionThree=prompt("Julius Caeaser was an emperor of what empire? Please type Roman, Spartan, or Byzantine.");
// //
// // var answerThreeAlert=alert("Did you type Roman? If so, great, you got that one right!");
// //
// // var questionFour=prompt("What Canadian province in the 1970s made French its official language? Please type Quebec, British Columbia, or Alberta.");
// //
// // var questionFourAlert=alert("Did you type Quebec? If so, great! you got that one right!");
// //
// // var userScore= parseInt(prompt("Great. You finished the game. So, how many questions did you get right?"));
// // console.log (userScore);
// //
// // if (userScore>=3) {
// //   console.log("You are a trivia warrior!");
// // }
// // else {
// //   console.log("Maybe you'll do better next time.");
// // }
