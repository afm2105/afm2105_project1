var userScore = 0;

var openingPrompt = alert("Hey there! Let's play a trivia game. All the questions will be prompted and they are also on the page for your convenience. Please click ok so that we can get started.");

var questionOne = prompt("What is the name of the NBA team in New York that wears blue aNd orange? Please type Nets, Knicks, or Bulls.");

if (questionOne === "Knicks" || "knicks") {
  alert("Great job! That's right!");
  userScore = userScore + 1;
}
else {
  alert("Sorry. That wasn't the right answer");
}

console.log("Your current score is " + userScore);

var questionTwo = prompt("What is the name of the Los Angeles-based NHL team? Please type Kings, Devils, or Seahawks.");

if (questionTwo === "Kings" || "kings") {
  alert("Great job! That's right!");
  userScore = userScore + 1;
}
else {
  alert("Sorry. That wasn't the right answer");
}

console.log("Your current score is " + userScore);

var questionThree=prompt("Julius Caesar was an emperor of what empire? Please type Roman, Spartan, or Byzantine.");

if (questionThree === "Roman" || "roman") {
  alert("Great job! That's right!");
  userScore = userScore + 1;
}
else {
  alert("Sorry. That wasn't the right answer");
}

console.log("Your current score is " + userScore);

var questionFour=prompt("What Canadian province in the 1970s made French its official language? Please type Quebec, British Columbia, or Alberta.");

if (questionFour === "Quebec" || "quebec") {
  alert("Great job! That's right!");
  userScore = userScore + 1;
}
else {
  alert("Sorry. That wasn't the right answer");
}

console.log("Your current score is " + userScore);

// var answerOneAlert = alert("Did you say Knicks? If yes, great! You got that one right.");
//
//
// var questionTwo=prompt ("What is the name of the Los Angeles-based NHL team? Please type Kings, Rangers, or Seahawks.");
//
// var answerTwoAlert=alert("Did you type Kings? If yes, great! You got that one right.");
//
// var questionThree=prompt("Julius Caeaser was an emperor of what empire? Please type Roman, Spartan, or Byzantine.");
//
// var answerThreeAlert=alert("Did you type Roman? If so, great, you got that one right!");
//
// var questionFour=prompt("What Canadian province in the 1970s made French its official language? Please type Quebec, British Columbia, or Alberta.");
//
// var questionFourAlert=alert("Did you type Quebec? If so, great! you got that one right!");
//
// var userScore= parseInt(prompt("Great. You finished the game. So, how many questions did you get right?"));
// console.log (userScore);
//
// if (userScore>=3) {
//   console.log("You are a trivia warrior!");
// }
// else {
//   console.log("Maybe you'll do better next time.");
// }
