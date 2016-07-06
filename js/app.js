$(document).ready(function() {

//start a new quiz
	//--> on "take it again" click, reset all values in game to 0

//declare the question object
var questionformat = {
	question: "Question 1 text",
	a1: "Answer 1 text",
	a2: "Answer 2 text",
	a3: "Answer 3 text",
	a4: "Answer 4 text",
	a5: "Answer 5 text",
	key: function(n) {
		return this[Object.keys(this)[n]];
	}
};
//make each question-answer pair
var question1 = Object.create(questionformat);
var question2 = Object.create(questionformat);
var question3 = Object.create(questionformat);
var question4 = Object.create(questionformat);
var question5 = Object.create(questionformat);
question1.question = "Question 1 text";
question1.a1 = "Q1A1 Text";
question1.a2 = "Q1A2 Text";
question1.a3 = "Q1A3 Text";
question1.a4 = "Q1A4 Text";
question1.a5 = "Q1A5 Text";
question2.question = "Question 2 text";
question2.a1 = "Q2A1 Text";
question2.a2 = "Q2A2 Text";
question2.a3 = "Q2A3 Text";
question2.a4 = "Q2A4 Text";
question2.a5 = "Q2A5 Text";
question3.question = "Question 3 text";
question3.a1 = "Q3A1 Text";
question3.a2 = "Q3A2 Text";
question3.a3 = "Q3A3 Text";
question3.a4 = "Q3A4 Text";
question3.a5 = "Q3A5 Text";
question4.question = "Question 4 text";
question4.a1 = "Q4A1 Text";
question4.a2 = "Q4A2 Text";
question4.a3 = "Q4A3 Text";
question4.a4 = "Q4A4 Text";
question4.a5 = "Q4A5 Text";
question5.question = "Question 5 text";
question5.a1 = "Q5A1 Text";
question5.a2 = "Q5A2 Text";
question5.a3 = "Q5A3 Text";
question5.a4 = "Q5A4 Text";
question5.a5 = "Q5A5 Text";

//make object for characters
var characters = {

	character: "Character Name",
	movie: "Movie that was",
	description: "This is an explanation of said character",
	score: 0,
	link: "link"

};

//declare character types that people can get matched with
var ronWeasley = Object.create(characters);
ronWeasley.character = "Ron Weasley";
ronWeasley.movie = "Harry Potter";
ronWeasley.description = "Description of Ron will go here";
ronWeasley.link = "http://images.hellogiggles.com/uploads/2015/07/10/Ron-Weasley-e1436589589658.jpg";
var jjBinks = Object.create(characters);
jjBinks.character = "Jar-jar Binks";
jjBinks.movie = "Star Wars, Episode II";
jjBinks.description = "Description of Jar-jar will go here";
jjBinks.link = "http://www.themarysue.com/wp-content/uploads/2015/05/16-dallas-cowboys-jar-jar-binks_pg_600-640x476.jpg";
var aWalker = Object.create(characters);
aWalker.character = "Anakin Skywalker";
aWalker.movie = "Star Wars, Episode II";
aWalker.description = "Description of anakin will go here";
aWalker.link = "http://im.ziffdavisinternational.com/t/ign_in/news/a/anakin-sky/anakin-skywalker-could-have-been-in-star-wars-the_zt55.640.jpg"; 
var mattDamon = Object.create(characters);
mattDamon.character = "Matt Damon";
mattDamon.movie = "Matt Damon";
mattDamon.description = "MATT DAAAAMON";
mattDamon.link = "http://www.interfaithstrength.com/Newt2_files/Matt-Damon-Puppet.jpg";
var rRhod = Object.create(characters);
rRhod.character = "Ruby Rhod";
rRhod.movie = "5th Element";
rRhod.description = "Description of Ruby rhod will go here";
rRhod.link = "http://vignette4.wikia.nocookie.net/bloodandhonor/images/7/74/Ruby_Rhod.jpg/revision/latest?cb=20120709161623";

//put all characters in an array
var characterArray = [ronWeasley, jjBinks, aWalker, mattDamon, rRhod];

//put questions into an array
var questionArray = [question1, question2, question3, question4, question5];
var quizPosition = 0;

//populate a question on the screen using object for questions and answers
generateQuestion(quizPosition, questionArray);
quizPosition++;

//do all the normal stuff up through 5 submissions
$("form").on("submit", function(event) {
event.preventDefault();
if (quizPosition==5) {
	console.log(characterArray);
	///$(".thequestion").hide();
	//$(".answers").hide();
	//var winner = chooseWinner(characterArray);
	//console.log(winner);
	//$(".results h2").show();
	//$(".results img").show();
	//$(".results p").show();
	//$(".completion").css("width", "50%");
	//$(".questionnumber").css("width", "50%");
}
var selection = $('input[name=choices]:checked', 'form').val();
//take the submission and attach it to a character
characterArray[selection-1].score+=1;
generateQuestion(quizPosition, questionArray);
$(".questionnumber").text("Question:" +(quizPosition+1)+"/5");
$(".completion").text("Completion:" +((quizPosition/5)*100)+"%");
quizPosition++;
});
});


//evaluate answers
	//--> tally up the scores and check to see which is highest

//tally and display user score
	//--> manipulate dom to hide and display results screen

function generateQuestion (x, qArray) {

if (x < 5) {
var position = qArray[x];
var question = position.question;
var answers = [position.a1, position.a2, position.a3, position.a4, position.a5];
var liCount = 0;
$(".thequestion").text(question);
$("label").each(function() {
$(this).text(answers[liCount]);
liCount++;

});
}
}
function chooseWinner (cArray) {

	for(i=0; i<5; i++) {
	
		console.log(cArray[i].score);


	}

	return "foo";
}