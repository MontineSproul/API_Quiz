//have a box in the center of the page
// back and next button
// mupltiple choice 

// what are your initials 
    //save value to high scores ---local storage 
//submit button this is what saves it to the high scores

//vars for questions

var questionNumber = 0;
var questions = [
    {question: '1. What does API mean?', answers: ['answer1', 'answer2', 'answer3', 'answer4' ], correctAnswer: this.answers[1] },
    {question: '2. What is DOM?', answers: ['answer1', 'answer2', 'answer3', 'answer4' ], correctAnswer: this.answers[0] },
    {question: 'Which is NOT a data type?', answers: ['answer1', 'answer2', 'answer3', 'answer4' ], correctAnswer: this.answers[3] },
    {question: 'What is an array?', answers: ['answer1', 'answer2', 'answer3', 'answer4' ], correctAnswer: this.answers[3] },
    {question: 'Which is an example of what you would use an if/else statement for?', answers: ['answer1', 'answer2', 'answer3', 'answer4' ], correctAnswer: this.answers[0] },
    {question: 'What is local storage', answers: ['answer1', 'answer2', 'answer3', 'answer4' ], correctAnswer: this.answers[1] },
    {question: '[] are used for _____ while {} are used for ____.', answers: ['answer1', 'answer2', 'answer3', 'answer4' ], correctAnswer: this.answers[2] },
    {question: 'What is one of the purposes for a for loop?', answers: ['answer1', 'answer2', 'answer3', 'answer4' ], correctAnswer: this.answers[2] },
    {question: 'What has key value/pairs?', answers: ['answer1', 'answer2', 'answer3', 'answer4' ], correctAnswer: this.answers[1] },
    {question: 'What does var mean?', answers: ['answer1', 'answer2', 'answer3', 'answer4' ], correctAnswer: this.answers[2] }

     ]
     //will display questions and answers 
function display() {
    document.querySelector('#question').textContent = questions[questionNumber].question
    questions[questionNumber].answers[2]
}
//function to go to next question 
 function nextQuestion() {

 }
//ADD LATER next button with an event listener <<runs function to check and see if it is correct and also increments the question (++)
//check if correct by using event.target (whatever you click on) store as a variable so that once the answer is selected then you have to click next
//.question

//elementById
document.querySelector('.start').addEventListener('click', function() {
        // display()
        document.getElementById("btn").display = 'none';
          
        //start timer 
})
// key points -getelementbyid, queryselector, event listeners (keyword event) how to start a timer, minipulation (once you get an element how do you actually change it)


//question and answer part of html where js text is being added to it  



//if (reached end of quiz) then record score if (auto increment question number) then itll go to the next question if (correct go to the next question)


//conditional to determine right or wrong answers 

//client side storage for high scores