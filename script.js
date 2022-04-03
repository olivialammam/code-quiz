console.log("Loading jS"); 
//Grabbing my html element 
var startBtn = document.getElementById("start-quiz"); 
var timeLeft = 100;
var timerEl = document.getElementById("display-time");
var questionEl = document.getElementById("question-screen");
var startEl = document.getElementById("start-section");
var questionEl = document.getElementById("question-screen2");
var answerBtn = document.getElementById("answer");
var timeInterval; 

console.log(timerEl); 
var fruits = ["oranges", "apples", "banana", "strawberry"]; 
console.log(fruits[2]); 


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

function newQuestion() {
    var x = document.getElementById("question-screen");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
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

function displayQuestion(){
//grab the h3 and button 
//set their textCOntent 

}

//Add Event listiner to the Btn 
startBtn.addEventListener("click", startQuiz); 
