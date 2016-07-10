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
question1.question = "Which line best describes you?";
question1.a1 = "I'm magical";
question1.a2 = "Thoroughly annoying to my 'friends' ";
question1.a3 = "Dark and broody";
question1.a4 = "Some say you're 'special' ";
question1.a5 = "I'm fabulous";
question2.question = "Which climate best suits you?";
question2.a1 = "Temperate";
question2.a2 = "Too humid";
question2.a3 = "Extreme heat";
question2.a4 = "What's a climate?";
question2.a5 = "The tropics";
question3.question = "If you could have one power, what would it be?";
question3.a1 = "Magic";
question3.a2 = "Breathing underwater";
question3.a3 = "Telekenesis";
question3.a4 = "Ka-ra-te!";
question3.a5 = "A mic of steel";
question4.question = "Signature dance move?";
question4.a1 = "I don't dance";
question4.a2 = "'The Flail'";
question4.a3 = "'The Robot'";
question4.a4 = "The 'Nae Nae'";
question4.a5 = "'Pass the Dishes'";
question5.question = "What weapon would you bring to a street fight?";
question5.a1 = "An invisibility cloack and a sharp blade";
question5.a2 = "A powerful electrical... stick";
question5.a3 = "Can I use telekenesis twice?";
question5.a4 = "Brass Knuckles";
question5.a5 = "A highnote that could kill a man";

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
ronWeasley.description = "Congratulations? Looks like you landed yourself in the wizardly world of Harry Potter and friends. Your best friend is the most powerful wizard in the world, but it seemingly eats you up inside. Quidditch? Potions class? Being the chosen one? Destructive magic? Battling dark lords? Harry is beating you at every turn you take. You need to step up your game Ronald Weasley.";
ronWeasley.link = "http://images.hellogiggles.com/uploads/2015/07/10/Ron-Weasley-e1436589589658.jpg";

var jjBinks = Object.create(characters);
jjBinks.character = "Jar-jar Binks";
jjBinks.movie = "Star Wars, Episode II";
jjBinks.description = "'Ay-yee-yee! Wha! Was’n dat. Hey, wait! Oh, mooie-mooie! I love you!' Wow. Looks like you got Jar-jar binks. You single handedly served to ruin an entire movie. You-sa should take this quiz again-sa. 'OOOOOEEEYOOOOOEEEEEEEE'";
jjBinks.link = "http://www.themarysue.com/wp-content/uploads/2015/05/16-dallas-cowboys-jar-jar-binks_pg_600-640x476.jpg";

var aWalker = Object.create(characters);
aWalker.character = "Anakin Skywalker";
aWalker.movie = "Star Wars, Episode II";
aWalker.description = "Is she safe? Is she all right? Well, now you've done it Lord Vader. You made a deal with the devil and lost the love of your life. It looks li - wha - what are you doi - *narrator is force choked* NOOO *choking sounds*";
aWalker.link = "http://im.ziffdavisinternational.com/t/ign_in/news/a/anakin-sky/anakin-skywalker-could-have-been-in-star-wars-the_zt55.640.jpg";

var mattDamon = Object.create(characters);
mattDamon.character = "Matt Damon";
mattDamon.movie = "Matt Damon";
mattDamon.description = "MATT DAAAAMON";
mattDamon.link = "http://www.interfaithstrength.com/Newt2_files/Matt-Damon-Puppet.jpg";

var rRhod = Object.create(characters);
rRhod.character = "Ruby Rhod";
rRhod.movie = "5th Element";
rRhod.description = "In 'The Fifth Element', Ruby Rhod is a famous host of a radio show with a quarter of The Federated Territories population (over fifty billion people) listening to his show. He is an incredibly annoying character. These quiz results do not bode well for you. I recommend retaking this quiz";
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
		console.log(questionArray.length+'-'+quizPosition);
		event.preventDefault();
		if (quizPosition==questionArray.length) {
			console.log(characterArray);
			$(".questionnumber .update").text((quizPosition)+"/5");
			$(".completion .update").text("100%");
			var selection = $('input[name=choices]:checked', 'form').val();
			characterArray[selection-1].score+=1;
			$("#submitbutton").val("See Results").addClass('resultsButton');
			$(".answers").hide();
			$(".thequestion").text("Check to see how you did!");
			$("form")[0].reset();
			quizPosition++;
			
		}
		else if (quizPosition < questionArray.length) {
			console.log('here');
			var selection = $('input[name=choices]:checked', 'form').val();
			//take the submission and attach it to a character
			characterArray[selection-1].score+=1;
			generateQuestion(quizPosition, questionArray);
			$(".questionnumber .update").text((quizPosition+1)+"/5");
			$(".completion .update").text(((quizPosition/5)*100)+"%");
			quizPosition++;
			$('input:checked').prop('checked',false);
		}
		else if (quizPosition > questionArray.length) {

			var winningArrayIndex = chooseWinner(characterArray);
			displayResults(winningArrayIndex, characterArray);
			
		}
		else {

			newGame();
		}
	});

	$('#newGame').click(function(e){
		e.preventDefault();
		quizPosition = 0;
		for (var i = 0; i < characterArray.length; i++) {
			characterArray[i].score = 0;
		}
		$(".results").hide();
		$("#submitbutton").show();
		$(".answers").show();
		$("#submitbutton").val("submit").removeClass('resultsButton');
		generateQuestion(quizPosition, questionArray);
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
var highest = 1;
var tempScore;
for (var i = 0; i < 5; i++) {
	tempScore = cArray[i].score;
	if (tempScore > highest) {
		highest = tempScore;
	}
}
for (var i = 0; i < 5; i++) {
	if(cArray[i]["score"] === highest) {
		return i;
	}
}
}

function displayResults (winDex, cArray) {

	$(".results").show();
	$("#submitbutton").hide();
	$('.thequestion').text('Looks like you got: ');

	$(".results h2").append(cArray[winDex].character);
	$(".results img").attr("src", cArray[winDex].link);
	$(".results p").text(cArray[winDex].description);


}

function newGame() {



}