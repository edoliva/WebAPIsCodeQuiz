var questions = [
  {
      title: "Which of the following is NOT a programming language?",
      choices: ['HTML', 'JavaScript', 'c.Lock', 'CSS'],
      answer: "c.Lock" 
  },
  {
      title: "Which 'terminal' command prompts will update your GitHub account with your most recent code?",
      choices: ['git add ., git commit -m "blah", git push', 'get-it, got.it, push^it', 'abc, 123, xyz', 'snap, crackle/, pop^'],
      answer: 'git add ., git commit -m "blah", git push' 
  },
  {
      title: "When referencing a CLASS in JS, what symbol charcter should you put before it?",
      choices: ['&&', '#', '.', '-/'],
      answer: "." 
  },
  {
      title: "querySelector will allow you to _______ content referenced in an HTML file.",
      choices: ['input', 'change', 'delete', 'All of the above.'],
      answer: "All of the above." 
  },
  {
      title: "When we execute a JavaScript function, we _________.",
      choices: ['run, or call, it', 'modify it', 'delete it', 're-order the placement'],
      answer: 'run, or call, it' 
  },
  {
      title: "Which code will allow you to make edits to HTML classes or ids from your JavaScript code?",
      choices: ['document.console()', 'querySelector.log', 'document.query', 'document.querySelector'],
      answer: 'document.querySelector'
  },
  {
      title: "Placeholder",
      choices: ["Placeholder", "Placeholder", "Placeholder", "Placeholder"],
      answer: "Placeholder" 
},
];

var initialsInput = document.querySelector("#initials");
var scoresInput = document.querySelector("#highscores");

var submitButton = document.querySelector("#submit-button");
var lastUserSpan = document.querySelector("#last-user");
var userScoreSpan = document.querySelector("#user-score");
var rightWrong = document.querySelector("#result");

var startBox = document.querySelector("#startbox");
var questionBox = document.querySelector("#questionbox");
var quizComplete = document.querySelector("#quiz-complete");
var highScore = document.querySelector("#high-score");

var startButton = document.querySelector(".start-button");
var submitButton = document.querySelector(".submit-button");

var answerButton1 = document.querySelector("#answer1");
var answerButton2 = document.querySelector("#answer2");
var answerButton3 = document.querySelector("#answer3");
var answerButton4 = document.querySelector("#answer4");
var timerEl = document.getElementById('countdown');

var questionAnswer = "";

var scoresANDinitials = [];

// start at 74 because there is a about a 1 sec start lag on click from 75
var timeLeft = 74;
var yourScore = document.querySelector("#your-score");

var questionNum = 0

// start button commands
startButton.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("start game");
    // create time to start countdown
    function countdown() {
      // start at 74 because there is a about a 1 sec start lag on click from 75
      timeLeft = 74;
      // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
      var timeInterval = setInterval(function () {
        if(timeLeft <= 1 || questionNum == 7) {
          timerEl.textContent = 'GAME OVER';
          clearInterval(timeInterval);
          yourScore.textContent = Math.max(timeLeft,0);
          // use .css to change .info-box to hidden
          questionBox.setAttribute("style", "display: none;");
          // use .css to change .quiz-box to inline-block
          quizComplete.setAttribute("style", "display: inline-block;");
        };
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
          // Set the `textContent` of `timerEl` to show the remaining seconds
          timerEl.textContent = timeLeft + ' sec';
          // Decrement `timeLeft` by 1
          timeLeft--;
        }
      }, 1000);
    }
    countdown();

    // use .css to change .info-box to hidden
    startBox.setAttribute("style", "display: none;");
    // use .css to change .quiz-box to inline-block
    questionBox.setAttribute("style", "display: inline-block;");

    nextQuestion();
});

  // answer check and display changes by answer choice
  answerButton1.addEventListener("click", function(event) {
    // if clicked, set style to display:none for the 3 other answers so the user cannot select them
    answerButton2.setAttribute("style", "display:none;");
    answerButton3.setAttribute("style", "display:none;");
    answerButton4.setAttribute("style", "display:none;");
    var answerPicked = document.getElementById("choice1").textContent
    console.log(answerPicked);
    result = (answerPicked === questionAnswer);
    if (!result) {
      rightWrong.textContent = "WRONG! -10 sec";
      timeLeft = timeLeft-10; 
    } else {console.log("right");
    rightWrong.textContent = "Right.";
    }
  });
  answerButton2.addEventListener("click", function(event) {
    // if clicked, set style to display:none for the 3 other answers so the user cannot select them
    answerButton1.setAttribute("style", "display:none;");
    answerButton3.setAttribute("style", "display:none;");
    answerButton4.setAttribute("style", "display:none;");
    var answerPicked = document.getElementById("choice2").textContent
    console.log(answerPicked);
    result = (answerPicked === questionAnswer);
    if (!result) {
      rightWrong.textContent = "WRONG! -10 sec";
      timeLeft = timeLeft-10; 
    } else {console.log("right");
    rightWrong.textContent = "Right.";
    }
  });
  answerButton3.addEventListener("click", function(event) {
    // if clicked, set style to display:none for the 3 other answers so the user cannot select them
    answerButton1.setAttribute("style", "display:none;");
    answerButton2.setAttribute("style", "display:none;");
    answerButton4.setAttribute("style", "display:none;");
    var answerPicked = document.getElementById("choice3").textContent
    console.log(answerPicked);
    result = (answerPicked === questionAnswer);
    if (!result) {
      rightWrong.textContent = "WRONG! -10 sec";
      timeLeft = timeLeft-10; 
    } else {console.log("right");
    rightWrong.textContent = "Right.";
    }
  });
  answerButton4.addEventListener("click", function(event) {
    // if clicked, set style to display:none for the 3 other answers so the user cannot select them
    answerButton1.setAttribute("style", "display:none;");
    answerButton2.setAttribute("style", "display:none;");
    answerButton3.setAttribute("style", "display:none;");
    var answerPicked = document.getElementById("choice4").textContent
    console.log(answerPicked);
    result = (answerPicked === questionAnswer);
    if (!result) {
      rightWrong.textContent = "WRONG! -10 sec";
      timeLeft = timeLeft-10; 
    } else {console.log("right");
    rightWrong.textContent = "Right.";
    }
  });

// next question button commands
function nextQuestion() { 
  // ensure all answer choice boxes are displayed
  answerButton1.setAttribute("style", "display:list-item;");
  answerButton2.setAttribute("style", "display:list-item;");
  answerButton3.setAttribute("style", "display:list-item;");
  answerButton4.setAttribute("style", "display:list-item;");
  // make sure an answer is selected
  if(questionNum >= 1 && rightWrong.textContent == "") {
    alert("Choose SOMETHING!");
    return;
  };
  rightWrong.textContent = "";
  var result = "";
  var questionTitle = document.getElementById("questionTitle").textContent = "";  
  var choice1 = document.getElementById("choice1").textContent = "";
  var choice2 = document.getElementById("choice2").textContent = "";
  var choice3 = document.getElementById("choice3").textContent = "";
  var choice4 = document.getElementById("choice4").textContent = "";

  questionTitle = document.getElementById("questionTitle").textContent = questions[questionNum].title;  
  choice1 = document.getElementById("choice1").textContent = questions[questionNum].choices[0];
  choice2 = document.getElementById("choice2").textContent = questions[questionNum].choices[1];
  choice3 = document.getElementById("choice3").textContent = questions[questionNum].choices[2];
  choice4 = document.getElementById("choice4").textContent = questions[questionNum].choices[3];
  var currentQuestionNum = questionNum;
  questionNum++;

  questionAnswer = questions[currentQuestionNum].answer;
  console.log(questionAnswer);
  console.log(result);

  if(questionNum == questions.length) {
        // use .css to change .info-box to hidden
        questionBox.setAttribute("style", "display: none;");
        // use .css to change .quiz-box to inline-block
        quizComplete.setAttribute("style", "display: inline-block;");
        yourScore.textContent = timeLeft;
  };
};
  
renderLastRegistered();

function renderLastRegistered() {
  var initials = localStorage.getItem("initials");
  var userScore = localStorage.getItem("userScore");

  lastUserSpan.textContent = initials;
  userScoreSpan.textContent = userScore;
}

submitButton.addEventListener("click", function(event) {
  event.preventDefault();

  var initials = document.querySelector("#initials").value.trim();

  // check to ensure user has entered a username/initials
  if (initials === "") {
    alert("Enter SOMETHING!");
    return;
  }

  localStorage.setItem("initials", initials);
  // +1 because there is ONE LAST final tick in the countdown function
  localStorage.setItem("userScore", Math.max(timeLeft+1, 0));
  renderLastRegistered();
  
  var scoreInitialText = {
    score: Math.max(timeLeft+1, 0),
    initial: initials
  };
  scoresANDinitials = JSON.parse(localStorage.getItem("scoresANDinitials"));
  
  if (scoresANDinitials === null) {scoresANDinitials = []};
  
  scoresANDinitials.push(scoreInitialText);
   // create desending list of array objects
  scoresANDinitials.sort(
    function (a,b) {
      return b.score - a.score;
    }
  );
  localStorage.setItem("scoresANDinitials", JSON.stringify(scoresANDinitials));

  //display top 5 scores from sorted array in local storage
  for (var i = 0; i <= 4; i++) {
  var placei = document.querySelector("#place"+i);
  if (scoresANDinitials[i] != undefined) {
  placei.textContent = scoresANDinitials[i].score+" "+scoresANDinitials[i].initial;}
  }; 

  quizComplete.setAttribute("style", "display: none;");
  // use .css to change .quiz-box to inline-block
  highScore.setAttribute("style", "display: inline-block;");

}
);

function clearALLhighscore() {
  for (var i = 0; i <= 4; i++) {
    var placei = document.querySelector("#place"+i);
    placei.textContent = "";
    }; 
    localStorage.clear()
}