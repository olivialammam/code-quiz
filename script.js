const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed with_____.",
        choices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        answer: "2. curly brackets"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "2. other arrays"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        answer: "3. quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        answer: "4. console.log"
    }
];
// grab references to elements
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");
var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");
var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choice1 = document.getElementById("btn0");
var choice2 = document.getElementById("btn1");
var choice3 = document.getElementById("btn2");
var choice4 = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");
 var summary = document.getElementById("summary");
 var submitInitialBtn = document.getElementById("submitInitialBtn");
 var initialInput = document.getElementById("initialInput");
 var everything = document.getElementById("everything");

 var highScoreSection = document.getElementById("highScoreSection");
 var finalScore = document.getElementById("finalScore");
var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoreBtn = document.getElementById("clearHighScoreBtn"); 
 var viewHighScore = document.getElementById("viewHighScore");
 var listOfHighScores = document.getElementById("listOfHighScores");


 // define other variables
 var correctAns = 0;
 var questionNum = 0;
var scoreResult;
var questionIndex = 0;
/**
 * FUNCTIONS
 */
 // WHEN I click the start button, timer starts
 var totalTime = 75;
 function newQuiz() {
     correctAns = 0;
     questionIndex = 0;
     totalTime = 75;
     timeLeft.textContent = totalTime;
     initialInput.value = "";
     initialInput.textContent = "";

     startDiv.style.display = "none";
     questionDiv.style.display = "block";
    timer.style.display = "block";
    timesUp.style.display = "none";
    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                gameOver();
            }
        }
    },1000);
    showQuiz();
};
// console.log(questions[questionIndex].question);
// console.log(questions[questionIndex].choices);
// then presented with questions and choices
function showQuiz() {
    nextQuestion();
}
function nextQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
    choice1.textContent = questions[questionIndex].choices[0];
    choice2.textContent = questions[questionIndex].choices[1];
    choice3.textContent = questions[questionIndex].choices[2];
    choice4.textContent = questions[questionIndex].choices[3];
}
// after question is answered, show if correct or wrong
function checkAnswer(answer) {
    var lineBreak = document.getElementById("lineBreak");
    lineBreak.style.display = "block";
    answerCheck.style.display = "block";
    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        // correct answer, add 1 score to final score
        correctAns++;
        // console.log(correctAns);
        answerCheck.textContent = "Correct!";
    } else {
        // wrong answer, deduct 10 second from timer
        totalTime -= 10;
        timeLeft.textContent = totalTime;
        answerCheck.textContent = "Wrong! The correct answer is: " + questions[questionIndex].answer;
    }
    questionIndex++;
    // repeat with the rest of questions 
    if (questionIndex < questions.length) {
        nextQuestion();
    } else {
        // if no more question, run game over function
        gameOver();
    }
}
function choose1() { checkAnswer(0); }
function choose2() { checkAnswer(1); }
function choose3() { checkAnswer(2); }
function choose4() { checkAnswer(3); }
// when all questions are answered or timer reaches 0, game over
function gameOver() {
    summary.style.display = "block";
    questionDiv.style.display = "none";
    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "block";
    // show final score
    finalScore.textContent = correctAns;
 }

 // enter initial and store highscore in local storage
 function storeHighScores() {
 function storeHighScores(event) {
     event.preventDefault();
 }

     // stop function if initial is blank
     // stop function is initial is blank
     if (initialInput.value === "") {
         alert("Please enter your initials!");
         return;
    } 
    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScoreSection.style.display = "block";   
    // store scores into local storage
    var savedHighScores = localStorage.getItem("high scores");
    var scoresArray;
    if (savedHighScores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedHighScores)
    }
    var userScore = {
        initials: initialInput.value,
        score: finalScore.textContent
    };
     console.log(userScore);
     scoresArray.push(userScore);

     // stringify array in order to store in local storage
     // stringify array in order to store in local
     var scoresArrayString = JSON.stringify(scoresArray);

     // console.log(highScoreString);


     window.localStorage.setItem("high scores", scoresArrayString);

    // show current highscores
    showHighScores();
}

 // function to show high scores
 var i = 0;
 function showHighScores() {
 function showHighScores(event) {
     event.preventDefault();

     startDiv.style.display = "none";
     timer.style.display = "none";
     questionDiv.style.display = "none";
     timesUp.style.display = "none";
     summary.style.display = "none";
     highScoreSection.style.display = "block";

     var savedHighScores = localStorage.getItem("high scores");
 }

     // check if there is any stored in local storage
     // check if there is any in local storage
     if (savedHighScores === null) {
         return;
     }

     for (; i < storedHighScores.length; i++) {
         var eachNewHighScore = document.createElement("p");
         // eachNewHighScore.setAttribute()
         eachNewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
         listOfHighScores.appendChild(eachNewHighScore);
     }
}
/**
 * ADD EVENT LISTENERS
 */
startQuizBtn.addEventListener("click", newQuiz);
choice1.addEventListener("click", choose1);
choice2.addEventListener("click", choose2);
choice3.addEventListener("click", choose3);
choice4.addEventListener("click", choose4);
submitInitialBtn.addEventListener("click", storeHighScores);
viewHighScore.addEventListener("click", showHighScores);
goBackBtn.addEventListener("click", function() {
    startDiv.style.display = "block";
    highScoreSection.style.display = "none";
});
clearHighScoreBtn.addEventListener("click", function(){
    window.localStorage.removeItem("high scores");
    listOfHighScores.innerHTML = "High Scores Cleared!";
    listOfHighScores.setAttribute("style", "font-family: 'Archivo', sans-serif; font-style: italic;")
});