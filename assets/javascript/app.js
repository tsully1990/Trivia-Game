$("#start").on("click", function(){
    $("#start").remove();
    game.loadQuestion();
})

$(document).on("click", ".answer-button", function(e){
    game.clicked(e);
})


var questions = [{
    question: "How many Earths could fit inside the sun?",
    answers:["1,300", "13,000", "130,000", "1.3 million", "1.3 billion"],
    correctAnswer: "1.3 million",
}, {
    question: "Where were the Declaration of Independence, the Constitution, and the Bill of Rights stored during World War II?",
    answers:["fort knox", "fort bragg", "nasa", "the white house", "the pentagon"],
    correctAnswer: "fort knox",
}, {
    question: "How many of the speeches in Shakespeare's plays are recited by women?",
    answers:["33%", "22%", "17%", "52%", "78%"],
    correctAnswer: "17%",
}, {
    question: "Which country consumes the most chocolate per capita?",
    answers:["Switzerland", "France", "Belgium", "Germany", "United States"],
    correctAnswer: "Switzerland",
}, {
    question: "In which country was the largest-known Tyrannosaurus rex skeleton found?",
    answers:["United States", "Canada", "Mexico", "Russia", "Hungary"],
    correctAnswer: "Canada",
}, {
    question: "What is a duel between three people called?",
    answers:["a duel", "1 on 1 on 1", "a triangle showdown", "2 v 1", "a truel"],
    correctAnswer: "a truel",
}, {
    question: "Which U.S. state does not observe Daylight Saving Time?",
    answers:["Alabama", "Montana", "Hawaii", "Arizona", "Maine"],
    correctAnswer: "Hawaii",
}, {
    question: "What was the first toy to be advertised on television?",
    answers:["hot wheels", "barbie", "legos", "mr. potato head", "chemistry set"],
    correctAnswer: "mr. potato head",
}, {
    question: "After Antarctica, what is the most sparsely populated continent?",
    answers:["Africa", "Australia", "Asia", "North America", "South America"],
    correctAnswer: "Australia",
}, {
    question: "What is the smallest bone in the human body?",
    answers:["femur", "stapes", "pinky finger", "pinky toe", "nose"],
    correctAnswer: "stapes",
}];


//creatign your variables
var game = {
    counter:30,
    correct:0,
    incorrect:0,
    questions: questions,
    currentQuestion:0,
    
    countdown: function(){
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter <=0){
            console.log("time is up!");
            game.timeUp();
        }
    },
    loadQuestion: function(){

        timer = setInterval(game.countdown,1000);
        $("#subwrapper").html("<h2 id='counter'>30</h2>");
        $("#subwrapper").append('<h2>' +questions[game.currentQuestion].question+ '</h2>');
        for(var i = 0; i < questions[game.currentQuestion].answers.length; i++){
            $("#subwrapper").append('<button class="answer-button" id="button- '
            +i+'" data-name="'+questions[game.currentQuestion].answers[i]+
             '">'+questions[game.currentQuestion].answers[i]+ '</button>');
             
            }
    },
    nextQuestion: function(){
        game.counter = 30;
        $("#counter").html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();

    },
    //creating a method to 
    timeUp: function(){
        clearInterval(timer);
        $("#subwrapper").html('<h2>times up!</h2>');
        $("#subwrapper").append('<h3>the correct answer is: '+questions[game.currentQuestion].correctAnswer+'</h3>');
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results, 1000);
        } else {
            setTimeout(game.nextQuestion, 1000);
        }


    },
    //creating a method to apply the players score and create a reset button to restard the game
    results: function(){
        clearInterval(timer);
        $("#subwrapper").append("<h2>correct: "+game.correct+"</h2>");
        $("#subwrapper").append("<h2>incorrect: "+game.incorrect+"</h2>");

    },
    //creating a method to capture the event Clicked 
    clicked: function(e){
        clearInterval(timer);
        if($(e.target).data("name")==questions[game.currentQuestion].correctAnswer){
            game.answeredCorrect();

        } else {
            game.answeredIncorrect();
        }
    },
    //creating a method to store your correctly answered questions
    answeredCorrect: function(){
        clearInterval(timer);
        game.correct++;
        $("#subwrapper").html("<h2>that is correct!</h2>");
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results, 1000);
        } else {
            setTimeout(game.nextQuestion, 1000);
        }

    },
    //creating a method to store your incorrect answers
    answeredIncorrect: function(){
        clearInterval(timer);
        game.incorrect++;
        $("#subwrapper").html("<h2>that is wrong!</h2>");
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results, 1000);
        } else {
            setTimeout(game.nextQuestion, 1000);
        }

    },
 


}
