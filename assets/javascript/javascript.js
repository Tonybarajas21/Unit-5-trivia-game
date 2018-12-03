//array questions

var questionBank = [

    {
        question: "What is Captain America's given?",
        answers: ["Aaron Rodgers", "Scott Matheson", "Steve Rogers", "Jessie Freeman"],
        correct: "Steve Rogers"
    },

    {
        question: "Which superhero owns Wayne Enterprises?",
        answers: ["Iron Man", "Green Arrow", "Batman", "The Flash"],
        correct: "Batman"
    },

    {
        question: "What is Wolverines skeleton infused with?",
        answers: ["Vibranium", "Galvanized Steel", "Titanium", "Adamantium"],
        correct: "Adamantium"
    },

    {
        question: "Who was originally offered the part of Wolverine in the Xmen Series?",
        answers: ["Hugh Jackman", "Russel Crowe", "Keanu Reeves", " Brad Pit"],
        correct: "Russel Crowe"
    },

    {
        question: "Which of these is a real villan in Batman's universe?",
        answers: ["Polka Dot Man", "String Man", "Steel Man", "Water Man"],
        correct: "Polka Dot Man"
    },

    {
        question: "What is Loki the god of?",
        answers: ["Evil", "Mischief", "Magic", "Water"],
        correct: "Mischief"
    },

    {
        question: "Who caused the death and resurrection of Superman?",
        answers: ["Doomsday", "Lex Luthor", "Batman", "Deadpool"],
        correct: "Doomsday"
    }
    ,

    {
        question: "What X-Men character is Erik Lehnsherr?",
        answers: ["Nightcrawler", "Beast", "Wolverine", "Magneto"],
        correct: "Magneto"
    },

    {
        question: "The Flash and Superman had a race around the world. Who won?",
        answers: ["Superman", "The Flash", "Tie", "They didn't race"],
        correct: "The Flash"
    },

    {
        question: "Which DC character is a version of Marvel's Thor?",
        answers: ["Green Lantern", "Aquaman", "Shazam", "Hawkman"],
        correct: "Shazam"
    }
]

//start the game by clicking the button
$(document).ready(function () {
    $("#start-button").on("click", gameData.startTimer);
});

//game data & timer

var gameData = {

    timeRemaining: 40,

    startTimer: function () {
        $("#timer").text("Time remaining: " + gameData.timeRemaining);
        setInterval(gameData.countdown, 1000);

        //hide button on start
        $("#start-page").hide();
        trivia.displayQuestions();
    },
    //decrement timer

    countdown: function () {
        gameData.timeRemaining--;
        $("#timer").text("Time remaining: " + gameData.timeRemaining);
        if (gameData.timeRemaining === 0) {
            gameData.stopTimer();
            $("#timer").empty();
        }
    },

    //check answers when the timer stops

    stopTimer: function () {
        clearInterval();
        trivia.checkAnswers();
    },
    //hide questions
    showEndPage: function (numCorrect, numIncorrect, numUnanswered) {
        $("#end-page").show();
        $("#questions-box").empty();
        $("#timer").empty();
        $("#timer").hide();
        $("#correct-answers").text("Correct answers (Good Job! You are a nerd!): " + numCorrect);
        $("#incorrect-answers").text("Incorrect answers (Good Job! You are a not nerd!): " + numIncorrect);
        $("#unanswered").text("Skipped questions (At least try): " + numUnanswered);
        $("#Stan").html('<img src="assets/images/marveldc.jpg" class="img-fluid" alt="Responsive image">')
    }


}
// create function to generate questions and append them to the page
var trivia = {
    displayQuestions: function () {
        var divContainer = $("#questions-box");
        answerGroup = $(".form-check");
        divContainer.append("<h2> Answer the following questions:</h2>");

        for (var i = 0; i < questionBank.length; i++) {

            divContainer.append('<div id="question">' + questionBank[i].question + '</div>');

            var answer1 = questionBank[i].answers[0];
            var answer2 = questionBank[i].answers[1];
            var answer3 = questionBank[i].answers[2];
            var answer4 = questionBank[i].answers[3];

            divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer1 + '</label></div>');
            divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer2 + '</label></div>');
            divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer3 + '</label></div>');
            divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer4 + '</label></div>');

        }

    },

    //check if questions were answered, incorrect or skipped
    checkAnswers: function () {
        var correctAnswer;
        var userAnswer;
        var numCorrect = 0;
        var numIncorrect = 0;
        var numUnanswered = 0;

        for (var i = 0; i < questionBank.length; i++) {
            correctAnswer = questionBank[i].correct;
            userAnswer = $('input[id=radio' + i + ']:checked + label').text();

            if (userAnswer === correctAnswer) {
                numCorrect++;
            } else if (userAnswer === "") {
                numUnanswered++;
            } else if (userAnswer !== correctAnswer) {
                {
                    numIncorrect++;
                }
            }
        }

        //show scores
        gameData.showEndPage(numCorrect, numIncorrect, numUnanswered);
    },





}
