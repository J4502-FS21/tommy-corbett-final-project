"use strict";
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var correct = 0;


  	if (question1 == "37") {
  		correct++;
  }
  	if (question2 == "Johnny 'Bananas' Devenanzio") {
  		correct++;
  }
  	if (question3 == "$14 million") {
  		correct++;
  	}
		if (question4 == "ANSWER") {
  		correct++;
		}
		if (question5 == "28") {
  		correct++;
		}
		if (question6 == "ANSWER") {
  		correct++;
		}

	var pictures = ["quizwin.png", "meh.png", "elimination.png"];
	var messages = ["Great job! You're safe this week!", "That's just okay. Hopefully you won't be the house vote.", "That was bad. You're going into elimination this week."];
	var score;

  	if (correct == 0) {
  		score = 2;
  	}

  	if (correct > 0 && correct < 6) {
  		score = 1;
  	}

  	if (correct == 6) {
  		score = 0;
  	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
