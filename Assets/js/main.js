//have a box in the center of the page
// back and next button
// mupltiple choice 

// what are your initials 
    //save value to high scores ---local storage 
//submit button this is what saves it to the high scores

//vars for questions

var questionNumber = 0;
var questions = [
    {question: '1. What does API mean?', answers: ['App Placement Inputs', 'Application Programming Interface', 'answer3', 'answer4' ], 
    correctAnswer: function(){return this.answers[1]} },
    //call correctAnswer()
    {question: '2. What is DOM?', answers: ['answer1', 'answer2', 'answer3', 'answer4' ], correctAnswer: function(){return this.answers[1]} },
    {question: 'Which is NOT a data type?', answers: ['String', 'Integer', 'Boolean', 'Letters' ], correctAnswer: function(){return this.answers[1]} },
    {question: 'What is an array?', answers: ['A sea animal', 'answer2', 'answer3', 'answer4' ], correctAnswer: function(){return this.answers[1]} },
    {question: 'Which is an example of what you would use an if/else statement for?', answers: ['answer1', 'answer2', 'answer3', 'answer4' ], correctAnswer: function(){return this.answers[1]} },
    {question: 'What is local storage', answers: ['answer1', 'answer2', 'answer3', 'answer4' ], correctAnswer: function(){return this.answers[1]} },
    {question: '[] are used for _____ while {} are used for ____.', answers: ['answer1', 'answer2', 'answer3', 'answer4' ], correctAnswer: function(){return this.answers[1]} },
    {question: 'What is one of the purposes for a for loop?', answers: ['answer1', 'answer2', 'answer3', 'answer4' ], correctAnswer: function(){return this.answers[1]} },
    {question: 'What has key value/pairs?', answers: ['answer1', 'answer2', 'answer3', 'answer4' ], correctAnswer: function(){return this.answers[1]} },
    {question: 'What does var mean?', answers: ['answer1', 'answer2', 'answer3', 'answer4' ], correctAnswer: function(){return this.answers[1]} }

     ]
var timer = 120;
//var hiddenObjects = documnet.getElementById
     //will display questions and answers 
function display() {
    $('#question').text (questions[questionNumber].question)
    $('#answer1').text(questions[questionNumber].answers[0])
    $('#answer2').text(questions[questionNumber].answers[1])
    $('#answer3').text(questions[questionNumber].answers[2])
    $('#answer4').text(questions[questionNumber].answers[3])
}
//function to go to next question 



 function nextQuestion(event) {
   
    if($(event.target).text() === questions[questionNumber].correctAnswer()) {
        //grabs the question and the correct answer from the question we grabbed
         console.log('Correct!')
    } else {
        console.log('Wrong!')
        //deduct time from timer 
        timer = timer - 10;
    } 
    questionNumber ++;
    //if runs out of time or if questionNumber.length then 
    if (questionNumber >= questions.length || timer === 0) {
        alert('Game over!');
        //add something that calculates and displays the user score 
    } else {
        display();
    }
 }

 $('#answer1').on('click', nextQuestion)
 $('#answer2').on('click', nextQuestion)
 $('#answer3').on('click', nextQuestion)
 $('#answer4').on('click', nextQuestion)
//ADD LATER  event listener <<runs function to check and see if it is correct and also increments the question (++)
//check if correct by using event.target (whatever you click on) store as a variable so that once the answer is selected then you have to click next
//.question

//elementById
    $('#strtBtn').on('click', function() {
        display();
          $('#begin').addClass('hide');
          $('#questions').removeClass('hide');
        //start timer 
})

// key points -getelementbyid, queryselector, event listeners (keyword event) how to start a timer, minipulation (once you get an element how do you actually change it)
// varname.style.visability="hidden";



//question and answer part of html where js text is being added to it  

// submit 
// $('#form').submit(function(e){
//     e.preventDefault();
//     console.log('submitted')
//     )
// })
//if (reached end of quiz) then record score if (auto increment question number) then itll go to the next question if (correct go to the next question)


//conditional to determine right or wrong answers 

//client side storage for high scores

// if(!answer) {
//     deduct time from clock
// } 
// if (if clock === 0 ) {
//     end game
//     display score 
// }
// if (all questions have been answered) {
//     end game 
//     display score 
// }