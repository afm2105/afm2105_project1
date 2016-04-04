var userScore = 0;
var userScorebutton=document.getElementById("user_score");
var knicksChosen = document.getElementById("Knicks");

var openingAlert = alert("Hey there! Let's play a trivia game. All the questions will be dispalyed in the console and they are also on the page for your convenience. Please answer each question only once. Please click 'ok' so that we can get started.");

var sportsQuestions = ["What is the name of the NBA team in New York that wears blue and orange? Please chooe Nets, Knicks, or Bulls.", "What is the name of the Los Angeles-based NHL team? Please choose Kings, Devils, or Seahawks." ];
console.log(sportsQuestions[0]);
console.log(sportsQuestions[1]);

var historyQuestions = ["Julius Caesar was an emperor of what empire?","What Canadian province in the 1970s made French its official language?",];
console.log(historyQuestions[0]);
console.log(historyQuestions[1]);

// function listSportsQuestions(sportsQuestions) {
//   for(i = 0; i<sportsQuestions.length;i++) {
//       console.log(sportsQuestions[i]);
//     }
//   }

var button= document.querySelector("#Knicks");
var handleClickEvent = function(){
  console.log("That's right!");
  alert("That's right!");
  userScore = (userScore+1);
  console.log("Your total score is currently " +" "+ userScore + ".");
};

button.addEventListener("click", handleClickEvent);

var button= document.querySelector("#Nets");
var handleClickEvent = function(){
  console.log("Sorry. That's wrong.");
  alert("Sorry. That's wrong.");
  console.log("Your total score is currently " +" "+ userScore + ".");
};

button.addEventListener("click", handleClickEvent);

var button= document.querySelector("#Bulls");
var handleClickEvent = function(){
  console.log("Sorry. That's wrong.");
  alert("Sorry. That's wrong.");
  console.log("Your total score is currently " +" "+ userScore + ".");
};

button.addEventListener("click", handleClickEvent);

var button= document.querySelector("#Kings");
var handleClickEvent = function(){
  console.log("That's right!");
  alert("That's right!");
  userScore = (userScore+1);
  console.log("Your total score is currently " +" "+ userScore + ".");
};

button.addEventListener("click", handleClickEvent);


var button= document.querySelector("#Devils");
var handleClickEvent = function(){
  console.log("Sorry. That's wrong.");
  alert("Sorry. That's wrong.");
  console.log("Your total score is currently " +" "+ userScore + ".");
};

button.addEventListener("click", handleClickEvent);

var button= document.querySelector("#Seahawks");
var handleClickEvent = function(){
  console.log("Sorry. That's wrong.");
  alert("Sorry. That's wrong.");
  console.log("Your total score is currently " +" "+ userScore + ".");
};

button.addEventListener("click", handleClickEvent);

var button= document.querySelector("#Roman");
var handleClickEvent = function(){
  console.log("That's right!");
  alert("That's right!");
  userScore = (userScore+1);
  console.log("Your total score is currently " +" "+ userScore + ".");
};

button.addEventListener("click", handleClickEvent);

var button= document.querySelector("#Spartan");
var handleClickEvent = function(){
  console.log("Sorry. That's wrong.");
  alert("Sorry. That's wrong.");
  console.log("Your total score is currently " +" "+ userScore + ".");
};

button.addEventListener("click", handleClickEvent);

var button= document.querySelector("#Byzantine");
var handleClickEvent = function(){
  console.log("Sorry. That's wrong.");
  alert("Sorry. That's wrong.");
  console.log("Your total score is currently " +" "+ userScore + ".");
};

button.addEventListener("click", handleClickEvent);

var button= document.querySelector("#Quebec");
var handleClickEvent = function(){
  console.log("That's right!");
  alert("That's right!");
  userScore = (userScore+1);
  console.log("Your total score is currently " +" "+ userScore + ".");
};

button.addEventListener("click", handleClickEvent);

var button= document.querySelector("#British_Columbia");
var handleClickEvent = function(){
   console.log("Sorry. That's wrong.");
   alert("Sorry. That's wrong.");
   console.log("Your total score is currently " +" "+ userScore + ".");
};

button.addEventListener("click", handleClickEvent);

var button= document.querySelector("#Alberta");
var handleClickEvent = function(){
  console.log("Sorry. That's wrong.");
  alert("Sorry. That's wrong.");
  console.log("Your total score is currently " +" "+ userScore + ".");
};

button.addEventListener("click", handleClickEvent);

//
// var finalButton = document.getElementsByTagName("button");
// var handleClickEvent = function(){
//   alert("Thanks for playing!");
// };
//
// finalButton[0].addEventListener("click", handleClickEvent);
//

// var buttons = document.getElementsByTagName("button");

knicksChosen.addEventListener("click", updateScore);

function updateScore() {
  userScore = (userScore + 1);
  userScoreButton.textContent="Your score is" + " " + userScore;
}

var finalButton = document.getElementById("final_button");

finalButton.addEventListener("click", updateButton);

function updateButton() {
  console.log("Thanks for playing!");
  finalButton.textContent="Thanks for playing!";
  finalButton.style.background='#87AFC7';
}
// var newButtonColor = document.getElementsByTagName("button");
// var handleClickEvent =  function(){
//   newButtonColor.style.background = "blue";
// };
//
// newButtonColor[0].addEventListener("click", handleClickEvent);

// // var showTextContent=domManipulation.textContent;
// domManipulation[0].textContent="Thanks for playing.";
// document.getElementsByTagName("button").innerHTML = "Thanks for playing!";

// document.getElementsByTagName("button").style.backgroundColor = green;
// function setColor(btn, color){
//     var count=1;
//     var property = document.getElementsByTagName("button");
//     if (count === 0){
//         property.style.backgroundColor = "white";
//         count=1;
//     }
//     else{
//         property.style.backgroundColor = "green";
//         count=0;
//     }
//
// }
// document.getElementsByTagName("button").bgcolor="#green";

// var count=1;
// function setColor(finalButton, color){
//     var property = document.getElementsByTagName("button");
//     if (count === 0){
//         property.style.backgroundColor = red;
//         count=1;
//     }
//     else{
//         property.style.backgroundColor = white;
//         count=0;
//       }
//     }
// if (userScore>=3) {
//   alert("great job!");
// }
// else {
//   alert ("You got 2 or fewer questions right. Maybe you'll do better next time.");
// }
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
// var historyQuestions = ["Julius Caeaser was an emperor of what empire? Please choose Roman, Spartan, or Byzantine.", "What Canadian province in the 1970s made French its official language? Please choose Quebec, British Columbia, or Alberta." ];
// alert(historyQuestions[0]);
// alert(historyQuestions[1]);

// function listHistoryQuestions(historyQuestions){
//   for (var i = 0; i<historyQuestions.length;i++){
//     console.log(historyQuestions[i]);
//   }
// }

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
// function checkUserAnswer() {
//   var el = docuemnt.getElemenetById("radio1");
//   el.addEventlistener("click", checkUserAnswer);
// }

// document.querySelector(#Nets)  // listSportsQuestions.addEventListener("click", function() {
