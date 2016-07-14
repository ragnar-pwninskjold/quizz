var questionArray = [
	{
		question: "Which line best describes you?", 
		answers: ["I'm magical", "Thoroughly annoying to my 'friends' ","Dark and broody", "Some say you're 'special' ", "I'm fabulous"]
	},

	{
		question: "Which climate best suits you?", 
		answers: ["Temperate", "Too humid","Extreme heat" , "What's a climate?","The tropics"]
	},

	{
		question: "If you could have one power, what would it be?" , 
		answers: ["Magic", "Breathing underwater", "Telekenesis", "Ka-ra-te!", "A mic of steel"]
	},

	{
		question: "Signature dance move?" , 
		answers: ["I don't dance", "'The Flail'","'The Robot'","The 'Nae Nae'", "'Pass the Dishes'"  ]
	},

	{
		question: "What weapon would you bring to a street fight?" , 
		answers: ["An invisibility cloack and a sharp blade", "A powerful electrical... stick", "Can I use telekenesis twice?", "Brass Knuckles", "A highnote that could kill a man" ]
	}
];




//declare character types that people can get matched with

//put all characters in an array
var characterArray = [

{
	character: "Ron Weasley",
	movie: "Harry Potter",
	description: "Congratulations? Looks like you landed yourself in the wizardly world of Harry Potter and friends. Your best friend is the most powerful wizard in the world, but it seemingly eats you up inside. Quidditch? Potions class? Being the chosen one? Destructive magic? Battling dark lords? Harry is beating you at every turn you take. You need to step up your game Ronald Weasley.",
	score: 0,
	link: "http://images.hellogiggles.com/uploads/2015/07/10/Ron-Weasley-e1436589589658.jpg"
},
{
	character: "Jar-jar Binks",
	movie: "Star Wars, Episode II",
	description: "'Ay-yee-yee! Wha! Was’n dat. Hey, wait! Oh, mooie-mooie! I love you!' Wow. Looks like you got Jar-jar binks. You single handedly served to ruin an entire movie. You-sa should take this quiz again-sa. 'OOOOOEEEYOOOOOEEEEEEEE'",
	score: 0,
	link: "http://www.themarysue.com/wp-content/uploads/2015/05/16-dallas-cowboys-jar-jar-binks_pg_600-640x476.jpg"
},
{
	character: "Anakin Skywalker",
	movie: "Star Wars, Episode II",
	description: "Is she safe? Is she all right? Well, now you've done it Lord Vader. You made a deal with the devil and lost the love of your life. It looks li - wha - what are you doi - *narrator is force choked* NOOO *choking sounds*",
	score: 0,
	link: "http://im.ziffdavisinternational.com/t/ign_in/news/a/anakin-sky/anakin-skywalker-could-have-been-in-star-wars-the_zt55.640.jpg"
},
{
	character: "Matt Damon",
	movie: "Matt Damon",
	description: "MAAAAT DDAAAAAMOONNN",
	score: 0,
	link: "http://www.interfaithstrength.com/Newt2_files/Matt-Damon-Puppet.jpg"
},
{
	character: "Ruby Rhod",
	movie: "The Fifth Element",
	description: "In 'The Fifth Element', Ruby Rhod is a famous host of a radio show with a quarter of The Federated Territories population (over fifty billion people) listening to his show. He is an incredibly annoying character. These quiz results do not bode well for you. I recommend retaking this quiz",
	score: 0,
	link: "http://vignette4.wikia.nocookie.net/bloodandhonor/images/7/74/Ruby_Rhod.jpg/revision/latest?cb=20120709161623"
}
];

var quizPosition = 0;

$(document).ready(function() {

//populate a question on the screen using object for questions and answers
generateQuestion();
quizPosition++;

	//do all the normal stuff up through 5 submissions
	$("form").on("submit", function(event) {
		event.preventDefault();
		if (quizPosition==questionArray.length) {
			updateScore();
			$("#submitbutton").val("See Results").addClass('resultsButton');
			$(".answers").hide();
			$(".thequestion").text("Check to see how you did!");
			$("form")[0].reset();
			quizPosition++;
			
		}
		else if (quizPosition < questionArray.length) {
			updateScore();
			generateQuestion();
			quizPosition++;
		}
		else if (quizPosition > questionArray.length) {
			chooseWinner();
		}
		
	});

	$('#newGame').click(function(event){
		event.preventDefault();
		quizPosition = 0;
		for (var i = 0; i < characterArray.length; i++) {
			characterArray[i].score = 0;
		}
		generateQuestion();
		$(".results").hide();
		$("#submitbutton").show();
		$(".answers").show();
		$("#submitbutton").val("submit").removeClass('resultsButton');
		$(".questionnumber .update").text((quizPosition+1)+"/"+questionArray.length);
		$(".completion .update").text(((quizPosition/questionArray.length)*100)+"%");
		quizPosition++;
	});
});


//evaluate answers
	//--> tally up the scores and check to see which is highest

//tally and display user score
	//--> manipulate dom to hide and display results screen

function generateQuestion () {
	$('input:checked').prop('checked',false);
	var position = questionArray[quizPosition];
	var answers = position.answers;
	var liCount = 0;
	$(".thequestion").text(position.question);
	$("label").each(function() {
		$(this).text(answers[liCount]);
		liCount++;

	});
}

function chooseWinner () {
var highest = 1;
var tempScore, winner;
for (var i = 0; i < characterArray.length; i++) {
	tempScore = characterArray[i].score;
	if (tempScore > highest) {
		highest = tempScore;
		winner = i;
	}
}
displayResults(winner);
}

function displayResults (winDex) {

	$(".results").show();
	$("#submitbutton").hide();
	$('.thequestion').text('Looks like you got: ');
	$(".results h2").append(characterArray[winDex].character);
	$(".results img").attr("src", characterArray[winDex].link);
	$(".results p").text(characterArray[winDex].description);

}

function updateScore() {

	var selection = $('input[name=choices]:checked', 'form').val();
	characterArray[selection-1].score+=1;
	if (quizPosition === questionArray.length) {
		x = 0;
	}
	else {
		x = 1;
	}
	
	$(".questionnumber .update").text((quizPosition+x)+"/"+questionArray.length);
	$(".completion .update").text(((quizPosition/questionArray.length)*100)+"%");
}