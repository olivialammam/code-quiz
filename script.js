console.log("Loading jS"); 
//Grabbing my html element 
var startBtn = document.getElementById("start-quiz"); 
var timeLeft = 100;
var timerEl = document.getElementById("display-time");
var questionEl = document.getElementById("question-screen");
var startEl = document.getElementById("start-section");
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
var displayQuestion = document.getElementById('question-screen');
var submitBtn = document.getElementById("submit");
var timeInterval; 

console.log(timerEl); 
var fruits = ["oranges", "apples", "banana", "strawberry"]; 
console.log(fruits[2]); 


function displayQuestion(){
    for (var i = 0; i < questions.length; i++) {
        
    }
//grab the h3 and button 
//set their textCOntent 

}

function startQuiz(){
    alert("welcome to coding challenge"); 
    //call the clock function 
    countdown(); 
    //show the question section 
    questionEl.style.display = "block"; 
    //hide the satrt section 
    startEl.style.display = "none";
    //show the question 
    displayQuestion();

    function answer() {
        //show the question section 
        questionEl.style.display = "block"; 
        //hide the satrt section 
        startEl.style.display = "none";
        //show the question 
        displayQuestion(); 

}
}

//Declaring a function named countDown 
function countdown() {
  
    // setInterval() method:
    timeInterval = setInterval(function () {
      // the `if` statement:
      if(timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } // the else if` statement:
      else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } // the `else` statement:
      else {
          //Time's up 
        timerEl.textContent = '';
        clearInterval(timeInterval);
      }
    }, 1000); //call this func every sec 
  }


// Var with array and object for questions 
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an else/if statement is enclosed with______",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: "alerts"
    },
    {
        title: "Arrays in JavaScript can be used to store______",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "alerts"
    },
    {
        title: "String values must be enclosed within______",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "alerts"
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["javascript", "terminal bash", "for loops", "console.log"],
        answer: "alerts"
    },

];


//Add Event listiner to the Btn 
startBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", displayQuestion);